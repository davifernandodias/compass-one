export function initFeedbackSlider() {
  console.log("oi");

  const feedbackCards = document.querySelector(".feedback-cards");
  const leftArrow = document.querySelector(".feedback-arrow-left");
  const rightArrow = document.querySelector(".feedback-arrow-right");
  const cards = document.querySelectorAll(".feedback-card");

  if (!feedbackCards || !leftArrow || !rightArrow || cards.length === 0) return;

  let currentIndex = 2; // Inicializa com o card do meio (id: 3, índice 2)

  function updateCardsOrder() {
    // Adiciona a classe para a animação
    feedbackCards.classList.add("transitioning");

    // Atualiza a ordem dos cards com base no índice
    cards.forEach((card, index) => {
      if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.style.order = 1; // Card de cima
      } else if (index === currentIndex) {
        card.style.order = 2; // Card do meio
      } else if (index === (currentIndex + 1) % cards.length) {
        card.style.order = 3; // Card de baixo
      }
    });

    // Remove a classe de transição após o tempo da animação
    setTimeout(() => {
      feedbackCards.classList.remove("transitioning");
    }, 500);
  }

  rightArrow.addEventListener("click", () => {
    console.log("direita");

    // Passa o card de baixo para o de cima
    currentIndex = (currentIndex + 1) % cards.length;

    updateCardsOrder();
  });

  leftArrow.addEventListener("click", () => {
    console.log("esquerda");

    // Passa o card de cima para o de baixo
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;

    updateCardsOrder();
  });

  // Inicializa com a posição correta dos cards
  updateCardsOrder();

  // Estilo de transição para a animação
  feedbackCards.style.transition = "transform 0.5s ease-in-out";
}
