export function Sidebar (isActive)  {
  return `
  ${isActive ? `
  <aside class="sidebar-container-active">
    <nav>
      <ul class="sidebar-items">
        <li class="sidebar-title"><a href="#">Shop</a></li>
        <li class="sidebar-sub-title"><a href="#">On Sale</a></li>
        <li class="sidebar-sub-title"><a href="#">New Arrivals</a></li>
        <li class="sidebar-sub-title"><a href="#">Brands</a></li>
      </ul>
    </nav>
  </aside>` 
  : ``}

  `
}