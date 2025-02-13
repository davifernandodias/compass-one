import { cardProduct } from "./cards/cardsproducts.js";
import { Button } from "./ui/button.js";

export function Products(title, products) {
  try {
    let productList;
    if (title === "NEW ARRIVALS") {
      productList = products.productsArr;
    } else if (title === "TOP SELLING") {
      productList = products.productsSell;
    } else {
      console.log("Não foi passado um valor correto no app.js para a função Products");
      return "";
    }

    return `
      <section id="productsSection">
        <div class="product-container">
          <div>
            <h1 class="product-section-title">${title}</h1>
          </div>
          <div class="product-content">
            ${productList.map(product => cardProduct(product)).join("")}
          </div>
        </div>
        ${Button()}
      </section>
    `;
  } catch (err) {
    console.log("Deu erro: " + err);
  }
}
