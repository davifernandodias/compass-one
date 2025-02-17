import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

export function renderContent(content) {
  try {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = content;
  } catch ( error) {
    console.log("Elemento root não existe: " + error)
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