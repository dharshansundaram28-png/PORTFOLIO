document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      // EmailJS integration stub based on user requirement
      // Ensure EmailJS script is included in contact.html:
      // <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      // <script type="text/javascript">emailjs.init('YOUR_PUBLIC_KEY')</script>
      
      if (typeof emailjs !== 'undefined') {
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        //   .then(() => {
        //     showStatus('Message sent successfully!', 'success');
        //     contactForm.reset();
        //   }, (error) => {
        //     showStatus('Failed to send message. Please try again.', 'error');
        //     console.error('EmailJS Error:', error);
        //   }).finally(() => {
        //     submitBtn.innerText = originalText;
        //     submitBtn.disabled = false;
        //   });
        
        // Simulating EmailJS call for now
        setTimeout(() => {
          showStatus('Message sent successfully! (Simulated)', 'success');
          contactForm.reset();
          submitBtn.innerText = originalText;
          submitBtn.disabled = false;
        }, 1500);
      } else {
        showStatus('EmailJS not initialized. Form submitted locally.', 'error');
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showStatus(message, type) {
    let statusDiv = document.getElementById('form-status');
    if (!statusDiv) {
      statusDiv = document.createElement('div');
      statusDiv.id = 'form-status';
      contactForm.appendChild(statusDiv);
    }
    
    statusDiv.textContent = message;
    statusDiv.style.marginTop = '1rem';
    statusDiv.style.padding = '0.75rem';
    statusDiv.style.borderRadius = 'var(--radius-md)';
    statusDiv.style.fontWeight = '500';
    statusDiv.style.textAlign = 'center';
    
    if (type === 'success') {
      statusDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
      statusDiv.style.color = '#10b981';
      statusDiv.style.border = '1px solid rgba(16, 185, 129, 0.2)';
    } else {
      statusDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
      statusDiv.style.color = '#ef4444';
      statusDiv.style.border = '1px solid rgba(239, 68, 68, 0.2)';
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      statusDiv.remove();
    }, 5000);
  }
});
