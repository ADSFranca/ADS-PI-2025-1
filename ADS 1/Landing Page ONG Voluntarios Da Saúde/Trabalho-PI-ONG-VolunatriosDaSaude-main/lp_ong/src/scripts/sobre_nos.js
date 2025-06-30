document.addEventListener('DOMContentLoaded', () => {
  // ============ 1. ANIMAÇÃO DO BANNER ============
  gsap.from("#banner2 img", {
    duration: 1.5,
    scale: 1.1,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2
  });

  // ============ 2. ANIMAÇÃO DO TÍTULO ============
  gsap.from(".titulo-qs h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 0.4
  });

  // ============ 3. ANIMAÇÃO DOS PARÁGRAFOS ============
  const paragraphs = document.querySelectorAll(".qs_container p");
  gsap.from(paragraphs, {
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".quem-somos",
      start: "top 75%"
    }
  });

  // ============ 4. ANIMAÇÃO DA CITAÇÃO ============
  gsap.from(".quote", {
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".quote",
      start: "top 80%"
    }
  });

  // ============ 5. ANIMAÇÃO DOS CARDS ============
  const cards = document.querySelectorAll(".cards");
  cards.forEach((card, index) => {
    gsap.from(card, {
      duration: 0.8,
      y: 60,
      opacity: 0,
      delay: index * 0.15,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".secao-cards",
        start: "top 70%"
      }
    });

    // Efeito hover
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        ease: "power2.out"
      });
    });
  });

  // ============ 6. ANIMAÇÃO DOS ÍCONES DOS CARDS ============
  gsap.from(".cards img", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top 60%"
    }
  });

  // ============ 7. ANIMAÇÃO DAS FOTOS DA EQUIPE ============
  const teamPhotos = document.querySelectorAll(".team-photo");
  gsap.from(teamPhotos, {
    duration: 1,
    x: (i) => i === 0 ? -100 : 100,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".team-content",
      start: "top 70%"
    }
  });

  // ============ 8. ANIMAÇÃO DO ÍCONE CENTRAL ============
  gsap.from(".icon", {
    duration: 1.5,
    scale: 0,
    rotation: 360,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".team-content",
      start: "top 65%"
    }
  });


});