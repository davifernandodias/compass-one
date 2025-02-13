import { BaseBoard } from "./components/baseboard.js";
import { Home } from "./components/home.js";
import { renderPage } from "./render.js";

function render() {
  renderPage(`
    ${Home()}
    ${BaseBoard()}
  `);
}

window.onload = render;
