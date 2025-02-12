import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

export function renderContent(content) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = content;
  }
}

export function renderPage(children) {
  const content = `
    ${Header()}
    <main>
      ${children}
    </main>
    ${Footer()}
  `;
  renderContent(content);
}
