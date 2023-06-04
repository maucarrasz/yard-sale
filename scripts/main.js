const menuAccount = document.querySelector(".menu-account");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuBtn = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".menu-mobile");
const menuMobileCloseBtn = document.querySelector(".menu__close-icon");
const menuShoppingIcon = document.querySelector(".navbar__shopping-cart");
const orderCounter = document.getElementById("order-counter");
const asideShoppingCart = document.querySelector(".cart-container");
const asideCartCloseBtn = document.querySelector(".cart-container .left-arrow");
const productDetail = document.querySelector(".product-detail");
const productDetailCloseBtn = document.querySelector(".icon-close-container");
const ordersCartContainer = document.querySelector(".orders-container");
const addToCartBtn = document.getElementById("button-add-to-cart");
const totalOrderPrice = document.getElementById("total-order");

menuAccount.addEventListener("click", menuToggleDesktop);
mobileMenuBtn.addEventListener("click", menuToggleMobile);
menuMobileCloseBtn.addEventListener("click", menuToggleMobile);
menuShoppingIcon.addEventListener("click", shoppingCartToggle);
asideCartCloseBtn.addEventListener("click", shoppingCartToggle);
productDetailCloseBtn.addEventListener("click", closeProductDetail);
addToCartBtn.addEventListener("click", addProductToCartFromAsideDetail);

function formatNumberToCurrency(number) {
  const isDecimal = !Number.isInteger(number);
  let decimalPart = "";

  if (isDecimal) {
    decimalPart = Math.floor((number % 1) * 100).toString();
  }

  let currencyString = "$ " + Math.floor(number).toString();

  if (isDecimal) {
    currencyString += "," + decimalPart;
  } else {
    currencyString += ",00";
  }

  return currencyString;
}
function formatCurrencyToNumber(currencyString) {
  const numberWithoutSymbol = currencyString.replace("$", "").replace(",", ".");
  const number = parseFloat(numberWithoutSymbol);

  return number;
}

function changeOrderId(id, identifier) {
  const slices = id.split("$");
  slices.pop();
  const newId = slices.join("$") + "$" + identifier;
  return newId;
}
function showElement(element) {
  element.classList.remove("hidden");
}
function showElementTemporarily(element, timeoutInMilliseconds) {
  showElement(element);
  setTimeout(function () {
    hideElement(element);
  }, timeoutInMilliseconds);
}
function hideElement(element) {
  element.classList.add("hidden");
}
function menuToggleDesktop() {
  const isAsideShoppingCartOpen =
    !asideShoppingCart.classList.contains("hidden");
  const isProductDetailOpen = !productDetail.classList.contains("hidden");

  if (isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add("hidden");
  }
  if (isProductDetailOpen) {
    productDetail.classList.add("hidden");
  }

  desktopMenu.classList.toggle("hidden");
}
function menuToggleMobile() {
  const isAsideShoppingCartOpen =
    !asideShoppingCart.classList.contains("hidden");
  const isProductDetailOpen = !productDetail.classList.contains("hidden");
  if (isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add("hidden");
  }
  if (isProductDetailOpen) {
    productDetail.classList.add("hidden");
  }

  mobileMenu.classList.toggle("hidden");
}
function shoppingCartToggle() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains("hidden");
  const isProductDetailOpen = !productDetail.classList.contains("hidden");

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("hidden");
  }
  if (isProductDetailOpen) {
    productDetail.classList.add("hidden");
  }

  asideShoppingCart.classList.toggle("hidden");
}
function getNodeChildByParentId(parentId, querySelectorChild) {
  const parentNode = document.getElementById(`${parentId}`);
  const nodeChild = parentNode.querySelector(`${querySelectorChild}`);
  return nodeChild;
}
function addProductToCartFromAsideDetail() {
  const productDetail = this.parentNode.parentNode;
  const img = productDetail.querySelector(".product__image");
  const name = productDetail.querySelector(".product-info__name");
  const price = productDetail.querySelector(".product-info__price");
  const orderIdCart = changeOrderId(productDetail.getAttribute("id"), "cart");
  const dataProductCart = {
    imgSrc: img.src,
    name: name.textContent,
    price: price.textContent,
    orderId: orderIdCart,
  };
  addProductToCart(dataProductCart);
  hideElement(productDetail);
  setTimeout(function () {
    showElement(asideShoppingCart);
  }, 750);
}

