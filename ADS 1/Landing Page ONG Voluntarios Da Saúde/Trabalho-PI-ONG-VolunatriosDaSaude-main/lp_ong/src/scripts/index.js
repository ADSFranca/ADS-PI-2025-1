document.addEventListener('DOMContentLoaded', () => {
  // ============ 1. ANIMAÇÃO DO HERO (BLOCO 1) ============
  const heroTitle = document.querySelector('#home .title');
  const heroDescription = document.querySelector('#home .description');
  const heroButtons = document.querySelector('#cta_buttons');
  const heroImage = document.querySelector('.mao-banner');
  const squares = document.querySelectorAll('.square');

  // Animação do texto e botões
  gsap.from([heroTitle, heroDescription, heroButtons], {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Animação da imagem principal
  gsap.from(heroImage, {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.4)'
  });

  // Animação dos quadrados (efeito sequencial)
  squares.forEach((square, index) => {
    gsap.from(square, {
      duration: 0.6,
      scale: 0,
      opacity: 0,
      delay: 0.1 * index,
      ease: 'elastic.out(1, 0.5)'
    });
  });

  // ============ 2. ANIMAÇÃO DOS CARDS DE BENEFÍCIOS (BLOCO 2) ============
  const benefitCards = document.querySelectorAll('.cartao');

  benefitCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: index * 0.15,
      ease: 'back.out(1)'
    });

    // Efeito hover sutil
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        ease: 'power2.out'
      });
    });
  });

  // ============ 3. ANIMAÇÃO DOS EVENTOS E ATUALIZAÇÕES (BLOCO 3) ============
  const eventCards = document.querySelectorAll('.evento-card');
  const updateCards = document.querySelectorAll('.card-atualizacao');

  gsap.from([...eventCards, ...updateCards], {
    scrollTrigger: {
      trigger: '.eventos-atualizacoes',
      start: 'top 70%'
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.2)'
  });

  // ============ 4. ANIMAÇÃO DOS DEPOIMENTOS (BLOCO 4) ============
  const testimonials = document.querySelectorAll('.depoimento');

  testimonials.forEach((testimonial, index) => {
    gsap.from(testimonial, {
      scrollTrigger: {
        trigger: testimonial,
        start: 'top 75%'
      },
      duration: 0.8,
      x: index % 2 === 0 ? -30 : 30, 
      opacity: 0,
      delay: index * 0.1,
      ease: 'power3.out'
    });
  });

  // ============ 5. ANIMAÇÃO DO FOOTER ============
  gsap.from('.footer-container', {
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 90%'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power2.out'
  });

  // ============ 6. BOTÕES INTERATIVOS ============
  const buttons = document.querySelectorAll('.btn-default, .btn-default2');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.2,
        scale: 1.05,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.2,
        scale: 1,
        ease: 'power2.out'
      });
    });
  });
});