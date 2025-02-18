export function initFeedbackSlider() {

  const feedbackCards = document.querySelector(".feedback-cards");
  const leftArrow = document.querySelector(".feedback-arrow-left");
  const rightArrow = document.querySelector(".feedback-arrow-right");
  const cards = document.querySelectorAll(".feedback-card");

  if (!feedbackCards || !leftArrow || !rightArrow || cards.length === 0) return;

  let currentIndex = 2;

  function updateCardsOrder() {

    feedbackCards.classList.add("transitioning");

    cards.forEach((card, index) => {
      if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.style.order = 1; 
      } else if (index === currentIndex) {
        card.style.order = 2; 
      } else if (index === (currentIndex + 1) % cards.length) {
        card.style.order = 3; 
      }
    });

    setTimeout(() => {
      feedbackCards.classList.remove("transitioning");
    }, 500);
  }

  rightArrow.addEventListener("click", () => {
    console.log("direita");

    currentIndex = (currentIndex + 1) % cards.length;

    updateCardsOrder();
  });

  leftArrow.addEventListener("click", () => {
    console.log("esquerda");

    currentIndex = (currentIndex - 1 + cards.length) % cards.length;

    updateCardsOrder();
  });

  updateCardsOrder();

  feedbackCards.style.transition = "transform 0.5s ease-in-out";
}
