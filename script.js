if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    window.scrollTo(0, 0);
}

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

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Opcjonalnie: usuń klasę active gdy element nie jest widoczny
        // entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  // Obserwuj wszystkie elementy z animacją
  document.querySelectorAll('.slide-from-left, .slide-from-right').forEach((element) => {
    observer.observe(element);
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


document.addEventListener("DOMContentLoaded", function() {
  const texts = [
      "Nie czekaj – ruszaj w teren z nami!",
      "Twoja przygoda zaczyna się tutaj!",
      "Gotowy na ekstremalne emocje?"
  ];
  
  let index = 0;
  const textElement = document.getElementById("changing-text");

  function changeText() {
    textElement.style.animation = 'none';
    textElement.offsetHeight; // Wymuszenie reflow
    textElement.style.animation = null;
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
  }

  setInterval(changeText, 5000);
});

let lastScrollPosition = 0;
const header = document.querySelector('.site-header');
let ticking = false;

// Ustaw początkową pozycję przewijania
lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.pageYOffset;
      
      // Zawsze pokazuj header gdy jesteśmy na samej górze
      if (currentScrollPosition <= 0) {
        header.style.transform = 'translateY(0)';
      }
      // Pokazuj header podczas scrollowania w górę
      else if (currentScrollPosition < lastScrollPosition) {
        header.style.transform = 'translateY(0)';
      }
      // Ukrywaj header podczas scrollowania w dół
      else {
        header.style.transform = 'translateY(-100%)';
      }
      
      lastScrollPosition = currentScrollPosition;
      ticking = false;
    });
    
    ticking = true;
  }
});

// Pokazuj header na początku
header.style.transform = 'translateY(0)';

document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
      
      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // Sprawdź przy pierwszym załadowaniu
});
