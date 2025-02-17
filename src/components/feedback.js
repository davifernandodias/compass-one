import { feedbackData } from "../utils/data/feedbackData.js";
import { cardFeedback } from "./cards/cardsfeedback.js";

export function Feedback() {
  return `
    <section id="feedbackSection">
      <div class="feedback-content">
        <div class="feedback-settings">
          <h1 class="feedback-title">OUR HAPPY CUSTOMERS</h1>
          <div class="feedback-images">
            <img src="assets/images/icons/feedback/feedback_arrow.webp" alt="" class="feedback-arrow-left"/>
            <img src="assets/images/icons/feedback/feedback_arrow.webp" alt="" class="feedback-arrow-right"/>
          </div>
        </div>
        <div class="feedback-items">
          <div class="feedback-cards">
          ${feedbackData.map((feedback) => cardFeedback(feedback.name, feedback.description)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
