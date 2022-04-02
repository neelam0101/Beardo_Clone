//new addition
let url = `http://localhost:5100/homes`;
async function FetchApi() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.home);
    appendData(data.home);
  } catch (error) {
    console.log("error", error);
  }
}
FetchApi();

//
function appendData(data) {
  data.map((elem) => {
    var box = document.createElement("div");
    box.id = "box";
    var image = document.createElement("img");
    image.src = elem.img_url;
    var name = document.createElement("div");
    name.textContent = elem.title;
    name.style.color = "black";
    name.id = "product_name";
    var p = document.createElement("div");
    p.id = "productprice";
    p.textContent = `₹  ${elem.price}`;
    p.style.color = "black";
    var addtocart = document.createElement("div");
    addtocart.id = "cart_button";
    addtocart.textContent = "AddToCart";
    addtocart.id = "divaddtocart";
    addtocart.addEventListener("click", function () {
      cart_data(elem);
      alert("Added to cart");
    });
    box.append(image, name, p, addtocart);
    document.getElementById("Recommendedpro").append(box);
  });
}

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var arr = JSON.parse(localStorage.getItem("cart_data_local")) || [];
function cart_data(cart_data) {
  arr.push(cart_data);
  localStorage.setItem("cart_data_local", JSON.stringify(arr));
  //location.reload()
  document.querySelector("#cart_count").textContent = `${arr.length}`;
}
let ct = document.querySelector("#cart_count");
ct.textContent = `${arr.length}`;
ct.style.marginTop = "10px";
ct.style.color = "red";

var logged = JSON.parse(localStorage.getItem("loginData"));
//  console.log(logged);
if (logged != null && logged != "") {
  // console.log(logged);
  let q = document.getElementById("login_inner");
  q.innerHTML = `Welcome!  ${logged.data}`;
  q.style.color = "red";
} else {
}

let logout = document.getElementById("logout");
logout.addEventListener("click", signout);
function signout() {
  localStorage.setItem("loginData", JSON.stringify(""));
  localStorage.setItem("cart_data_local", JSON.stringify(""));
  document.querySelector("#cart_count").textContent = "";
  window.location.reload();
}
