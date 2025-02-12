import { Banner } from "./components/banner.js";
import { renderPage } from "./render.js";

function render() {
  renderPage(`
    ${Banner()}
  `);
}

window.onload = render;