function updateProductDetail(data) {
  const img = productDetail.querySelector(".product__image");
  const name = productDetail.querySelector(".product-info__name");
  const price = productDetail.querySelector(".product-info__price");
  productDetail.id = data.orderId;
  img.src = data.imgSrc;
  name.textContent = data.name;
  price.textContent = data.price;
}
function toggleProductDetail() {
  const card = this.parentNode.parentNode;
  const dataProductDetail = {
    imgSrc: card.querySelector(".card__image").src,
    price: card.querySelector(".card__price").textContent,
    name: card.querySelector(".card__name").textContent,
    orderId: changeOrderId(card.getAttribute("id"), "detail"),
  };
  const isAsideShoppingCartOpen =
    !asideShoppingCart.classList.contains("hidden");
  const isMenuDesktopOpen = !desktopMenu.classList.contains("hidden");

  if (isAsideShoppingCartOpen) {
    asideShoppingCart.classList.add("hidden");
  }
  if (isMenuDesktopOpen) {
    desktopMenu.classList.add("hidden");
  }

  if (productDetail.classList.contains("hidden")) {
    // Actualizar y mostrar aside
    updateProductDetail(dataProductDetail);
    setTimeout(showElement(productDetail), 500);
  } else {
    // quitar id del aside y ocultar aside
    closeProductDetail();
  }
}
function closeProductDetail() {
  productDetail.setAttribute("id", "");
  hideElement(productDetail);
}

function toggleImageSrcTemporarily(img, temporalSrc, milliseconds) {
  const oldSrc = img.src;
  img.src = temporalSrc;
  setTimeout(function () {
    img.src = oldSrc;
  }, milliseconds);
}
function addProductToCartFromBtnIcon() {
  const product = this.parentNode.parentNode;
  const productName = product.querySelector(".card__name").textContent;
  const productPrice = product.querySelector(".card__price").textContent;
  const productImgSrc = product.querySelector(".card__image").src;
  const orderId = product.getAttribute("id");
  const dataProductCart = {
    name: productName,
    price: productPrice,
    imgSrc: productImgSrc,
    orderId: changeOrderId(orderId, "cart"),
  };
  const addedText = product.querySelector(".added-text");
  const btnIcon = this;
  toggleImageSrcTemporarily(btnIcon, "./images/bt_added_to_cart.svg", 1500);
  showElementTemporarily(addedText, 1500);
  addProductToCart(dataProductCart);
}

