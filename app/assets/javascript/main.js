"use strict";

(function () {
  const carts = document.querySelectorAll(".addcart");
  carts.forEach((cart, _) => {
    cart.addEventListener("click", () => {
      /* eslint-disable */
      console.log("added to cart");
      /* eslint-enable */
    });
  });
})();
