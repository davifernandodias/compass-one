import { BaseBoard } from "./components/baseboard.js";
import { Home } from "./components/home.js";
import { Products } from "./components/product.js";
import { renderPage } from "./render.js";
import { productTypeArrivals, productTypeSelling } from "./utils/productsData.js";

function render() {
  renderPage(`
    ${Home()}
    ${BaseBoard()}
    ${Products("NEW ARRIVALS", productTypeArrivals)}
    <div id="dividerArea">
      <hr class="divider"/>
    </div>
    ${Products("TOP SELLING", productTypeSelling)}
  `);
}

window.onload = render;