function addProductToCart(data) {
  const ordersResume = asideShoppingCart.querySelector("#orders-resume");
  const newOrder = document.createElement("div");
  const productName = data.name;
  const productPrice = data.price;
  const productImgSrc = data.imgSrc;
  const orderId = data.orderId;
  newOrder.setAttribute("class", "order");
  newOrder.setAttribute("id", orderId);

  // Crear el elemento <figure> y <img>
  const figureOrder = document.createElement("figure");
  const imgOrder = document.createElement("img");

  // Asignar los atributos al elemento <img>
  imgOrder.setAttribute("src", productImgSrc);
  imgOrder.setAttribute("alt", productName);
  imgOrder.setAttribute("class", "order__image");

  // Agregar el elemento <img> al elemento <figure>
  figureOrder.appendChild(imgOrder);

  // Crear los elementos <p> y asignar clases y contenido
  const nameOrder = document.createElement("p");
  nameOrder.setAttribute("class", "order__name info");
  nameOrder.textContent = productName;

  const priceOrder = document.createElement("p");
  priceOrder.setAttribute("class", "order__price price");
  priceOrder.textContent = productPrice;

  const removedTextOrder = document.createElement("p");
  removedTextOrder.setAttribute("class", "removed-text-cart hidden");
  removedTextOrder.textContent = "REMOVED FROM CART";

  // Crear el elemento <span> con clase
  const closeIconOrder = document.createElement("span");
  closeIconOrder.setAttribute("class", "close-icon");
  closeIconOrder.addEventListener("click", removeProductFromCart);

  // Agregar los elementos al nuevo elemento <div>
  newOrder.appendChild(figureOrder);
  newOrder.appendChild(nameOrder);
  newOrder.appendChild(priceOrder);
  newOrder.appendChild(removedTextOrder);
  newOrder.appendChild(closeIconOrder);

  // Añadir precio del elemento al resumen del total
  addPriceProductToTotalOrder(data.price);

  // Actualizar contador de productos a +1
  addOneProductToCounter();

  // Agregar el nuevo elemento al documento
  ordersCartContainer.insertBefore(newOrder, ordersResume);
}
function removeProductFromCart() {
  const order = this.parentNode;
  const orderContainer = order.parentNode;
  const removedTextCart = order.querySelector(".removed-text-cart");
  const orderNameDiv = order.querySelector(".order__name");
  const orderPriceDiv = order.querySelector(".order__price");
  const orderPriceString = orderPriceDiv.textContent;
  if (removedTextCart.classList.contains("hidden")) {
    order.removeChild(orderNameDiv);
    order.removeChild(orderPriceDiv);
    order.classList.add("remove-order");
    showElement(removedTextCart);
    removedTextCart.style.marginLeft = "16px";
  }
  setTimeout(function () {
    const cartOrderId = order.getAttribute("id");
    orderContainer.removeChild(order);

    // Quitar precio del productos al total del order
    removePriceProductToTotalOrder(orderPriceString);
    // Restar 1 al total del contador de pedidos
    removeOneProductFromCounter();
  }, 750);
}
// function removeProductFromCartById(orderId) {
//   const deletedOrder = document.getElementById(`${orderId}`);
//   const parentNode = deletedOrder.parentNode;
//   parentNode.removeChild(deletedOrder);
// }

function addPriceProductToTotalOrder(stringPrice) {
  const newPrice = formatCurrencyToNumber(stringPrice);
  const total = formatCurrencyToNumber(totalOrderPrice.textContent) + newPrice;
  totalOrderPrice.textContent = formatNumberToCurrency(total);
}
function removePriceProductToTotalOrder(stringPrice) {
  const newPrice = formatCurrencyToNumber(stringPrice);
  const total = formatCurrencyToNumber(totalOrderPrice.textContent) - newPrice;
  totalOrderPrice.textContent = formatNumberToCurrency(total);
}
function addOneProductToCounter() {
  const orderNumber = Number(orderCounter.textContent) + 1;
  orderCounter.textContent = "" + orderNumber;
}
function removeOneProductFromCounter() {
  const orderNumber = Number(orderCounter.textContent) - 1;
  orderCounter.textContent = "" + orderNumber;
}

function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement("div");
    const imageContainerDiv = document.createElement("div");
    const imageCard = document.createElement("img");
    const addedTextDiv = document.createElement("div");
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
    imageCard.addEventListener("click", toggleProductDetail);

    addedTextDiv.classList.add("added-text", "hidden");
    addedTextDiv.textContent = "Added to cart";

    imageContainerDiv.appendChild(imageCard);
    imageContainerDiv.appendChild(addedTextDiv);

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
    shoppingIcon.addEventListener("click", addProductToCartFromBtnIcon);

    // Agregar el div de información y la imagen de carrito al div adicional
    additionalDiv.appendChild(infoDiv);
    additionalDiv.appendChild(shoppingIcon);

    // Agregar el contenedor de imágenes y el div adicional al elemento principal de la tarjeta
    productCard.appendChild(imageContainerDiv);
    productCard.appendChild(additionalDiv);

    // Agregar 'id' para identificar al producto único
    const orderId =
      nameSpan.textContent[0] +
      nameSpan.textContent[1] +
      priceSpan.textContent[0] +
      nameSpan.textContent[nameSpan.textContent.length - 2] +
      nameSpan.textContent[nameSpan.textContent.length - 1] +
      "$home";
    productCard.setAttribute("id", orderId);

    // Agregar la tarjeta al container de productos
    const daddyContainer = document.querySelector("#cards-container");
    daddyContainer.appendChild(productCard);
  }
}

renderProducts(productsList);

// Handle viewport width en resize
window.addEventListener("resize", function () {
  if (this.innerWidth < 1025) {
    hideElement(desktopMenu);
  }
});
