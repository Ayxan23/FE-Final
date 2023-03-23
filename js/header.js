// navbar
let sub_menu = document.querySelectorAll(".sub_menu");
sub_menu.forEach((sb_menu) => {
  sb_menu.addEventListener("mouseover", () => {
    sb_menu.previousElementSibling.style.color = "red";
    if (window.innerWidth > 970) {
      sb_menu.classList.add("dsp_block");
    }
  });
  sb_menu.addEventListener("mouseout", () => {
    sb_menu.previousElementSibling.style.color = null;
    if (window.innerWidth > 970) {
      sb_menu.classList.remove("dsp_block");
    }
  });
});

let nav_text = document.querySelector(".nav_text");
let menu_btn = document.querySelector(".nav_menu");
menu_btn.addEventListener("click", () => {
  nav_text.classList.toggle("dsp_block");

  menu_btn.children[0].classList.toggle("fa-bars");
  menu_btn.children[0].classList.toggle("fa-x");
});

let sub_a = document.querySelectorAll(".sub_a");
sub_a.forEach((sub_link) => {
  sub_link.addEventListener("click", () => {
    if (window.innerWidth < 970) {
      sub_link.nextElementSibling.classList.toggle("dsp_block");
    }
  });

  sub_link.addEventListener("mouseover", () => {
    if (window.innerWidth > 970) {
      sub_link.nextElementSibling.classList.add("dsp_block");
    }
  });
  sub_link.addEventListener("mouseout", () => {
    if (window.innerWidth > 970) {
      sub_link.nextElementSibling.classList.remove("dsp_block");
    }
  });
});

// let nav_img = document.querySelector(".nav_img");
// nav_img.addEventListener("click", () => {
//   window.location.href = "./index.html";
// });

//footer
let footer_email = document.querySelector(".email_contact_text");
let footer_input = footer_email.querySelector("input");
let footer_button = footer_email.querySelector("button");

footer_button.addEventListener("click", () => {
  footer_input.value = "";
});

//cart
let add_counter = document.querySelector(".cart_shop_count");
window.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("counter_mev") &&
    Number(localStorage.getItem("counter_mev")) > 0
  ) {
    let count = Number(localStorage.getItem("counter_mev"));
    add_counter.innerHTML = count;
    add_counter.style.opacity = "1";
    add_counter.style.opacity = "1";
  }
});
