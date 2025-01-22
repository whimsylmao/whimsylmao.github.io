document.addEventListener('DOMContentLoaded', () => {
  createFloatingNuggets();
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-element').forEach(element => {
    observer.observe(element);
  });
});

function createFloatingNuggets() {
  const container = document.querySelector('.floating-nuggets');
  const nuggetCount = 15;

  for (let i = 0; i < nuggetCount; i++) {
    const nugget = document.createElement('div');
    nugget.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      opacity: 0.3;
      pointer-events: none;
    `;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "20,50 40,20 80,20 90,50 80,80 40,80");
    polygon.setAttribute("fill", "#FFD700");
    
    svg.appendChild(polygon);
    nugget.appendChild(svg);
    
    nugget.style.left = `${Math.random() * 100}%`;
    nugget.style.top = `${Math.random() * 100}%`;
    
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * -20;
    
    nugget.animate([
      { transform: 'translateY(0) rotate(0deg)' },
      { transform: 'translateY(-100vh) rotate(360deg)' }
    ], {
      duration: duration * 1000,
      iterations: Infinity,
      delay: delay * 1000,
      easing: 'linear'
    });

    container.appendChild(nugget);
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const limit = hero.offsetTop + hero.offsetHeight;
  
  if (scrolled <= limit) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
