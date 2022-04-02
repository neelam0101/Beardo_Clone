//import header// filename:header1.js//  function name: header()
import { header } from "./components/header1.js";
let header1 = document.getElementById("header1");
header1.innerHTML = header();

//parse from local storage
var cart_data = JSON.parse(localStorage.getItem("cart_data_local")) || [];

//user name
var logged = JSON.parse(localStorage.getItem("loginData"));
//console.log(logged);
if (logged != null && logged != "") {
  // console.log(logged.data);
  let q = document.getElementById("login_inner");
  q.innerHTML = `Welcome!  ${logged.data}`;
  q.style.color = "red";
}
//cart(cart_data)&
//cart empty condition
if (cart_data == "") {
  let h3 = document.createElement("h3");
  h3.textContent = "YOUR CART IS EMPTY";
  h3.id = "h3";
  let div_shopnow = document.createElement("div");
  div_shopnow.textContent = "SHOP NOW";
  div_shopnow.id = "div_shopnow";

  let img_emp = document.createElement("img");
  img_emp.id = "img_emp";
  img_emp.src =
    " https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy93aGF0c2FwcC1pbWFnZS0yMDIyLTAyLTE1LWF0LTExMTE0OS1hbS0zODIxNy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=";
  div_shopnow.addEventListener("click", function () {
    window.location.href = "./product.html";
  });
  let div_combo = document.createElement("div");
  div_combo.id = "div_combo";
  div_combo.append(h3, div_shopnow, img_emp);
  document.querySelector("#item_div").append(div_combo);

  //
  document.querySelector("#order_div").innerHTML = "";
  let img_emp_rhs = document.createElement("img");
  img_emp_rhs.id = "img_emp_rhs";
  img_emp_rhs.src =
    "https://images.milledcdn.com/2020-09-09/Rer_icu1_jYE_OQt/9yn_m7eW-ThI.jpeg";
  document.querySelector("#order_div").append(img_emp_rhs);
} else {
  cart(cart_data);
}

//cart items
function cart(cart_data) {
  document.querySelector("#cart_total").textContent = "";
  document.querySelector("#items_number").textContent = "";
  document.getElementById("item_div").innerHTML = "";
  cart_data.map(function (el, index) {
    let item_div = document.getElementById("item_div");
    let cartdata_div = document.createElement("div");
    cartdata_div.id = "cartdata_div";
    let div81 = document.createElement("div");
    let img81 = document.createElement("img");
    img81.src = el.img_url;
    img81.id = "img81";
    div81.append(img81);
    div81.id = "div81";
    let div80 = document.createElement("div");
    let div82 = document.createElement("div");
    div82.textContent = el.title;
    div82.id = "div82";
    let div83 = document.createElement("div");
    div83.id = "div83";
    div83.textContent =
      "₹" +
      el.price +
      " || " +
      Math.floor(Math.random() * (20 - 5 + 1) + 5) +
      "%  Off ";

    let span84 = document.createElement("span");
    span84.textContent = "REMOVE";
    span84.id = "span84";

    div80.append(div82, div83, span84);
    cartdata_div.append(div81, div80);
    item_div.append(cartdata_div);

    //remove
    span84.addEventListener("click", function () {
      deletetask(index);
    });

    //total amount
    var total = cart_data.reduce(function (acc, cv) {
      return Number(acc) + Number(cv.price);
    }, 0);

    document.querySelector(
      "#items_number"
    ).textContent = `PRICE DETAILS  (${cart_data.length} ITEM)`;
    document.querySelector("#cart_count").textContent = `${cart_data.length}`;
    document.querySelector("#subtotal").textContent = "Subtotal";
    document.querySelector("#cart_total").textContent = `₹ ${total}`;
    document.querySelector("#delivery").textContent = "Delivery charges";
    document.querySelector("#deliveryfree").textContent = "free";
    document.querySelector("#youpay").textContent = "You Pay";
    document.querySelector("#amount").textContent = `₹ ${total}`;
    document.querySelector("#placeorder").textContent = "PLACE ORDER";
  });
}

//coupan
document
  .querySelector("#coupan_input")
  .addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      discount();
    }
  });

function discount() {
  var promo = document.querySelector("#coupan_input").value;
  if (promo == "masai30") {
    var total = cart_data.reduce(function (acc, cv) {
      return acc * 0.7 + Number(cv.price) * 0.7;
    }, 0);

    document.querySelector("#cart_total").textContent = `₹ ${Math.round(
      total
    )}`;
    document.querySelector("#amount").textContent = `₹ ${Math.round(total)}`;
    alert("you have got 30% discount");
  }
}

//delete function
function deletetask(index) {
  cart_data.splice(index, 1);
  localStorage.setItem("cart_data_local", JSON.stringify(cart_data));
  cart(cart_data);
  location.reload();
}

//location to place order
document.getElementById("placeorder").addEventListener("click", function () {
  if (logged.data) {
    window.location.href = "checkout.html";
  } else {
    alert("Login before proceed");
    window.location.href = "login.html";
  }
});
