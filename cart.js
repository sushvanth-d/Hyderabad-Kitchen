// Navbar 

let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}




//Food Items Available

let food_items_available = [
    {
        name: 'Chicken Biryani',
        img: './Photos/chicken-biryani.jpg',
        price: 140
    },
    {
        name: 'Mutton Biryani',
        img: './Photos/Mutton-Biryani.jpg',
        price: 150
    },
    {
        name: 'Paneer Butter Masala',
        img: './Photos/Paneer-butter.jpg',
        price: 120
    },
    {
        name: 'Fish Curry',
        img: './Photos/Fish-curry.png',
        price: 200
    },
    {
        name: 'Pizza Margherita',
        img: './Photos/Pizza-Margherita-_large.jpg',
        price: 220
    },
    {
        name: 'Chicken Patty Burger',
        img: './Photos/Moist-Chicken-Burgers.jpg',
        price: 180
    },
    {
        name: 'Dosa',
        img: './Photos/dosa.jpg',
        price: 100
    },
    {
        name: 'Idly',
        img: './Photos/idly.jpg',
        price: 110
    },
    {
        name: 'Vada',
        img: './Photos/vada.jpg',
        price: 110
    },
    {
        name: 'Mysore Bonda',
        img: './Photos/Mysore-Bonda.jpg',
        price: 110
    },
    {
        name: 'Mysore Bonda',
        img: './Photos/Mysore-Bonda.jpg',
        price: 110
    },
    {
        name: 'Lemon Rice',
        img: './Photos/lemon-rice.jpg',
        price: 150
    },
    {
        name: 'Sambar Rice',
        img: './Photos/sambar-rice.jpg',
        price: 160
    },
    {
        name: 'Chicken Curry',
        img: './Photos/chicken-curry.jpeg',
        price: 180
    },
    {
        name: 'Chole Bhature',
        img: './Photos/chole-bhature.jpg',
        price: 150
    },
    {
        name: 'Pav Bhaji',
        img: './Photos/pav-bhaji.jpeg',
        price: 100
    },
    {
        name: 'Aloo Paratha',
        img: './Photos/aloo-paratha.jpg',
        price: 160
    },
    {
        name: 'Palak Paneer',
        img: './Photos/palak-paneer.jpeg',
        price: 120
    },
    {
        name: 'Dal Makhani',
        img: './Photos/dal-makhani.jpg',
        price: 130
    },
    {
        name: 'Butter Chicken',
        img: './Photos/butter-chicken.jpg',
        price: 180
    },
    {
        name: 'Chicken Tikka',
        img: './Photos/chicken-tikka.jpeg',
        price: 180
    },
    {
        name: 'Aloo Chaat',
        img: './Photos/aloo-chaat.jpg',
        price: 80
    },
    {
        name: 'Samosa',
        img: './Photos/samosa.jpeg',
        price: 50
    },
    {
        name: 'Sushi',
        img: './Photos/sushi.jpg',
        price: 140
    },
    {
        name: 'Chicken Shawarma',
        img: './Photos/shawarma.jpg',
        price: 120
    },
    {
        name: 'Veg Fried Rice',
        img: './Photos/veg-fried-rice.jpg',
        price: 140
    },
    {
        name: 'Chicken Fried Rice',
        img: './Photos/chicken-fried-rice.jpg',
        price: 150
    },
    {
        name: 'Veg Noodles',
        img: './Photos/veg-noodles.jpg',
        price: 120
    },
    {
        name: 'Chicken Noodles',
        img: './Photos/chicken-noodles.jpg',
        price: 160
    },
    {
        name: 'Hakka Noodles',
        img: './Photos/hakka-noodles.jpg',
        price: 170
    },
    {
        name: 'Veg Momos',
        img: './Photos/veg-momos.jpg',
        price: 110
    },
    {
        name: 'Chicken Momos',
        img: './Photos/chicken-momos.jpg',
        price: 140
    },
    {
        name: 'Fried Momos',
        img: './Photos/fried-momos.jpg',
        price: 150
    },
    {
        name: 'Chicken Pizza',
        img: './Photos/chicken-pizza.jpg',
        price: 260
    },
    {
        name: 'Veggie Burger',
        img: './Photos/veggie-burger.jpg',
        price: 160
    },
    {
        name: 'Ham Burger',
        img: './Photos/ham-burger.jpeg',
        price: 200
    },
    {
        name: 'Hot Dog',
        img: './Photos/hot-dog.jpg',
        price: 180
    },
    {
        name: 'French Fries',
        img: './Photos/french-fries.jpg',
        price: 140
    },
    {
        name: 'Steak and Baked Potato',
        img: './Photos/steak-bakedpotato.jpg',
        price: 220
    },
    {
        name: 'Croissant',
        img: './Photos/croissant.jpeg',
        price: 150
    },
    {
        name: 'Sandwich',
        img: './Photos/sandwich.jpg',
        price: 130
    },
    {
        name: 'Rasagulla',
        img: './Photos/rasagulla.jpg',
        price: 100
    },
    {
        name: 'Gulab Jamun',
        img: './Photos/gulab-jamun.jpeg',
        price: 100
    },
    {
        name: 'Jilebi',
        img: './Photos/jalebi.jpg',
        price: 120
    },
    {
        name: 'Waffle',
        img: './Photos/waffle.jpeg',
        price: 150
    },
    {
        name: 'Cheese Cake',
        img: './Photos/cheese-cake.jpeg',
        price: 120
    },
    {
        name: 'Red Velvet Cake',
        img: './Photos/red-velvet.jpg',
        price: 120
    },
    {
        name: 'Brownie',
        img: './Photos/hash-brownies.jpg',
        price: 130
    },
    {
        name: 'Choclate Lava',
        img: './Photos/chocalate-lava.jpg',
        price: 150
    },
    {
        name: 'Falooda',
        img: './Photos/falooda.jpg',
        price: 150
    },
    {
        name: 'Lassi',
        img: './Photos/lassi.jpg',
        price: 130
    },]







