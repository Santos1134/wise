document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav a');

  // Toggle navigation menu
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Close menu when a link is clicked (better UX on mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (nav && toggle) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = toggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    }
  });

  // Handle window resize - close menu if switching to desktop view
  window.addEventListener('resize', () => {
    if (nav && window.innerWidth > 768 && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  });

  // Team Card "See More" functionality
  const seeMoreButtons = document.querySelectorAll('.see-more-btn');

  seeMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.team-card');
      const bioText = card.querySelector('.bio-text');

      if (bioText.classList.contains('expanded')) {
        bioText.classList.remove('expanded');
        this.textContent = 'See More';

        // Smooth scroll to card top when collapsing
        setTimeout(() => {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        bioText.classList.add('expanded');
        this.textContent = 'See Less';
      }
   


    });
  });

  // Contact form handling - clear form after submission
  const contactForm = document.querySelector('form[action*="web3forms.com"]');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const submitButton = this.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Clear the form fields after successful submission
          this.reset();
          showNotification('Message sent successfully! We will get back to you soon.', 'success');
        } else {
          showNotification('There was an error sending your message. Please try again.', 'error');
        }
      } catch (error) {
        showNotification('There was an error sending your message. Please try again.', 'error');
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

  // Function to show custom notification
  function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    // Remove notification after 4 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);
  }
});
