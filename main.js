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

let nav_img = document.querySelector(".nav_img");
nav_img.addEventListener("click", () => {
  window.location.href = "index.html";
});

//slider
// setInterval(() => {
//   sliderArr.length - 1 == index ? (index = 0) : ++index;
//   slider_img.style.backgroundImage = sliderArr[index].img;
//   textPlace();
// }, 5000);

let sliderArr = [
  {
    img: "url(./img/h1_hero1.jpg.webp)",
  },
  {
    img: "url(./img/h1_hero2.jpg.webp)",
  },
];

let imgnav_left = document.querySelector(".imgnav_left");
let imgnav_right = document.querySelector(".imgnav_right");

let slider_img = document.querySelector(".slider_img");
let slider_text = document.querySelector(".slider_text_area");

let index = 0;
let text_key = true;

imgnav_right.addEventListener("click", () => {
  sliderArr.length - 1 == index ? (index = 0) : ++index;
  slider_img.style.backgroundImage = sliderArr[index].img;
  textPlace();
});

imgnav_left.addEventListener("click", () => {
  index == 0 ? (index = sliderArr.length - 1) : --index;
  slider_img.style.backgroundImage = sliderArr[index].img;
  textPlace();
});

function textPlace() {
  if (text_key) {
    slider_text.style.justifyContent = "flex-end";
    text_key = false;
  } else {
    slider_text.style.justifyContent = "flex-start";
    text_key = true;
  }

  slider_box_p.classList.remove("animate__fadeInUp");
  slider_box_button.classList.remove("animate__fadeInUp");
  slider_box_h1.classList.remove("animate__bounceIn");
  setTimeout(() => {
    slider_box_p.classList.add("animate__fadeInUp");
    slider_box_button.classList.add("animate__fadeInUp");
    slider_box_h1.classList.add("animate__bounceIn");
  }, 100);
}

let slider_box = document.querySelector(".slider_box");
let slider_box_h1 = slider_box.querySelector("h1");
let slider_box_p = slider_box.querySelector("p");
let slider_box_button = slider_box.querySelector("button");

// trend slider
let trendArr = [
  {
    img: "/img/latest1.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Men",
  },
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Women",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Baby",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Men",
  }, // trend slider
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Men",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Women",
  },
  {
    img: "/img/latest1.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Baby",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Women",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Men",
  },
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Baby",
  },
  {
    img: "/img/latest1.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Women",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$98.00",
    price_old: "$120.00",
    category: "Baby",
  },
];
let trend_slideArr = [...trendArr];

let trend_nav_left = document.querySelector(".trend_slider_nav_left");
let trend_nav_right = document.querySelector(".trend_nav_right");
let trend_box = document.querySelectorAll(".trend_box");

window.addEventListener("DOMContentLoaded", () => {
  trendBoxSlide();
  filtr_btns[0].style.color = "var(--bs-red)";
  filtr_btns[0].style.borderBottom = "4px solid var(--bs-red)";
});

let trend_index = 0;

trend_nav_left.addEventListener("click", () => {
  let saveFirst = trend_slideArr[trend_slideArr.length - 1];
  trend_slideArr = trend_slideArr.map(
    (item, i) => (item = trend_slideArr[i - 1])
  );
  trend_slideArr[0] = saveFirst;

  trendBoxSlide();
});

trend_nav_right.addEventListener("click", () => {
  let saveLast = trend_slideArr[0];
  trend_slideArr = trend_slideArr.map(
    (item, i) => (item = trend_slideArr[i + 1])
  );
  trend_slideArr[trend_slideArr.length - 1] = saveLast;

  trendBoxSlide();
});

function trendBoxSlide() {
  trend_box.forEach((box, i) => {
    let img = trend_slideArr[i].img;
    let title = trend_slideArr[i].title;
    let price_new = trend_slideArr[i].price_new;
    let price_old = trend_slideArr[i].price_old;

    box.innerHTML = `<div class="trend_box_img">
    <img src="${img}" alt="" />
    <div class="trend_box_buttons">
      <a href="#"
        ><div class="trend_button_one trend_button">
          <i class="fa-solid fa-cart-plus"></i></div
      ></a>
      <a href="#"
        ><div class="trend_button_two trend_button">
          <i class="fa-regular fa-heart"></i></div
      ></a>
      <a href="#"
        ><div class="trend_button_three trend_button">
          <i class="fa-solid fa-magnifying-glass"></i></div
      ></a>
    </div>
  </div>
  <div class="trend_box_info">
    <h3><a href="#">${title}</a></h3>
    <div class="trend_info_price">
      <p>${price_new}</p>
      <span>${price_old}</span>
    </div>
  </div>`;
  });
}

// trend filter
let trend_filtr = document.querySelector(".trending_top_filtr");
let filtr_btns = trend_filtr.querySelectorAll("h4");

filtr_btns.forEach((filtr_btn) => {
  filtr_btn.addEventListener("click", () => {
    filtr_btns.forEach((filtr_btn) => {
      filtr_btn.style.color = null;
      filtr_btn.style.borderBottom = null;
    });
    filtr_btn.style.color = "var(--bs-red)";
    filtr_btn.style.borderBottom = "4px solid var(--bs-red)";

    trend_slideArr = [...trendArr];
    if (filtr_btn.innerHTML != "All") {
      trend_slideArr = trend_slideArr.filter(
        (obj) => obj.category == filtr_btn.innerHTML
      );
    }
    trendBoxSlide();
  });
});
