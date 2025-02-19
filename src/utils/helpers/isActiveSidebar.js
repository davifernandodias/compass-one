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
  const dropdownIcon = document.querySelector('.dropdown-icon');
  const dropIcon = document.getElementById('dropIcon');
  const subDropdownMenu = document.getElementById('subDropdownMenu');

  if (!iconIsActive || !sidebarContainer || !dropdownIcon || !dropIcon || !subDropdownMenu) {
    return;
  }

  iconIsActive.addEventListener("click", (event) => {
    event.stopPropagation(); 
    state.setIsActive(!state.isActive);
  });

  const checkScreenSize = () => {
    if (window.innerWidth < 1024) {
      subDropdownMenu.style.display = 'none';
    }
  };

  checkScreenSize();

  window.addEventListener('resize', checkScreenSize);

  dropIcon.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) { 
      console.log('Mouse está sobre o ícone');
      subDropdownMenu.style.display = 'flex'; 
    }
  });

  document.addEventListener('click', (event) => {
    if (
      !subDropdownMenu.contains(event.target) && 
      !dropdownIcon.contains(event.target) 
    ) {
      console.log('Clicou fora do submenu');
      subDropdownMenu.style.display = 'none'; 
    }
  });

  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = sidebarContainer.contains(event.target);
    const isClickOnIcon = iconIsActive.contains(event.target);
    const sidebarContainerActiveDiv = document.querySelector(".sidebar-container-active");

    if (!isClickInsideSidebar && !isClickOnIcon && sidebarContainerActiveDiv) {
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