//Adding Food Items in cart

let food_cart = "";
var foodItem_selected = JSON.parse(localStorage.getItem("selected_food"));
for (let i = 0; i < foodItem_selected.length; i++) {
    for (let j = 0; j < food_items_available.length; j++) {
        if (foodItem_selected[i] === food_items_available[j].name) {
            const backgroundColor = i % 2 === 0 ? 'rgb(175, 111, 175)' : 'rgb(168, 70, 168)';
            food_cart += `
            <tr style="background-color: ${backgroundColor};">
                <td><img src= ${food_items_available[j].img}></td>
                <td id="ItemName_inCart">${food_items_available[j].name}</td>
                <td id="quant-bx"><div id="quantity-box">
                <p id="quant-minus" onclick="dec_quant(this)">-</p>
                <p id="quant-value">1</p>
                <p id="quant-plus" onclick="inc_quant(this)">+<p>
                </div></td>
                <td id="foodprices_incart" data-initial-value="${food_items_available[j].price}">${food_items_available[j].price}</td>
                <td><i class="fa-solid fa-trash" onclick="deleteItemFromCart(this)"></i></td>
            </tr>
            `
        };
    };
};

let cart_insert_items = document.querySelector(".cart-details");
cart_insert_items.innerHTML = food_cart;



//cart number updating


var cartnumber = document.querySelector("#cartnumber");
var cart_final_number = localStorage.getItem("cart-number");
cartnumber.innerHTML = cart_final_number;



// Deleting Items from Cart

function deleteItemFromCart(button) {

    let DeleteItem = button.parentElement.parentElement.querySelector("#ItemName_inCart").textContent;
    let final_items = JSON.parse(localStorage.getItem("selected_food"));
    let index = final_items.indexOf(DeleteItem);
    if (index !== -1) {
        final_items.splice(index, 1);

        localStorage.setItem("selected_food", JSON.stringify(Array.from(final_items)));
    }
    let deleteElement = button.parentNode.parentNode;
    deleteElement.remove();

    let cart_final_number = localStorage.getItem("cart-number");
    cart_final_number = parseInt(cart_final_number) - 1;
    cartnumber.innerHTML = cart_final_number;
    localStorage.setItem("cart-number", cart_final_number);
    window.location.reload();

}


