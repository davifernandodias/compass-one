export function cardProduct(product) {
  return `
    <div class="product-items">
      <div class="product-item">
        <img src="../../public/images/clothes/${product.productNameImage}" alt="${product.productName}">
      </div>
      <div>
        <p class="product-name">${product.productName}</p>
        <div class="product-specifications">
          <div class="stars">
            ${"★".repeat(Math.round(product.productFeedBack))} ${"☆".repeat(5 - Math.round(product.productFeedBack))}
          </div>
          <div class="product-feedback">
            <p><span class="product-feedback-color">${product.productFeedBack}</span></p>
          </div>
        </div>
        <div class="product-price">
          <p class="product-price-text">$${product.productPrice}</p>
          ${product.productCommonPrice ? `<p class="product-common-price">$${product.productCommonPrice}</p>` : ""}
          ${product.productDiscount ? `<p class="product-discount">${product.productDiscount}% OFF</p>` : ""}
        </div>
      </div>
    </div>
  `;
}
