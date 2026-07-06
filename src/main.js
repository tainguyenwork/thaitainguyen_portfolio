// Main application script for Premium Editorial Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initThemeToggle();
  initScrollEffects();
  initMenuMobile();
  initCounters();
  initContactForm();
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
   2. Custom Interactive Cursor
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Smooth follower animation loop
  function animateFollower() {
    // Interpolate follower coordinates toward mouse position (higher = faster)
    const ease = 0.28;
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;
    
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });

  // Add hover state listeners on all interactive elements
  function refreshHoverListeners() {
    const hoverables = document.querySelectorAll('a, button, input, textarea, .theme-btn, .project-card, [role="button"]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        follower.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
        follower.classList.remove('hovered');
      });
    });
  }
  
  refreshHoverListeners();
  
  // Expose this so dynamically loaded content can re-bind listeners
  window.refreshHoverListeners = refreshHoverListeners;
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
  
  // Update scroll progress bar
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

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

  window.addEventListener('scroll', triggerScrollReveal);
  
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
  
  window.addEventListener('scroll', () => {
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
  });
}

function triggerScrollReveal() {
  const triggerBottom = window.innerHeight * 0.85;
  
  revealElements.forEach((el) => {
    const box = el.getBoundingClientRect();
    if (box.top < triggerBottom) {
      el.classList.add('active');
    }
  });
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
  const statusDiv = document.querySelector('.form-status');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    
    // UI Visual feedback
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    
    // Simulate API request (e.g. Formspree / Vercel Serverless / static trigger)
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = originalText;
      
      // Success feedback animation
      if (statusDiv) {
        statusDiv.innerText = 'Thank you! Your message has been sent successfully.';
        statusDiv.className = 'form-status success';
        
        // Reset form inputs
        form.reset();
        
        // Remove success message after a few seconds
        setTimeout(() => {
          statusDiv.style.display = 'none';
        }, 5000);
      }
    }, 1500);
  });
}
