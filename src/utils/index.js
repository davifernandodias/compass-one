import { BaseBoard } from "../components/baseboard.js";
import { Catalog } from "../components/catalog.js";
import { Feedback } from "../components/feedback.js";
import { Footer } from "../components/footer.js";
import { Home } from "../components/home.js";
import { Products } from "../components/product.js";
import { renderContent, renderPage } from "../render.js";
import { productTypeArrivals, productTypeSelling } from "./data/productsData.js";
import { setupEmailValidation } from "./validator/emailValidator.js"
export { 
  BaseBoard, Catalog, Feedback, 
  Footer, Home, productTypeArrivals,
  productTypeSelling, Products,
  renderContent, renderPage, setupEmailValidation
}