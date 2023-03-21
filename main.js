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
    price_new: "$68.00",
    price_old: "$80.00",
    category: "Men",
  },
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$47.00",
    price_old: "$60.00",
    category: "Women",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$39.00",
    price_old: "$50.00",
    category: "Baby",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$56.00",
    price_old: "$70.00",
    category: "Men",
  },
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$23.00",
    price_old: "$40.00",
    category: "Men",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$78.00",
    price_old: "$90.00",
    category: "Women",
  },
  {
    img: "/img/latest1.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$45.00",
    price_old: "$60.00",
    category: "Baby",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$91.00",
    price_old: "$110.00",
    category: "Women",
  },
  {
    img: "/img/latest3.jpg.webp",
    title: "Cashmere Tank + Men",
    price_new: "$55.00",
    price_old: "$60.00",
    category: "Men",
  },
  {
    img: "/img/latest2.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$72.00",
    price_old: "$80.00",
    category: "Baby",
  },
  {
    img: "/img/latest1.jpg.webp",
    title: "Cashmere Tank + Women",
    price_new: "$81.00",
    price_old: "$90.00",
    category: "Women",
  },
  {
    img: "/img/latest4.jpg.webp",
    title: "Cashmere Tank + Baby",
    price_new: "$44.00",
    price_old: "$60.00",
    category: "Baby",
  },
];
let trend_slideArr = [...trendArr];

let trend_nav_left = document.querySelector(".trend_slider_nav_left");
let trend_nav_right = document.querySelector(".trend_nav_right");
let trend_box = document.querySelectorAll(".trend_box");

let trend_slider = document.querySelector(".trend_slider");

window.addEventListener("DOMContentLoaded", () => {
  trendBoxSlide();
  filtr_btns[0].style.color = "var(--bs-red)";
  filtr_btns[0].style.borderBottom = "4px solid var(--bs-red)";
});

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
  setTimeout(() => {
    trend_box.forEach((box, i) => {
      let img = trend_slideArr[i].img;
      let title = trend_slideArr[i].title;
      let price_new = trend_slideArr[i].price_new;
      let price_old = trend_slideArr[i].price_old;

      box.innerHTML = `
    <div class="trend_box_img">
      <img src="${img}" alt="" />
      <div class="trend_box_buttons">
        <div class="trend_button_one trend_button">
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div class="trend_button_two trend_button">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="trend_button_three trend_button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>

    <div class="trend_box_info">
      <h3>${title}</h3>
      <div class="trend_info_price">
        <p>${price_new}</p>
        <span>${price_old}</span>
      </div>
    </div>`;
    });
    trendAdd();
  }, 200);

  trend_slider.classList.remove("animate__fadeIn");
  setTimeout(() => {
    trend_slider.classList.add("animate__fadeIn");
  }, 100);
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

// trend add
let add_counter = document.querySelector(".cart_shop_count");
let add_count = 0;

function trendAdd() {
  trend_box.forEach((box) => {
    let add_btn = box.querySelector(".trend_button_one");
    add_btn.addEventListener("click", () => {
      let box_name = box.querySelector("h3").innerHTML;
      let box_price = box.querySelector("p").innerHTML;
      console.log(box_name, box_price); //

      add_counter.style.opacity = "1";
      add_count++;
      add_counter.innerHTML = add_count;
    });
  });
}
//to be continued...

// customer testimonial
let custTestArr = [
  {
    text: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
    custName: "Petey Cruiser",
    custJob: "Designer at Colarlib",
    img: "/img/founder-img.png.webp",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam animi, laboriosam minima tenetur deleniti optio aperiam maxime at iure esse molestias mollitia.",
    custName: "Ayxan Mustafayev",
    custJob: "Developer",
    img: "/img/custAyxan.png",
  },
];

let cust_nav_left = document.querySelector(".testimonial_nav_left");
let cust_nav_right = document.querySelector(".testimonial_nav_right");

let cust_box = document.querySelector(".testimonial_box_info");

let cust_index = 0;

cust_nav_right.addEventListener("click", () => {
  custTestArr.length - 1 == cust_index ? (cust_index = 0) : ++cust_index;
  cust_box.classList.remove("animate__slideInLeft");
  cust_box.classList.remove("animate__slideOutRight");

  setTimeout(() => {
    cust_box.classList.remove("animate__slideInRight");
    cust_box.classList.add("animate__slideOutLeft");
  }, 200);
  setTimeout(() => {
    slideCustTestmin();
    cust_box.classList.remove("animate__slideOutLeft");
    cust_box.classList.add("animate__slideInRight");
  }, 700);
});

