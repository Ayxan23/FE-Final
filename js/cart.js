let cart_content = document.querySelector(".cart_content");
let cart_empty = document.querySelector(".cart_empty");
// localStorage.clear()
window.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("basket_mev") &&
    JSON.parse(localStorage.getItem("basket_mev")).length > 0
  ) {
    cart_empty.style.display = "none";
    addCartProd();
  }
});

function addCartProd() {
  cart_content.innerHTML = "";
  let basketArr = JSON.parse(localStorage.getItem("basket_mev"));
  basketArr.forEach((prod) => {
    prod.price = parseFloat(prod.price.substring(1) * prod.count).toFixed(2);
    cart_content.innerHTML += ` 
        <div class="cart_product">
        <div class="cart_product_left">
          <div class="product_img">
            <img src=".${prod.img}" alt="" />
          </div>
        </div>
        <div class="prduct_mobile">
          <h3 class="product_name">${prod.prodName}</h3>
          <div class="cart_product_right">
            <div class="product_quantity">
              <div class="product_minus">
                <i class="fa-solid fa-minus"></i>
              </div>
              <div class="product_count" data-id = "${prod.id}">${prod.count}</div>
              <div class="product_plus">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <p class="product_price">$${prod.price}</p>
            <div class="product_delete">
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      </div>`;
  });
  let cart_product = document.querySelectorAll(".cart_product");
  cart_product.forEach((box) => {
    let prod_plus = box.querySelector(".product_plus");
    let prod_minus = box.querySelector(".product_minus");
    let prod_del = box.querySelector(".product_delete");
    let prod_id = box.querySelector(".product_count").getAttribute("data-id");

    prod_plus.addEventListener("click", () => {
      add_counter.style.opacity = "1";
      let count = Number(localStorage.getItem("counter_mev"));
      add_counter.innerHTML = ++count;
      localStorage.setItem("counter_mev", String(count));

      let data = JSON.parse(localStorage.getItem("basket_mev"));
      data.forEach((obj) => {
        if (obj.id == prod_id) {
          ++obj.count;
          localStorage.setItem("basket_mev", JSON.stringify(data));
          addCartProd();
        }
      });
    });
    prod_minus.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("basket_mev"));
      data.forEach((obj) => {
        if (obj.id == prod_id) {
          if (obj.count > 1) {
            add_counter.style.opacity = "1";
            let count = Number(localStorage.getItem("counter_mev"));
            add_counter.innerHTML = --count;
            localStorage.setItem("counter_mev", String(count));

            --obj.count;
            localStorage.setItem("basket_mev", JSON.stringify(data));
            addCartProd();
          }
        }
      });
    });
    prod_del.addEventListener("click", () => {
      let data = JSON.parse(localStorage.getItem("basket_mev"));
      data.forEach((obj, i) => {
        if (obj.id == prod_id) {
          add_counter.style.opacity = "1";
          let count = Number(localStorage.getItem("counter_mev")) - obj.count;
          add_counter.innerHTML = count;
          localStorage.setItem("counter_mev", String(count));
          if (Number(localStorage.getItem("counter_mev")) < 1) {
            add_counter.style.opacity = "0";
          }

          data.splice(i, 1);
          localStorage.setItem("basket_mev", JSON.stringify(data));
          addCartProd();
          if (data.length == 0) {
            cart_empty.style.display = "flex";
          }
        }
      });
    });
  });
}
