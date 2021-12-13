let cards = document.querySelectorAll(".card"),
  productDetail = document.querySelector(".product-detail"),
  closeIconContainer = productDetail.querySelector(".icon-close-container");

cards = Array.from(cards);
cards.forEach(e => {
  let shoppingIcon = e.querySelector(".card__additional img");
  shoppingIcon.addEventListener("click", changeShoppingStatus);

  let cardImage = e.querySelector(".card__image-container");
  cardImage.addEventListener("click", productDetailAppear);
});

closeIconContainer.addEventListener("click", closeProductDetail);

function changeShoppingStatus() {
  console.log(this);
  let additionalInfo = this.parentNode;
  let card = additionalInfo.parentNode;
  let removedText = card.querySelector(".card__image-container .center-text");
  if (!removedText.classList.contains("hidden")) {
    this.setAttribute("src", "./images/bt_add_to_cart.svg");
    removedText.classList.add("hidden");
  } else {
    this.setAttribute("src", "./images/bt_added_to_cart.svg");
    removedText.classList.remove("hidden");
  }
}

function productDetailAppear() {
  console.log(this);
  let card = this.parentNode;
  let cardsContainer = card.parentNode;
  let mainContainer = cardsContainer.parentNode;
  let productDetail = mainContainer.querySelector(".product-detail");
  if (productDetail.classList.contains("hidden")) {
    productDetail.classList.remove("hidden");
  } else {
    productDetail.classList.add("hidden");
  }
}

function closeProductDetail() {
  productDetail.classList.add("hidden");
}