cust_nav_left.addEventListener("click", () => {
  cust_index == 0 ? (cust_index = custTestArr.length - 1) : --cust_index;
  cust_box.classList.remove("animate__slideOutLeft");
  cust_box.classList.remove("animate__slideInRight");

  setTimeout(() => {
    cust_box.classList.remove("animate__slideInLeft");
    cust_box.classList.add("animate__slideOutRight");
  }, 200);
  setTimeout(() => {
    slideCustTestmin();
    cust_box.classList.remove("animate__slideOutRight");
    cust_box.classList.add("animate__slideInLeft");
  }, 700);
});

function slideCustTestmin() {
  cust_box.innerHTML = `
  <h2>Customer Testimonial</h2>
  <p class="testimonial_box_info_p">${custTestArr[cust_index].text}</p>
  <div class="testimonial_info_customer">
    <div class="testimonial_customer_img">
      <img src="${custTestArr[cust_index].img}" alt="" />
    </div>
    <div>
      <span>${custTestArr[cust_index].custName}</span>
      <p>${custTestArr[cust_index].custJob}</p>
    </div>
  </div>`;
}

// topScroll button
let top_scroll_btn = document.querySelector(".top_scroll");

top_scroll_btn.addEventListener("click", () => {
  $("html, body").animate({ scrollTop: "0" });
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    top_scroll_btn.style.display = "flex";
  } else {
    top_scroll_btn.style.display = "none";
  }
});

//YouMayLike
let likeArr = [
  {
    img: "/img/latest5.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$68.00",
    price_old: "$80.00",
    category: "Men",
  },
  {
    img: "/img/latest6.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$47.00",
    price_old: "$60.00",
    category: "Men",
  },
  {
    img: "/img/latest7.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$39.00",
    price_old: "$50.00",
    category: "Men",
  },
  {
    img: "/img/latest8.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$56.00",
    price_old: "$70.00",
    category: "Men",
  },
  {
    img: "/img/latest5.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$23.00",
    price_old: "$40.00",
    category: "Men",
  },
  {
    img: "/img/latest6.jpg.webp",
    title: "Cashmere Tank + Bag",
    price_new: "$78.00",
    price_old: "$90.00",
    category: "Men",
  },
];
let like_slideArr = [...likeArr];

let like_nav_left = document.querySelector(".like_nav_left");
let like_nav_right = document.querySelector(".like_nav_right");
let like_box = document.querySelectorAll(".like_box");
let like_slider = document.querySelector(".like_slider");

window.addEventListener("DOMContentLoaded", () => {
  likeBoxSlide();
});

like_nav_left.addEventListener("click", () => {
  let saveFirst = like_slideArr[like_slideArr.length - 1];
  like_slideArr = like_slideArr.map((item, i) => (item = like_slideArr[i - 1]));
  like_slideArr[0] = saveFirst;
  likeBoxSlide();
});

like_nav_right.addEventListener("click", () => {
  let saveLast = like_slideArr[0];
  like_slideArr = like_slideArr.map((item, i) => (item = like_slideArr[i + 1]));
  like_slideArr[like_slideArr.length - 1] = saveLast;

  likeBoxSlide();
});

function likeBoxSlide() {
  setTimeout(() => {
    like_box.forEach((box, i) => {
      let img = like_slideArr[i].img;
      let title = like_slideArr[i].title;
      let price_new = like_slideArr[i].price_new;
      let price_old = like_slideArr[i].price_old;

      box.innerHTML = `
    <div class="like_box_img">
      <img src="${img}" alt="" />
      <div class="like_box_buttons">
        <div class="trend_button_one like_button">
          <i class="fa-solid fa-cart-plus"></i>
        </div>
        <div class="trend_button_two like_button">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="trend_button_three like_button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>

    <div class="trend_box_info">
      <h3>${title}</h3>
      <div class="trend_info_price">
        <p>${price_new}</p>
        <span>${price_old}</span>
      </div>
    </div>`;
    });
    likeAdd();
  }, 200);

  like_slider.classList.remove("animate__fadeIn");
  setTimeout(() => {
    like_slider.classList.add("animate__fadeIn");
  }, 100);
}

function likeAdd() {
  like_box.forEach((box) => {
    let add_btn = box.querySelector(".trend_button_one");
    add_btn.addEventListener("click", () => {
      let box_name = box.querySelector("h3").innerHTML;
      let box_price = box.querySelector("p").innerHTML;
      console.log(box_name, box_price); //

      add_counter.style.opacity = "1";
      add_count++;
      add_counter.innerHTML = add_count;
    });
  });
}
