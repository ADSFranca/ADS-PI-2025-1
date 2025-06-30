//Isso serve para a header aparecer e desaparecer conforme mexo o mouse pra cima e baixo
// Código corrigido para o header
document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  let ticking = false;

  window.addEventListener("scroll", function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona uma tolerância de 5px para evitar oscilações
        if (Math.abs(currentScroll - lastScrollTop) < 5) {
          ticking = false;
          return;
        }

        if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
          // Rolando para baixo: esconde o header
          header.style.transform = `translateY(-${headerHeight}px)`;
          header.style.transition = "transform 0.3s ease-out";
        } else {
          // Rolando para cima ou no topo: mostra o header
          header.style.transform = "translateY(0)";
          header.style.transition = "transform 0.3s ease-out";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
});

//Isso serve para o quadrado de missao visao e valores ter efeito carrosel
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  let interval;

  function updateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next');
      
      if (i === index) {
        slide.classList.add('active');
      } else if (i < index) {
        slide.classList.add('prev');
      } else {
        slide.classList.add('next');
      }
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    updateSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
  }

  function startAutoRotate() {
    interval = setInterval(nextSlide, 5000);
  }

  // Event Listeners
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoRotate();
  });
  
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoRotate();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateSlide(index);
      resetAutoRotate();
    });
  });

  function resetAutoRotate() {
    clearInterval(interval);
    startAutoRotate();
  }

  // Controles de hover
  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', startAutoRotate);
  
  // Inicialização
  updateSlide(0);
  startAutoRotate();
});

///SEÇÃO NOSSAS REALIZAÇÕES
document.addEventListener('DOMContentLoaded', function() {
    const realizacoesCarousel = document.querySelector('.realizacoes-carousel');
    const items = document.querySelectorAll('.realizacao-item');
    const dots = document.querySelectorAll('.realizacoes-dot');
    const prevBtn = document.querySelector('.realizacoes-prev');
    const nextBtn = document.querySelector('.realizacoes-next');
    
    let currentIndex = 0;
    let interval;

    // Função para mostrar item
    function showItem(index) {
        // Remove classe ativa de todos
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Atualiza índice
        currentIndex = (index + items.length) % items.length;
        
        // Adiciona classe ativa
        items[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        clearInterval(interval);
        showItem(currentIndex + 1);
        startAutoRotate();
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(interval);
        showItem(currentIndex - 1);
        startAutoRotate();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            showItem(index);
            startAutoRotate();
        });
    });
    
    function startAutoRotate() {
        clearInterval(interval);
        interval = setInterval(() => showItem(currentIndex + 1), 8000);
    }
    
    // Controles de hover
    realizacoesCarousel.addEventListener('mouseenter', () => clearInterval(interval));
    realizacoesCarousel.addEventListener('mouseleave', startAutoRotate);
    
    // Inicialização
    showItem(0);
    startAutoRotate();
});

// Carrossel de Parceiros - Versão Deslizante
function initPartnersCarousel() {
    const carousel = document.querySelector('.partners-carousel');
    const grid = document.querySelector('.partners-grid');
    const items = document.querySelectorAll('.partner-logo-box');
    const prevBtn = document.querySelector('.partners-prev');
    const nextBtn = document.querySelector('.partners-next');
    
    if (!grid || items.length < 3) return; // Precisa de pelo menos 3 itens
    
    const itemWidth = items[0].offsetWidth + 30; // Largura + gap
    let currentIndex = 0;
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    
    // Clona os primeiros itens e adiciona no final para efeito contínuo
    items.forEach((item, index) => {
        if (index < visibleItems) {
            const clone = item.cloneNode(true);
            grid.appendChild(clone);
        }
    });

    // Atualiza o carrossel
    function updateCarousel() {
        grid.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        grid.style.transition = 'transform 0.5s ease';
        
        // Quando chegar no final, volta sem animação
        if (currentIndex >= items.length) {
            setTimeout(() => {
                grid.style.transition = 'none';
                currentIndex = 0;
                grid.style.transform = `translateX(0)`;
            }, 500);
        }
        
        // Quando voltar ao início, ajusta sem animação
        if (currentIndex < 0) {
            setTimeout(() => {
                grid.style.transition = 'none';
                currentIndex = items.length - 1;
                grid.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }, 500);
        }
    }

    // Próximo item
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    // Item anterior
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    // Inicializa
    updateCarousel();

    // Redimensionamento
    window.addEventListener('resize', () => {
        const newItemWidth = items[0].offsetWidth + 30;
        currentIndex = Math.round(currentIndex * itemWidth / newItemWidth);
        itemWidth = newItemWidth;
        updateCarousel();
    });
}

