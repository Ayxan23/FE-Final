let contact_button = document.querySelector(".contact_button");

let text_area = document.querySelector(".form_control");
let inputs = document.querySelectorAll("input");

contact_button.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
  text_area.value = "";
});
