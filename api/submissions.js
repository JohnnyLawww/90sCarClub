import { createClient } from '@vercel/kv';

// Initialize KV client with custom prefix
const kv = createClient({
  url: process.env.BVCC_KV_REST_API_URL,
  token: process.env.BVCC_KV_REST_API_TOKEN,
});

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // GET - Retrieve all submissions
    if (request.method === 'GET') {
      const submissions = await kv.get('bvcc_submissions') || [];
      
      return new Response(JSON.stringify({
        success: true,
        submissions
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    // POST - Add new submission
    if (request.method === 'POST') {
      const submission = await request.json();
      
      // Add timestamp
      submission.timestamp = new Date().toISOString();
      submission.id = Date.now().toString();

      // Get existing submissions
      const submissions = await kv.get('bvcc_submissions') || [];
      
      // Add new submission
      submissions.push(submission);

      // Save back to Redis
      await kv.set('bvcc_submissions', submissions);

      return new Response(JSON.stringify({
        success: true,
        message: 'Submission saved successfully'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    // DELETE - Clear all submissions (admin only)
    if (request.method === 'DELETE') {
      const body = await request.json();
      const { password } = body;

      if (password !== 'bvcc2024') {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid password'
        }), {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        });
      }

      await kv.set('bvcc_submissions', []);

      return new Response(JSON.stringify({
        success: true,
        message: 'All submissions cleared'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      error: 'Method not allowed'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });

  } catch (error) {
    console.error('Submissions API Error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}