// Carrossel de Eventos
document.addEventListener('DOMContentLoaded', function() {
  const eventCarousel = document.querySelector('.event-carousel');
  const items = document.querySelectorAll('.event-item');
  const dots = document.querySelectorAll('.event-dots .dot');
  const prevBtn = document.querySelector('.event-prev');
  const nextBtn = document.querySelector('.event-next');
  
  let currentIndex = 0;
  let interval;

  // Função para mostrar item
  function showItem(index) {
      // Remove classe ativa de todos
      items.forEach(item => item.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Atualiza índice
      currentIndex = (index + items.length) % items.length;
      
      // Adiciona classe ativa
      items[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
      clearInterval(interval);
      showItem(currentIndex + 1);
      startAutoRotate();
  });
  
  prevBtn.addEventListener('click', () => {
      clearInterval(interval);
      showItem(currentIndex - 1);
      startAutoRotate();
  });
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          clearInterval(interval);
          showItem(index);
          startAutoRotate();
      });
  });
  
  function startAutoRotate() {
      clearInterval(interval);
      interval = setInterval(() => showItem(currentIndex + 1), 8000);
  }
  
  // Controles de hover
  eventCarousel.addEventListener('mouseenter', () => clearInterval(interval));
  eventCarousel.addEventListener('mouseleave', startAutoRotate);
  
  // Inicialização
  showItem(0);
  startAutoRotate();
});

// Carrossel Nossa História
document.addEventListener('DOMContentLoaded', function() {
  const historiaCarousel = document.querySelector('.historia-carousel');
  const items = document.querySelectorAll('.historia-carousel .carousel-item');
  const dots = document.querySelectorAll('.historia-dots .dot');
  const prevBtn = document.querySelector('.historia-prev');
  const nextBtn = document.querySelector('.historia-next');
  
  let currentIndex = 0;
  let interval;

  // Função para mostrar item
  function showItem(index) {
      // Remove classe ativa de todos
      items.forEach(item => item.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Atualiza índice
      currentIndex = (index + items.length) % items.length;
      
      // Adiciona classe ativa
      items[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
      clearInterval(interval);
      showItem(currentIndex + 1);
      startAutoRotate();
  });
  
  prevBtn.addEventListener('click', () => {
      clearInterval(interval);
      showItem(currentIndex - 1);
      startAutoRotate();
  });
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          clearInterval(interval);
          showItem(index);
          startAutoRotate();
      });
  });
  
  function startAutoRotate() {
      clearInterval(interval);
      interval = setInterval(() => showItem(currentIndex + 1), 8000);
  }
  
  // Controles de hover
  if (historiaCarousel) {
      historiaCarousel.addEventListener('mouseenter', () => clearInterval(interval));
      historiaCarousel.addEventListener('mouseleave', startAutoRotate);
  }
  
  // Inicialização
  if (items.length > 0) {
      showItem(0);
      startAutoRotate();
  }
});

// Inicia quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initPartnersCarousel);

// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  
  const header = document.querySelector('header .container');
  header.appendChild(menuToggle);
  
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a'); // Seleciona todos os links
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Adiciona evento de clique para cada link de navegação
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Fecha o menu
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      
      // Se for um link âncora, rola suavemente para a seção
      if(this.getAttribute('href').startsWith('#')) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          event.preventDefault(); // Previne o comportamento padrão
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Ajuste para o header fixo
            behavior: 'smooth'
          });
          
          // Adiciona um pequeno delay para melhor experiência
          setTimeout(() => {
            targetElement.focus(); // Foco para acessibilidade
          }, 1000);
        }
      }
    });
  });
});