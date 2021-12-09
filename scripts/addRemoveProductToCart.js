let data = document.querySelectorAll(".card");
data = Array.from(data);
data.forEach(e => {
  let shoppingIcon = e.querySelector(".card__additional img");
  shoppingIcon.addEventListener("click", changeShoppingStatus);
});

function changeShoppingStatus() {
  console.log(this);
  let additionalInfo = this.parentNode;
  let card = additionalInfo.parentNode;
  let removedText = card.querySelector(".card__image-container .center-text");
  let iconSrc = this.getAttribute("src");
  if (iconSrc !== "./images/bt_added_to_cart.svg") {
    this.setAttribute("src", "./images/bt_added_to_cart.svg");
    removedText.classList.add("hidden");
  } else {
    this.setAttribute("src", "./images/bt_add_to_cart.svg");
    removedText.classList.remove("hidden");
  }
}
