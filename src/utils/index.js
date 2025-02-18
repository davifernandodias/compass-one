import { BaseBoard } from "../components/baseboard.js";
import { Catalog } from "../components/catalog.js";
import { Feedback } from "../components/feedback.js";
import { Footer } from "../components/footer.js";
import { Home } from "../components/home.js";
import { Products } from "../components/product.js";
import { Sidebar } from "../components/ui/sidebar.js"
import { renderContent, renderPage } from "../render.js";
import { productTypeArrivals, productTypeSelling } from "./data/productsData.js";
import { setupEmailValidation } from "./validator/emailValidator.js"
import { initFeedbackSlider } from "./helpers/scrollingCardFeedback.js"
import { initialRemoveNavabarSignUp } from "./helpers/removingNavibarSignup.js"
import { initialActiveSidebar, setRenderCallback ,state } from "./helpers/isActiveSidebar.js";

export { 
  BaseBoard, Catalog, Feedback, 
  Footer, Home, productTypeArrivals,
  productTypeSelling, Products, Sidebar,
  renderContent, renderPage, setupEmailValidation,
  initFeedbackSlider, initialRemoveNavabarSignUp, initialActiveSidebar, state,
  setRenderCallback
}