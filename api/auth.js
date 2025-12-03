// Admin Authentication API
// Uses environment variable for secure password storage

export const config = {
    runtime: 'edge',
};

export default async function handler(request) {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    if (request.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            { status: 405, headers }
        );
    }

    try {
        const { password } = await request.json();
        
        // Get admin password from environment variable
        // Set this in Vercel: BVCC_ADMIN_PASSWORD
        const adminPassword = process.env.BVCC_ADMIN_PASSWORD || 'bvcc2024';
        
        if (password === adminPassword) {
            // Generate a simple session token (valid for 24 hours)
            const token = generateToken();
            const expiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
            
            return new Response(
                JSON.stringify({ 
                    success: true, 
                    token,
                    expiry,
                    message: 'Authentication successful'
                }),
                { status: 200, headers }
            );
        } else {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Invalid password' 
                }),
                { status: 401, headers }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Authentication failed' }),
            { status: 500, headers }
        );
    }
}

// Generate a secure random token
function generateToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
