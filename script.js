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
});
