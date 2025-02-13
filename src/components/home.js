import { Button } from "./ui/button.js";

export function Home() {
  return `
  <section id="home-section">
    <div class="home-content">
      <div class="home-text">
        <h1 class="home-title">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p class="home-description">
          Browse through our diverse range of meticulously 
          crafted garments, designed to bring 
          out your individuality and
          cater to your sense of style.
        </p>
      </div>
      <div class="home-information">
        ${Button("Shop Now", "button-common")}
          <div class="home-container-data">
            <div class="home-information-data">
              <div>
                <h1 class="home-information-acount">200+</h1>
                <p class="home-information-description">International Brands</p>
              </div>
              <hr class="divider-one" />
              <div>
                <h1 class="home-information-acount">2,000+</h1>
                <p class="home-information-description">High-Quality Products</p>
              </div>
              <hr id="divider-two" />
            </div>
            <div class="home-information-sub-data">
              <h1 class="home-information-acount">30,000+</h1>
              <p class="home-information-description">Happy Customers</p>
            </div>
          </div>  
      </div>
      </div>
      <div class="banner-mobile-models">
          <img src="../../public/images/banners/star/home-star.svg" class="home-banner-star-left" alt="star-left"/>
          <img src="../../public/images/banners/star/home-star.svg" class="home-banner-star-right" alt="star-right"/>
          <img src="../../public/images/banners/home-banner-molds-mobile.svg" alt="home-banner-mobile-models" class="banner-mobile"  id="bannerMobileModels" />
      </div>
  </section>
  `;
}
