
// Navbar 

let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}



//Cart

var cartnumber = document.querySelector("#cartnumber");

let cartCount = parseInt(localStorage.getItem("cart-number"));
var addedItems = new Set();


function addToCart(button) {
  let foodItemName = button.parentElement.parentElement.querySelector('h2').textContent;


  if (addedItems.has(foodItemName)) {
    alert('You already added this item to the cart: ' + foodItemName);
  } else {
    cartCount++;
    cartnumber.innerHTML = cartCount;
    addedItems.add(foodItemName);
    localStorage.setItem("selected_food", JSON.stringify(Array.from(addedItems)));
    localStorage.setItem("cart-number", cartCount);
  };
};

let cart_final_number = localStorage.getItem("cart-number");
cartnumber.innerHTML = cart_final_number;

let final_items = JSON.parse(localStorage.getItem("selected_food"));
final_items.forEach(element => {
  addedItems.add(element);
});


var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

var regPhone = /^\d{10}$/;

var regName = /^[^\d\s]+$/;



document.addEventListener("DOMContentLoaded", function () {
  let conct_submit = document.getElementById("contact_submit_btn");
  console.log(conct_submit);
  conct_submit.onclick = function () {
    let validation = formValidation();
    if (validation === true) {
      let randomNumber = Math.floor(10000 + Math.random() * 90000);
      alert(`Thank you for the Query, you will receive a reply within 20 minutes. Your RefId:-${randomNumber}`);
      window.location.relode();
    }
  };
});



function formValidation() {
  let name = document.querySelector("#ct-name").value;
  let email = document.querySelector("#ct-email").value;
  let phone = document.querySelector("#ct-phone").value;
  let message = document.querySelector("#message").value;



  var returnselector = true;


  if (name == "" || regName.test(name)) {
    alert("Please enter your name properly.");
    returnselector = false;
  }

  if (email == "" || !regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
    returnselector = false;
  }

  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter a valid phone number.");
    returnselector = false;
  }

  if (message == "") {
    alert("Please enter your Query Message.");
    returnselector = false;
  }

  return returnselector;

}





var package = document.querySelector(".porter-book");
var pack_close = document.querySelector("#closebill");
var package_icon = document.getElementById("porter-icon");
package_icon.onclick = () => {
  package.style.display = "block";
}

pack_close.onclick = () => {
  package.style.display = "none";
}

let porter_btn = document.querySelector("#porter-btn");
porter_btn.onclick = () => {
  let pickup_address = document.querySelector("#porter-address").value;
  console.log(pickup_address);
  let validation = formValidationPorter();
  if (validation === true) {
    alert(`Thank you. Your package will be pick up from ${pickup_address}. You will receive a call from our agents within 2 hours.`);
    window.location.reload();
  }
}


function formValidationPorter() {
  let name = document.querySelector("#porter-name").value;
  let phone = document.querySelector("#porter-mobile").value;
  let address = document.querySelector("#porter-address").value;
  let dest_address = document.querySelector("#porter-dest").value;



  var returnselector = true;


  if (name == "" || regName.test(name)) {
    alert("Please enter your name properly.");
    returnselector = false;
  }


  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter a valid phone number.");
    returnselector = false;
  }

  if (address == "") {
    alert("Please enter your Address.");
    returnselector = false;
  }

  if (dest_address == "") {
    alert("Please enter your Destination Address.");
    returnselector = false;
  }


  return returnselector;

}