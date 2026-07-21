// Main application script for Premium Editorial Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initThemeToggle();
  initScrollEffects();
  initMenuMobile();
  initCounters();
  initContactForm();
  initLightbox();
});

/* ==========================================================================
   1. Preloader Screen
   ========================================================================== */
function initPreloader() {
  const loader = document.querySelector('.loader-screen');
  if (!loader) return;

  window.addEventListener('load', () => {
    // Give a small delay after load to let the line fill animation complete nicely
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      
      // Let content anim start
      setTimeout(() => {
        document.body.classList.add('loaded');
        // Trigger initial reveal for items in viewport
        triggerScrollReveal();
      }, 300);
    }, 1500);
  });

  // Fallback in case load event takes too long
  setTimeout(() => {
    if (loader.style.opacity !== '0') {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      document.body.classList.add('loaded');
      triggerScrollReveal();
    }
  }, 4000);
}


/* ==========================================================================
   3. Theme Toggling (Dark/Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.querySelector('.theme-btn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/* ==========================================================================
   4. Scroll Effects (Reveal Animations & Scroll Progress)
   ========================================================================== */
let revealElements = [];
function initScrollEffects() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  
  // Scroll reveal setup
  revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  
  // Set stagger transition delays
  const staggers = document.querySelectorAll('.reveal-stagger');
  staggers.forEach((stagger) => {
    const children = stagger.children;
    Array.from(children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.15}s`;
    });
  });

  // Skill bar animation reveal
  const skillSection = document.querySelector('.skills-grid');
  if (skillSection) {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            const percentage = bar.getAttribute('data-percent');
            bar.style.width = percentage + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(skillSection);
  }

  // Active navigation links based on scroll section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Update scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
          progressBar.style.width = scrolled + '%';
        }

        // Active navigation links
        let currentId = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentId = section.getAttribute('id');
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}` || (link.getAttribute('href') === '/' && !currentId)) {
            link.classList.add('active');
          }
        });

        triggerScrollReveal();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function triggerScrollReveal() {
  const triggerBottom = window.innerHeight * 0.85;
  const elsToReveal = [];
  
  revealElements.forEach((el) => {
    if (!el.classList.contains('active')) {
      const box = el.getBoundingClientRect();
      if (box.top < triggerBottom) {
        elsToReveal.push(el);
      }
    }
  });
  
  elsToReveal.forEach(el => el.classList.add('active'));
}

// Global expose
window.triggerScrollReveal = triggerScrollReveal;

/* ==========================================================================
   5. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMenuMobile() {
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle body scroll
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   6. Statistics Counter Animation
   ========================================================================== */
function initCounters() {
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  const counters = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target'));
          let count = 0;
          const duration = 2000; // milliseconds
          const increment = target / (duration / 16); // 60fps roughly
          
          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target + (counter.getAttribute('data-suffix') || '');
            }
          };
          updateCount();
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/* ==========================================================================
   7. Contact Form Handling with Floating Labels
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Open standard email client
    window.location.href = `mailto:nguyenthaitai.work@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   8. Lightbox for Case Study Galleries
   ========================================================================== */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length === 0) return;

  // Create lightbox markup
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close Lightbox">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <img class="lightbox-img" src="" alt="Lightbox View" />
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Lightbox
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
