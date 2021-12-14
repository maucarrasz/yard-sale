const menuMobileHomeButton = document.getElementById("menu-icon"),
  menuMobileCloseIcon = document.getElementById("menu-close-icon"),
  buttonCloseIcon = menuMobileCloseIcon.parentNode,
  menuMobile = buttonCloseIcon.parentNode,
  mainContainer = document.getElementById("main-container");

menuMobileHomeButton.addEventListener("click", appearMenuMobile);
menuMobileCloseIcon.addEventListener("click", closeMenuMobile);

function appearMenuMobile() {
  menuMobile.classList.remove("hidden");
  mainContainer.classList.add("hidden");
}

function closeMenuMobile() {
  menuMobile.classList.add("hidden");
  mainContainer.classList.remove("hidden");
}
