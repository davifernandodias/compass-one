export function Input(type = "text", placeholder, className, identifier) {
  return `
          <input
            type=${type}
            placeholder="${placeholder}"
            class="${className}"
            id="${identifier}"
          />
  `;
}
