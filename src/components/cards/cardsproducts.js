export function cardProduct(product) {
  return `
    <div class="product-items">
      <div class="product-item">
        <img src="../../public/images/clothes/${product.productNameImage}" alt="${product.productName} class="product-image"">
      </div>
      <div class="product-description">
        <p class="product-name">${product.productName}</p>
        <div class="product-specifications">
          <div class="stars">
            ${`<img src="../../public/images/clothes/product_star.webp ">`
              .repeat(Math.floor(product.productFeedBack))}
            ${ Number.isInteger(Number(product.productFeedBack)) ? ""  :`<img src="../../public/images/clothes/product_star_partition.webp" />`}
          </div>
          <div class="product-feedback">
            <p>${product.productFeedBack}<span class="product-feedback-color">/5</span></p>
          </div>
        </div>
        <div class="product-prices">
          <p class="product-price-text">$${product.productPrice}</p>
          ${
            product.productCommonPrice ? `<p class="product-common-price">$${product.productCommonPrice}</p>` : ""}
          ${product.productDiscount ? `<span class="product-discount">-${product.productDiscount}%</span>` : ""}
        </div>
      </div>
    </div>
  `;
}
