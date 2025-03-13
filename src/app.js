import { 
  Home, BaseBoard, Products,
  Catalog, Feedback, Sidebar,
  productTypeArrivals, productTypeSelling,
  renderPage, setupEmailValidation, initFeedbackSlider,
  initialRemoveNavabarSignUp, initialActiveSidebar, 
  state, setRenderCallback
} from "./utils/index.js";

function render() {
  renderPage(`
    <div id="sidebarContainer">${Sidebar(state.isActive)}</div>
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
  initialRemoveNavabarSignUp();
  initialActiveSidebar();
  addRedirectEvent();
}

setRenderCallback(render);

window.onload = render;