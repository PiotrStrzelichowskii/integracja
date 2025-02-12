document.addEventListener('DOMContentLoaded', () => {
  const gridElements = document.querySelectorAll('.grid-element');
  const container = document.querySelector('.second-row-grid');
  
  const observer = new IntersectionObserver((entries) => {
    const containerEntry = entries[0];
    
    if (containerEntry.isIntersecting) {
      gridElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate');
        }, index * 200);
      });
    } else {
      gridElements.forEach(element => {
        element.classList.remove('animate');
      });
    }
  }, {
    threshold: 0.15,
    rootMargin: '-50px 0px'
  });

  // Obserwujemy kontener
  if (container) {
    observer.observe(container);
  }
});


document.addEventListener("scroll", function() {
  let scrollTop = window.scrollY;
  let text = document.querySelector(".parallax-text");
  let translateY = scrollTop * -0.3; 
  text.style.transform = `translateY(${translateY}px)`;
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const details = button.previousElementSibling;
    const gridItem = button.closest('.page-4-grid-item');
    
    if (details) {
      const contentHeight = details.scrollHeight;
      
      if (!details.classList.contains('expanded')) {
        // Najpierw ustawiamy wysokość na 0
        details.style.height = '0';
        // Wymuszamy przeliczenie układu (reflow)
        details.offsetHeight;
        // Teraz ustawiamy docelową wysokość
        details.style.height = contentHeight + 'px';
        details.classList.add('expanded');
      } else {
        details.style.height = contentHeight + 'px';
        // Wymuszamy przeliczenie układu (reflow)
        details.offsetHeight;
        details.style.height = '0';
        details.classList.remove('expanded');
      }
      
      button.textContent = details.classList.contains('expanded') ? 'Zwiń' : 'Czytaj więcej';
    }
  });
});