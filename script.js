// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================================
// Mobile Navigation Toggle
// ===================================
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Animate hamburger icon
  const spans = navToggle.querySelectorAll('span');
  spans.forEach((span, index) => {
    if (navLinks.classList.contains('active')) {
      if (index === 0) span.style.transform = 'rotate(45deg) translateY(10px)';
      if (index === 1) span.style.opacity = '0';
      if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      span.style.transform = '';
      span.style.opacity = '';
    }
  });
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => {
      span.style.transform = '';
      span.style.opacity = '';
    });
  });
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// ===================================
// Service Cards Hover Effect Enhancement
// ===================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    // Add subtle scale effect
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// ===================================
// Contact Cards Interactive Effect
// ===================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.contact-icon');
    icon.style.transform = 'scale(1.1) rotate(5deg)';
    icon.style.transition = 'transform 0.3s ease';
  });
  
  card.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.contact-icon');
    icon.style.transform = '';
  });
});

// ===================================
// Dynamic Year in Footer
// ===================================
const updateFooterYear = () => {
  const currentYear = new Date().getFullYear();
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
  }
};

updateFooterYear();

// ===================================
// Add Ripple Effect to Buttons
// ===================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===================================
// Parallax Effect for Hero Background
// ===================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  
  if (hero) {
    const parallaxSpeed = 0.5;
    hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// ===================================
// Performance Optimization: Debounce Scroll Events
// ===================================
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll-heavy functions
const efficientScroll = debounce(() => {
  // Scroll-dependent code here
});

window.addEventListener('scroll', efficientScroll);

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Xin chào!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cWebsite được thiết kế bởi Đinh Tiến Vũ', 'font-size: 14px; color: #4a5568;');
console.log('%cLiên hệ: dinhtienvu102@gmail.com', 'font-size: 12px; color: #718096;');
