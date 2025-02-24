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
  const navLinks = document.querySelectorAll('nav ul li a');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('gallery-item')) {
          const delay = Array.from(element.parentNode.children).indexOf(element) * 0.1;
          element.style.transitionDelay = `${delay}s`;
          element.classList.add('visible');
        } else if (element.classList.contains('slide-from-left') || 
                   element.classList.contains('slide-from-right')) {
          element.classList.add('active');
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  document.querySelectorAll('.gallery-item, .slide-from-left, .slide-from-right').forEach((element) => {
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
        details.style.height = '0';
        details.offsetHeight;
        details.style.height = contentHeight + 'px';
        details.classList.add('expanded');
      } else {
        details.style.height = contentHeight + 'px';
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
  const textElements = document.querySelectorAll(".changing-text");

  function changeText() {
    textElements.forEach(element => {
      element.style.animation = 'none';
      element.offsetHeight; 
      element.style.animation = null;
      element.textContent = texts[index];
    });
    index = (index + 1) % texts.length;
  }

  setInterval(changeText, 5000);
});

let lastScrollPosition = 0;
const header = document.querySelector('.site-header');
let ticking = false;

lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition <= 0) {
        header.style.transform = 'translateY(0)';
      }
      else if (currentScrollPosition < lastScrollPosition) {
        header.style.transform = 'translateY(0)';
      }
      else {
        header.style.transform = 'translateY(-100%)';
      }
      
      lastScrollPosition = currentScrollPosition;
      ticking = false;
    });
    
    ticking = true;
  }
});

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
  checkFade(); 
});

/* Galeria */



document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        // Oblicz opóźnienie na podstawie pozycji elementu w galerii
        const delay = Array.from(item.parentNode.children).indexOf(item) * 0.1;
        item.style.transitionDelay = `${delay}s`;
        item.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  document.querySelectorAll('.gallery-item').forEach((item) => {
    observer.observe(item);
  });
});


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener('load', () => {
  const titleText = document.querySelector('.title-text');
  titleText.classList.add('visible');
});


let currentIndex = 0;
    const galleryItems = document.querySelectorAll('.gallery-item');

    function openModal(element) {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");
      const captionText = document.getElementById("caption");
      
      modal.style.display = "flex"; 
      modalImg.src = element.querySelector('img').src;
      captionText.innerHTML = element.querySelector('img').alt;

      currentIndex = Array.from(galleryItems).indexOf(element); 

      const span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none"; 
      }

      // Funkcje do przesuwania zdjęć
      document.getElementById('prevBtn').onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        modalImg.src = galleryItems[currentIndex].querySelector('img').src;
        captionText.innerHTML = galleryItems[currentIndex].querySelector('img').alt;
      };

      document.getElementById('nextBtn').onclick = function() {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        modalImg.src = galleryItems[currentIndex].querySelector('img').src;
        captionText.innerHTML = galleryItems[currentIndex].querySelector('img').alt;
      };
    }
