import { Sidebar } from "../index.js"; 

let renderCallback = null;

const state = {
  isActive: false,
  setIsActive(value) {
    this.isActive = value;
    this.updateSidebar();
  },
  updateSidebar() {
    const sidebarContainer = document.getElementById("sidebarContainer");
    if (sidebarContainer) {
      sidebarContainer.innerHTML = Sidebar(this.isActive);
    }
  }
};

export function initialActiveSidebar() {
  const iconIsActive = document.getElementById("activeSideBar");
  const sidebarContainer = document.getElementById("sidebarContainer");

  if (!iconIsActive || !sidebarContainer) return;

  iconIsActive.addEventListener("click", (event) => {
    event.stopPropagation(); 
    state.setIsActive(!state.isActive);
  });

  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = sidebarContainer.contains(event.target);
    const isClickOnIcon = iconIsActive.contains(event.target);
    const sidebarContainerActiveDiv = document.querySelector(".sidebar-container-active");

    if (!isClickInsideSidebar && !isClickOnIcon) {
      sidebarContainerActiveDiv.classList.remove("sidebar-container-active");
      sidebarContainerActiveDiv.classList.add("sidebar-container-disabled");
      setTimeout(() => {

        state.setIsActive(false);

      }, 1000);
    }
  });
}

export function setRenderCallback(callback) {
  renderCallback = callback;
}

export { state };
