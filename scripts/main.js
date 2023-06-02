const menuAccount = document.querySelector(".menu-account");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuBtn = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".menu-mobile");
const menuMobileCloseBtn = document.querySelector(".menu__close-icon");
const menuShoppingIcon = document.querySelector(".shopping-cart");
const asideShoppingCart = document.querySelector(".cart-container");
const asideCartCloseBtn = document.querySelector(".cart-container .left-arrow");
const productDetail = document.querySelector(".product-detail");
// const productCards = document.querySelectorAll(".card");

menuAccount.addEventListener("click", menuToggleDesktop);
mobileMenuBtn.addEventListener("click", menuToggleMobile);
menuMobileCloseBtn.addEventListener("click", menuToggleMobile);
menuShoppingIcon.addEventListener("click", shoppingCartToggle);
asideCartCloseBtn.addEventListener("click", shoppingCartToggle);

function menuToggleDesktop() {
  const isAsideShoppingCartOpen =
    !asideShoppingCart.classList.contains("hidden");
  if (isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add("hidden");
  }

  desktopMenu.classList.toggle("hidden");
}
function menuToggleMobile() {
  const isAsideShoppingCartOpen =
    !asideShoppingCart.classList.contains("hidden");
  if (isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add("hidden");
  }

  mobileMenu.classList.toggle("hidden");
}
function shoppingCartToggle() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains("hidden");
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("hidden");
  }

  asideShoppingCart.classList.toggle("hidden");
}

// cards = Array.from(productCards);
// cards.forEach(e => {
//   const shoppingIcon = e.querySelector(".card__shopping-icon");
//   shoppingIcon.addEventListener("click", toggleProductToCart);
// });
// function toggleProductToCart() {
//   const card = this.parentNode.parentNode;
//   const removedText = card.querySelector(".removed-text");
//   const cartImg = this.src;
//   if (cartImg.indexOf("bt_add_to_cart.svg") != -1) {
//     this.src = "./images/bt_added_to_cart.svg";
//   } else {
//     this.src = "./images/bt_add_to_cart.svg";
//   }
//   removedText.classList.toggle("hidden");
// }

function formatNumberToCurrency(number) {
  const isDecimal = !Number.isInteger(number);
  let decimalPart = "";

  if (isDecimal) {
    decimalPart = Math.floor((number % 1) * 100).toString();
  }

  let result = "$ " + Math.floor(number).toString();

  if (isDecimal) {
    result += "," + decimalPart;
  } else {
    result += ",00";
  }

  return result;
}
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    const imageContainerDiv = document.createElement("div");
    const imageCard = document.createElement("img");
    const removedTextDiv = document.createElement("div");
    const additionalDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const priceSpan = document.createElement("span");
    const nameSpan = document.createElement("span");
    const shoppingIcon = document.createElement("img");

    productCard.classList.add("card");
    imageContainerDiv.classList.add("card__image-container");
    imageCard.setAttribute("src", product.imgSrc);
    imageCard.setAttribute("alt", product.name);
    imageCard.classList.add("card__image");

    removedTextDiv.classList.add("removed-text", "hidden");
    removedTextDiv.textContent = "Removed from cart";

    imageContainerDiv.appendChild(imageCard);
    imageContainerDiv.appendChild(removedTextDiv);

    // Crear el elemento div con la clase "card__additional"
    additionalDiv.classList.add("card__additional");

    // Crear el elemento div con la clase "card__info"
    infoDiv.classList.add("card__info");

    // Crear el elemento span con la clase "card__price" y "card__name" correspondientes
    priceSpan.classList.add("card__price");
    priceSpan.textContent = formatNumberToCurrency(product.price);

    nameSpan.classList.add("card__name");
    nameSpan.textContent = product.name;

    // Agregar los elementos span al div de información
    infoDiv.appendChild(priceSpan);
    infoDiv.appendChild(nameSpan);

    // Crear la etiqueta img con el atributo src, alt y clase correspondientes
    shoppingIcon.setAttribute("src", "./images/bt_add_to_cart.svg");
    shoppingIcon.setAttribute("alt", "Shop icon");
    shoppingIcon.classList.add("card__shopping-icon");

    // Agregar el div de información y la imagen de carrito al div adicional
    additionalDiv.appendChild(infoDiv);
    additionalDiv.appendChild(shoppingIcon);

    // Agregar el contenedor de imágenes y el div adicional al elemento principal de la tarjeta
    productCard.appendChild(imageContainerDiv);
    productCard.appendChild(additionalDiv);

    // Agregar la tarjeta al container de productos
    const daddyContainer = document.querySelector("#cards-container");
    daddyContainer.appendChild(productCard);
  }
}

renderProducts(productsList);

// Handle viewport width en resize
window.addEventListener("resize", function () {
  if (this.innerWidth < 1025) {
    desktopMenu.classList.add("hidden");
  }
});
