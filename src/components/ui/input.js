export function Input(placeholder, type, identifier) {
  return `
          <input
            type="text"
            placeholder="${placeholder}"
            class="${type}"
            id="${identifier}"
          />
  `;
}
