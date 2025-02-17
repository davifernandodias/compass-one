export function cardFeedback(name, description, id) {
  return `
    <div class="feedback-card" id=${`feedback_card_${id} `}>
      <div class="card-stars">
      ${`<img src="assets/images/clothes/product_star.webp" alt="Five stars rating" class="card-emoji"/>`.repeat(5)}
      </div>
      <div class="card-title">
        <p>${name}.</p>
        <img src="assets/images/icons/feedback/feedback_correct.webp" alt="Correct emoji" class="card-emoji"/>
      </div>
      <div class="card-description">
        <p>
          ${description}
        </p>
      </div>
    </div>
  `;
}
