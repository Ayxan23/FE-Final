//Sign up
// localStorage.clear();
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let f_name = document.querySelector("#signup_name");
let mail = document.querySelector("#signup_mail");
let pass = document.querySelector("#signup_pass");
let conf_pass = document.querySelector("#signup_conf_pass");
let login_box_p = document.querySelector(".login_box_p");

let contact_btn = document.querySelector(".contact_button");

let inputs = document.querySelectorAll("input");
let user_index = 1;
let resArr = [];

contact_btn.addEventListener("click", () => {
  let inputKey = false;
  inputs.forEach((input) => {
    if (input.value == "") {
      login_box_p.style.color = "var(--bs-red)";
      login_box_p.innerHTML = "Can't be left empty";
      input.style.border = "2px solid var(--bs-red)";
      input.previousElementSibling.style.color = "var(--bs-red)";
      inputKey = true;
    }
  });

  if (inputKey) {
    return;
  }

  if (pass.value != conf_pass.value) {
    login_box_p.style.color = "var(--bs-red)";
    login_box_p.innerHTML = "The password confirm does not match";
    conf_pass.style.border = "2px solid var(--bs-red)";
    conf_pass.style.color = "var(--bs-red)";
    conf_pass.previousElementSibling.style.color = "var(--bs-red)";
    return;
  }

  if (!filter.test(mail.value)) {
    mail.style.border = "2px solid var(--bs-red)";
    mail.style.color = "var(--bs-red)";
    mail.previousElementSibling.style.color = "var(--bs-red)";
    inputKey = true;
  }

  if (user_index > 1 || localStorage.getItem("user_data")) {
    let data = JSON.parse(localStorage.getItem("user_data"));
    data.forEach((obj) => {
      if (obj.email == mail.value) {
        mail.value = "";
        login_box_p.style.color = "var(--bs-red)";
        login_box_p.innerHTML = "This email address is already used";
        inputKey = true;
      }
    });
  }

  if (inputKey) {
    return;
  }

  let obj = {
    id: user_index++,
    fullName: f_name.value,
    email: mail.value,
    password: pass.value,
  };
  
  if (localStorage.getItem("user_data")) {
    resArr = JSON.parse(localStorage.getItem("user_data"));
  }
  resArr.push(obj);
  localStorage.setItem("user_data", JSON.stringify(resArr));
  inputs.forEach((input) => {
    input.value = "";
    input.style.border = null;
  });
  window.location.href = "/html/login.html";
});

inputs.forEach((input) => {
  input.addEventListener("keypress", () => {
    let num = 1;
    passwordColor(input, num);
  });
  input.addEventListener("keydown", () => {
    let num = -1;
    passwordColor(input, num);
  });

  input.addEventListener("focus", () => {
    input.style.border = null;
    input.style.color = null;
    login_box_p.style.color = null;
    login_box_p.innerHTML = "Create your account to get full access";
    input.previousElementSibling.style.color = null;
  });
});

function passwordColor(input, num) {
  if (input.id == "signup_pass" || input.id == "signup_conf_pass") {
    input.style.fontWeight = "800";
    if (input.value.length + num < 5) {
      input.style.color = "var(--bs-red)";
      input.style.border = "2px solid var(--bs-red)";
      return;
    }
    if (input.value.length + num < 8) {
      input.style.color = "rgb(255, 140, 0)";
      input.style.border = "2px solid rgb(255, 140, 0)";
      return;
    }
    if (input.value.length + num > 7) {
      input.style.color = "rgb(0, 221, 41)";
      input.style.border = "2px solid rgb(0, 221, 41)";
    }
  }
}
