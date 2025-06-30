document.addEventListener('DOMContentLoaded', () => {
  // ============ 1. ANIMAÇÃO DA IMAGEM PRINCIPAL ============
  gsap.from(".contact-image img", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
  });

  // ============ 2. ANIMAÇÃO DO FORMULÁRIO ============
  // Título
  gsap.from(".contact-form-area h1", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: "back.out(1.2)"
  });

  // Campos do formulário (entrada sequencial)
  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach((group, index) => {
    gsap.from(group, {
      duration: 0.6,
      y: 30,
      opacity: 0,
      delay: index * 0.15,
      ease: "power2.out"
    });
  });

  // Botão de envio
  gsap.from(".hover", {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 0.5
  });

  // Efeito hover no botão
  document.querySelector(".hover").addEventListener("mouseenter", () => {
    gsap.to(".hover", {
      duration: 0.3,
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      ease: "power2.out"
    });
  });

  document.querySelector(".hover").addEventListener("mouseleave", () => {
    gsap.to(".hover", {
      duration: 0.3,
      scale: 1,
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      ease: "power2.out"
    });
  });

  // ============ 3. ANIMAÇÃO DAS INFORMAÇÕES DE CONTATO ============
  gsap.from(".contact-info", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 80%"
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power2.out"
  });

  // Ícones sociais (entrada em cascata)
  const socialIcons = document.querySelectorAll(".contact-info .social-icons a");
  socialIcons.forEach((icon, index) => {
    gsap.from(icon, {
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 70%"
      },
      duration: 0.6,
      y: 30,
      opacity: 0,
      delay: index * 0.1,
      ease: "back.out(1.5)"
    });
  });

  // ============ 4. ANIMAÇÃO DO CONTAINER PRINCIPAL ============
  gsap.from(".contact-container", {
    duration: 0.5,
    opacity: 0,
    ease: "power1.inOut"
  });
});
