import { Home } from "./components/home.js";
import { renderPage } from "./render.js";

function render() {
  renderPage(`
    ${Home()}
  `);
}

window.onload = render;
