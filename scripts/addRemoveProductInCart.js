let data = document.querySelectorAll(".order");
data = Array.from(data);
data.forEach(e => {
  let closeIcon = e.querySelector(".close-icon");
  closeIcon.addEventListener("click", changeShoppingStatus);
});

function changeShoppingStatus() {
  console.log(this);
  let order = this.parentNode;
  let removedText = order.querySelector(".removed-text");
  let orderName = order.querySelector(".order__name");
  let orderPrice = order.querySelector(".order__price");
  if (removedText.classList.contains("hidden")) {
    order.removeChild(orderName);
    order.removeChild(orderPrice);
    order.classList.add("remove-order");
    removedText.classList.remove("hidden");
    removedText.style.marginLeft = "16px";
  }
}