//Empty Cart Indication

if (foodItem_selected.length === 0) {
    let emptycart = document.querySelector("#emptycart");
    emptycart.innerHTML = `
    <div id="emptycart-text">
    <p >Cart is Empty! <br>Please add Items to Checkout</p>
    </div>
    `
    localStorage.setItem("cart-number", 0);
}


//Increase items quantity

function inc_quant(button) {
    let quant_value = button.parentElement.querySelector("#quant-value");
    let total_item_value = button.parentElement.parentElement.parentElement.querySelector("#foodprices_incart");
    if (parseInt(quant_value.innerHTML) === 10) {
        alert("Max limited reached !!!")
    }
    else {
        let quant_value_now = parseInt(quant_value.innerHTML) + 1;
        quant_value.innerHTML = quant_value_now;

        let initial_total_item_value = parseInt(total_item_value.dataset.initialValue);
        total_item_value.innerHTML = initial_total_item_value * quant_value_now;
        updateSubTotal();
    }
}


//decrease item quantities

function dec_quant(button) {
    let quant_value = button.parentElement.querySelector("#quant-value");

    let total_item_value = button.parentElement.parentElement.parentElement.querySelector("#foodprices_incart");

    if (parseInt(quant_value.innerHTML) === 1) {

        let DeleteItem = button.parentElement.parentElement.parentElement.querySelector("#ItemName_inCart").textContent;
        let final_items = JSON.parse(localStorage.getItem("selected_food"));
        let index = final_items.indexOf(DeleteItem);
        if (index !== -1) {
            final_items.splice(index, 1);

            localStorage.setItem("selected_food", JSON.stringify(Array.from(final_items)));
        }
        let deleteElement = button.parentNode.parentNode;
        deleteElement.remove();

        let cart_final_number = localStorage.getItem("cart-number");
        cart_final_number = parseInt(cart_final_number) - 1;
        cartnumber.innerHTML = cart_final_number;
        localStorage.setItem("cart-number", cart_final_number);
        window.location.reload();

    }
    else {

        let quant_value_now = parseInt(quant_value.innerHTML) - 1;

        quant_value.innerHTML = quant_value_now;

        let initial_total_item_value = parseInt(total_item_value.dataset.initialValue);

        total_item_value.innerHTML = parseInt(total_item_value.innerHTML) - initial_total_item_value;

        updateSubTotal();
    }

}



// Subtotal Calculation

function updateSubTotal() {
    var totalcalculation = document.querySelectorAll("#foodprices_incart");
    var subtotal = 0
    totalcalculation.forEach((element) => {
        let element_final = element.innerHTML;
        subtotal = subtotal + parseInt(element_final);
        let subtotal_insert = document.querySelector("#subtotal-rs");
        subtotal_insert.innerHTML = subtotal;
        updateTotal(subtotal);
    }
    );
};

updateSubTotal();

// Total Calculation

function updateTotal(subtotal) {
    let shipping_charges = document.querySelector("#shipping-rs");

    let total_charges = document.querySelector("#total-rs");
    let total = subtotal + parseInt(shipping_charges.innerHTML);
    total_charges.innerHTML = total;

}


