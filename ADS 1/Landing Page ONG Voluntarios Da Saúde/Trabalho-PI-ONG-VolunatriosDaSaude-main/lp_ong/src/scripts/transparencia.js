document.addEventListener('DOMContentLoaded', () => {
  // ============ 1. ANIMAÇÃO DO TÍTULO PRINCIPAL ============
  gsap.from(".titulo", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
  });

  // ============ 2. ANIMAÇÃO DOS BLOCOS DE TRANSPARÊNCIA ============
  const blocos = document.querySelectorAll(".bloco");
  
  blocos.forEach((bloco, index) => {
    // Animação de entrada
    gsap.from(bloco, {
      scrollTrigger: {
        trigger: ".icones-transparencia",
        start: "top 70%"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: index * 0.15,
      ease: "back.out(1.5)"
    });

    // Efeito hover
    bloco.addEventListener("mouseenter", () => {
      gsap.to(bloco, {
        duration: 0.3,
        y: -8,
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
        ease: "power2.out"
      });
    });

    bloco.addEventListener("mouseleave", () => {
      gsap.to(bloco, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        ease: "power2.out"
      });
    });

    // Animação dos ícones (rotação sutil)
    const icon = bloco.querySelector("img");
    gsap.from(icon, {
      scrollTrigger: {
        trigger: bloco,
        start: "top 80%"
      },
      duration: 1,
      rotationY: 180,
      opacity: 0,
      ease: "elastic.out(1, 0.5)"
    });
  });

  // ============ 3. ANIMAÇÃO DO ELEMENTO DECORATIVO ============
  gsap.to(".background-decoracao img", {
    duration: 15,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });
});