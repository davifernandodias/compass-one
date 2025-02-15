import { cardFeedback } from "./cards/cardsfeedback.js";

export function Feedback () {
  return `
  <section>
    <h1>feedback</h1>
    ${cardFeedback()}
  </section>
  `
}