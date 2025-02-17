import { 
  Home, BaseBoard, Products,
  Catalog, Feedback,
  productTypeArrivals, productTypeSelling,
  renderPage, setupEmailValidation, initFeedbackSlider 
} from "./utils/index.js";

function render() {
  renderPage(`
    ${Home()}
    ${BaseBoard()}
    ${Products("NEW ARRIVALS", productTypeArrivals)}
    <div id="dividerArea">
      <hr class="divider"/>
    </div>
    ${Products("TOP SELLING", productTypeSelling)}
    ${Catalog()}
    ${Feedback()}
  `);

  setupEmailValidation(); 
  initFeedbackSlider();
}

window.onload = render;