// Billing
let pay = document.querySelector("#bill-pay");
let clickCount = 0;
pay.onclick = () => {
    let validation = formValidation();
    if (validation === true) {
        clickCount++;
        if (clickCount > 1) {
            alert("Please refresh the page and update the cart.");
        }
        else {
            let final_slip = document.querySelector(".order-done");
            final_slip.style.display = "block";

            let itemNames = document.querySelectorAll("#ItemName_inCart");

            let quantities = document.querySelectorAll("#quant-value");

            let prices = document.querySelectorAll("#foodprices_incart");

            for (let i = 0; i < itemNames.length; i++) {
                let itemName = itemNames[i].textContent; // or .innerText, depending on your structure
                let quantity = quantities[i].textContent; // or .innerText
                let price = prices[i].textContent;

                let target_loc = document.querySelector(".items-delivery");

                let newItem = document.createElement('p');
                let newQuantity = document.createElement('p');
                let newPrice = document.createElement('p');

                // Set content for the new elements
                newItem.textContent = itemName;
                newQuantity.textContent = quantity;
                newPrice.textContent = price;

                target_loc.appendChild(newItem);
                target_loc.appendChild(newQuantity);
                target_loc.appendChild(newPrice);
            }

            let bill_total = document.querySelector("#t-ack");
            let total = document.querySelector("#total-rs").textContent;
            bill_total.innerHTML = parseInt(total);

            let randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
            let ref_id = document.querySelector("#ref-id");
            ref_id.innerHTML = randomNumber;
            let billpage = document.querySelector(".billing");
            billpage.style.display = "none";
        }

    }
    return false;

}

function formValidation() {
    var name = document.querySelector("#fullname").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone-number").value;
    var address = document.querySelector("#fulladdress").value;
    var card = document.querySelector("#cardnumber").value;
    var yyyy = document.querySelector("#yyyy").value;
    var cvv = document.querySelector("#cvv").value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    var regPhone = /^\d{10}$/;

    var regName = /^[^\d\s]+$/;

    var regCard = /^\d{16}$/;
    var regYear = /^\d{4}$/;
    var regCvv = /^\d{3}$/;

    var returnselector = true;


    // Clear previous errors
    clearErrors();

    if (name == "" || regName.test(name)) {
        displayError("nameErr", "Please enter your name properly.");
        returnselector = false;
    }

    if (email == "" || !regEmail.test(email)) {
        displayError("emailErr", "Please enter a valid e-mail address.");
        returnselector = false;
    }

    if (phone == "" || !regPhone.test(phone)) {
        displayError("phoneErr", "Please enter a valid phone number.");
        returnselector = false;
    }

    if (address == "") {
        displayError("addressErr", "Please enter your address.");
        returnselector = false;
    }

    if (card == "" || !regCard.test(card)) {
        displayError("cardErr", "Please enter valid card number.");
        returnselector = false;
    }

    if (yyyy == "" || !regYear.test(yyyy)) {
        displayError("yearErr", "Please enter valid expiry year.");
        returnselector = false;
    }

    if (cvv == "" || !regCvv.test(cvv)) {
        displayError("cvvErr", "Please enter cvv.");
        returnselector = false;
    }


    // Return false to prevent form submission if there are errors
    return returnselector;
}

function displayError(errorId, errorMessage) {
    var errorContainer = document.querySelector("#" + errorId);
    errorContainer.innerHTML = errorMessage;
}

function clearErrors() {
    // Clear all error messages
    var errorContainers = document.querySelectorAll(".error");
    errorContainers.forEach(function (container) {
        container.innerHTML = "";
    });
}





var checkout = document.querySelector("#checkout");
checkout.onclick = () => {
    let billpage = document.querySelector(".billing");
    billpage.style.display = "block";
}

var closebill = document.querySelector("#closebill");
closebill.onclick = () => {
    let billpage = document.querySelector(".billing");
    billpage.style.display = "none";
}




let close_bill = document.querySelector("#ok-btn");
close_bill.onclick = () => {
    let bill = document.querySelector(".order-done");
    bill.style.display = "none";

    let cart_items_remove = document.querySelector(".cart-details");
    cart_items_remove.innerHTML = '';

    localStorage.setItem("selected_food", JSON.stringify([]));

    let cart_final_number = localStorage.getItem("cart-number");
    cart_final_number = 0;
    cartnumber.innerHTML = cart_final_number;
    localStorage.setItem("cart-number", cart_final_number);
}


