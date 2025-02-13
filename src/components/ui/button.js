export function Button(text, type) {
  return `
          <button
            class="${type}"
          >
          ${text}
          </button>
  `;
}
