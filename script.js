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

  // Gallery Photos Data - Add your photos here!
  const galleryPhotos = [
    {
      image: 'images/1.jpg',
      title: 'WISE Liberia Event',
      description: 'Certification ceremony'
    },
    {
      image: 'images/1763767052552.jpg',
      title: 'Digital literacy training',
      description: 'Gaining Hands on experience with computers'
    },
    {
      image: 'images/1763767137525.jpg',
      title: 'Program Launch',
      description: 'In collaboration with Gloabl Changemakers'
    },
    {
      image: 'images/1763767147002.jpg',
      title: 'Launching Innovative Space',
      description: 'Cutting of Ribbon by Rev. Sr. Grace Boro'
    },
    {
      image: 'images/1763767153807.jpg',
      title: 'Launching Innovative Space',
      description: 'Cutting of Ribbon by Rev. Sr. Grace Boro'
    },
    {
      image: 'images/1763767169906.jpg',
      title: 'Unveiling of Space',
      description: 'Showcasing our training space'
    },
    {
      image: 'images/1763767173103.jpg',
      title: 'Group Photo Session',
      description: 'After climaxing the launching event'
    },
    {
      image: 'images/1763767197629.jpg',
      title: 'Learning Together',
      description: 'Students received certificates after training'
    },
    {
      image: 'images/1763767201032.jpg',
      title: 'Certification Ceremony',
      description: 'Celebrating achievements'
    },
    {
      image: 'images/1763767204569.jpg',
      title: 'Certification Day',
      description: 'Andrew Garwway, Program Supervisor'
    },
    {
      image: 'images/1763767207847.jpg',
      title: 'certification Event',
      description: 'Sylvanus Tucker Tumbey, Program Coordinator'
    },
    {
      image: 'images/1763767215079.jpg',
      title: 'certification Ceremony',
      description: 'Student Success Peters receiving her certificate'
    },
    {
      image: 'images/1763767383580.jpg',
      title: 'Community Impact',
      description: 'Making a difference together'
    },
    {
      image: 'images/1763767392457.jpg',
      title: 'Educational Programs',
      description: 'Learning and growing together'
    },
    {
      image: 'images/1763767407944.jpg',
      title: 'Workshop Session',
      description: 'Hands-on experience and collaboration'
    },
    {
      image: 'images/1763767413978.jpg',
      title: 'Team Building',
      description: 'Strengthening our community'
    },
    {
      image: 'images/1763767435770.jpg',
      title: 'Quizzing Tournament',
      description: 'Participarts photos'
    },
    {
      image: 'images/1763767449372.jpg',
      title: 'Quizzing Tournament',
      description: 'At the Pavalion'
    },
    {
      image: 'images/1763767457328.jpg',
      title: 'Certification Event',
      description: 'Together we make a difference'
    }
    // Add more photos here - just copy the format above!
  ];

  // Load Gallery Photos Dynamically
  const galleryGrid = document.querySelector('.gallery-grid');

  if (galleryGrid && galleryPhotos.length > 0) {
    // Clear existing placeholder content
    galleryGrid.innerHTML = '';

    // Generate gallery items from the array
    galleryPhotos.forEach(photo => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';

      galleryItem.innerHTML = `
        <div class="gallery-image">
          <img src="${photo.image}" alt="${photo.title}" onerror="this.src='images/4.jpg'">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>${photo.title}</h3>
              <p>${photo.description}</p>
            </div>
          </div>
        </div>
      `;

      galleryGrid.appendChild(galleryItem);
    });
  }
});
