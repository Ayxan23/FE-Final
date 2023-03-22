//Login
let mail = document.querySelector("#login_name");
let pass = document.querySelector("#login_pass");

let contact_btn = document.querySelector(".contact_button");
let login_box_p = document.querySelector(".login_box_p");

let arrInputs = [mail, pass];

contact_btn.addEventListener("click", () => {
  let inputKey = false;
  let logged = false;
  arrInputs.forEach((input) => {
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

  if (localStorage.getItem("user_data")) {
    let data = JSON.parse(localStorage.getItem("user_data"));
    data.forEach((obj) => {
         console.log(obj.mail);
      if (obj.email == mail.value && obj.password == pass.value) {
        window.location.href = "/html/home.html";
        logged = true;
      } else if (obj.email == mail.value) {
        pass.style.border = "2px solid var(--bs-red)";
        pass.previousElementSibling.style.color = "var(--bs-red)";
        login_box_p.innerHTML = "Password incorrect";
        login_box_p.style.color = "var(--bs-red)";
        inputKey = true;
      }
    });

    if (!inputKey && !logged) {
      arrInputs.forEach((input) => {
        input.value = "";
        input.style.border = "2px solid var(--bs-red)";
        input.previousElementSibling.style.color = "var(--bs-red)";
      });
      login_box_p.innerHTML = "No such logged in user was found";
      login_box_p.style.color = "var(--bs-red)";
    }
  }
});
//bele bir user yoxdur
//

arrInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.border = null;
    input.style.color = null;
    login_box_p.style.color = null;
    login_box_p.innerHTML = "Enter Login details to get access";
    input.previousElementSibling.style.color = null;
  });
});
