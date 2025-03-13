export function Catalog() {
  return `
             <section id="catalogSection">
        <div class="catalog-content">
          <div class="catalog-title">
            <h1>BROWSE BY DRESS STYLE</h1>
          </div>
          <div class="catalog-cards">
            <div class="catalog-items">
              <div class="catalog-item">
                <a href="https://compass-second.vercel.app/">
                  <div class="catalog-card card-primary">
                  <h1>Casual</h1>
                  <img src="assets/images/catalog/catalog_person_white_gray.webp" alt="Casual">
                </div>
                </a>
                <div class="catalog-card card-second">
                  <h1>Formal</h1>
                  <img src="assets/images/catalog/catalog_person_blaze.webp" alt="Formal">
                </div>
              </div>
              <div class="catalog-item">
                <div class="catalog-card card-third">
                  <h1>Party</h1>
                  <img src="assets/images/catalog/catalog_person_woman.webp"  alt="Party">
                </div>
                <div class="catalog-card card-four">
                  <h1>Gym</h1>
                  <img src="assets/images/catalog/catalog_person_gym.webp" alt="Gym">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

