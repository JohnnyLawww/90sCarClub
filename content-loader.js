/* ============================================
   BVCC Content Loader - SIMPLE CMS MODE
   
   This loads ONLY contact info from CMS (admin panel).
   All visual design & layout stays from index.html.
   
   What the client CAN edit via admin panel:
   - Contact email
   - Contact phone  
   - Address
   - Operating hours
   - Social media links
   
   What stays hardcoded in HTML (for design consistency):
   - Hero text
   - About section
   - Location section
   - Fleet section
   - Membership section
   - All images
   - All styling/colors
   ============================================ */

document.addEventListener('DOMContentLoaded', async () => {
    await loadContactInfo();
});

async function loadContactInfo() {
    try {
        const response = await fetch('/api/content');
        const data = await response.json();
        
        if (data.success && data.content && data.content.contact) {
            applyContactInfo(data.content.contact);
        }
    } catch (error) {
        console.log('Using default contact info from HTML');
    }
}

function applyContactInfo(contact) {
    // Update footer contact info
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    // Update email
    if (contact.email) {
        const emailLinks = footer.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.href = `mailto:${contact.email}`;
        });
        
        const emailDisplay = footer.querySelector('.contact-email-display');
        if (emailDisplay) {
            emailDisplay.innerHTML = `<a href="mailto:${contact.email}">${contact.email}</a>`;
        }
    }
    
    // Update phone
    if (contact.phone) {
        const phoneEl = footer.querySelector('.contact-phone');
        if (phoneEl) {
            phoneEl.innerHTML = `<a href="tel:${contact.phone}">${contact.phone}</a>`;
        }
    }
    
    // Update address
    if (contact.address) {
        const addressEl = footer.querySelector('.contact-address');
        if (addressEl) {
            addressEl.textContent = contact.address;
        }
    }
    
    // Update hours
    if (contact.hours) {
        const hoursEl = footer.querySelector('.contact-hours');
        if (hoursEl) {
            hoursEl.textContent = contact.hours;
        }
    }
}
