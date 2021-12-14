let cards = document.querySelectorAll(".card"),
  cardsContainer = document.getElementById("cards-container"),
  productDetail = document.querySelector(".product-detail"),
  closeIconProductDetail = productDetail.querySelector(".icon-close-container"),
  shoppingCart = document.querySelector(".cart-container"),
  leftArrowShoppingCart = shoppingCart.querySelector(".left-arrow");

cards = Array.from(cards);
cards.forEach(e => {
  let shoppingIcon = e.querySelector(".card__additional img");
  shoppingIcon.addEventListener("click", changeShoppingStatus);

  let cardImage = e.querySelector(".card__image-container");
  cardImage.addEventListener("click", productDetailAppear);
});

closeIconProductDetail.addEventListener("click", productDetailClose);

function changeShoppingStatus() {
  console.log(this);
  let additionalInfo = this.parentNode;
  let card = additionalInfo.parentNode;
  let removedText = card.querySelector(".card__image-container .center-text");
  console.log(this.getAttribute("src"));
  if (this.getAttribute("src") === "./images/bt_add_to_cart.svg") {
    this.setAttribute("src", "./images/bt_added_to_cart.svg");
    removedText.classList.add("hidden");
  } else {
    this.setAttribute("src", "./images/bt_add_to_cart.svg");
    removedText.classList.remove("hidden");
  }
}

function productDetailAppear() {
  console.log(this);
  let card = this.parentNode;
  let cardsContainer = card.parentNode;
  let mainContainer = cardsContainer.parentNode;
  let productDetail = mainContainer.querySelector(".product-detail");
  console.log(productDetail);
  if (productDetail.classList.contains("hidden")) {
    productDetail.classList.remove("hidden");
  } else {
    productDetail.classList.add("hidden");
  }
  // Borrar al agregar funcionalidad completa
  if (window.innerWidth < 900) {
    cardsContainer.classList.add("hidden");
  }
  //
}
function productDetailClose() {
  productDetail.classList.add("hidden");
}

let buttonAddToCart = document.getElementById("button-add-to-cart");
buttonAddToCart.addEventListener("click", shoppingCartAppear);
leftArrowShoppingCart.addEventListener("click", shoppingCartClose);

function shoppingCartAppear() {
  console.log(this);
  if (shoppingCart.classList.contains("hidden")) {
    shoppingCart.classList.remove("hidden");
  }
  // Borrar al agregar funcionalidad completa
  if (window.innerWidth < 900) {
    cardsContainer.classList.add("hidden");
  }
  //
}
function shoppingCartClose() {
  shoppingCart.classList.add("hidden");
}
