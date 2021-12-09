const button = document.querySelector(".button__secondary");

console.log(button);
button.addEventListener("click", changeParagraphsIntoInputs);
button.addEventListener("click", changeButtonProperties);

function changeParagraphsIntoInputs() {
  let dataAccount = document.querySelectorAll(".value");
  dataAccount = Array.from(dataAccount);
  console.log(dataAccount);
  for (i in dataAccount) {
    let data = dataAccount[i];
    let dataValue = data.textContent;

    let loginInput = document.createElement("input");
    loginInput.classList.add("login__input");
    loginInput.setAttribute(
      "style",
      "height: 45px;margin-bottom: 20px;padding: 0 12px;border: none;border-radius: 10px;background: var(--text-input-field);color: var(--very-light-pink);font-size: var(--medium);font-weight: 300;outline: none;"
    );
    if (i === "0") {
      loginInput.setAttribute("value", dataValue);
      loginInput.setAttribute("type", "text");
      loginInput.setAttribute("id", "name");
      loginInput.setAttribute("autocomplete", "name");
    } else if (i === "1") {
      loginInput.setAttribute("value", dataValue);
      loginInput.setAttribute("type", "email");
      loginInput.setAttribute("id", "email");
      loginInput.setAttribute("autocomplete", "email");
    } else if (i === "2") {
      loginInput.setAttribute("value", dataValue);
      loginInput.setAttribute("type", "password");
      loginInput.setAttribute("id", "password");
      loginInput.setAttribute("autocomplete", "new-password");
    }

    let dadNode = data.parentNode;
    dadNode.replaceChild(loginInput, data);
  }
}

function changeButtonProperties() {
  button.value = "Save";
  button.classList.replace("button__secondary", "login__button");
}
