// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
/*
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            cartList.push(products[i]);
        }
    }
    console.log("cartList -->", cartList)

}*/

// Exercise 2

function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].type === 'grocery') {
            subtotal.grocery.value += cart[i].subtotal;
        }
        else if (cart[i].type === 'beauty') {
            subtotal.beauty.value += cart[i].subtotal;
        }
        else {
            subtotal.clothes.value += cart[i].subtotal;
        }
    }
    console.log('calculateSubtotals -> ', subtotal);
}

// Exercise 4
function calculateTotal() {
    total = 0;
    // Calculate total price of the cart either using the "cartList" array
    for (let x in subtotal) {
        total += (subtotal[x].value - subtotal[x].discount);
    }
    console.log('calculateTotal -> ', total)

}

// Exercise 5
/*
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];

    for (let i = 0; i < cartList.length; i++) {

        if (cart.includes(cartList[i]) == false) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price
            cartList[i].subtotalWithDiscount = null;
            cart.push(cartList[i]);
        }
        else {
            for (let k = 0; k < cart.length; k++) {
                if (cartList[i].id == cart[k].id) {
                    cart[k].quantity++;
                    cart[k].subtotal += cartList[i].price;
                }
            }
        }
    }
    console.log("cart -->", cart)

}
*/

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let dis1 = 0, dis2 = 0;
    for (i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            cart[i].quantity >= 3 ? cart[i].subtotalWithDiscount = (10 * cart[i].quantity) : cart[i].subtotalWithDiscount = cart[i].subtotal;
            dis1 = cart[i].subtotal - cart[i].subtotalWithDiscount
        }
        else if (cart[i].id == 3) {
            cart[i].quantity >= 10 ? cart[i].subtotalWithDiscount = Math.round(((cart[i].quantity * cart[i].price) / 3 * 2) * 100) / 100 : cart[i].subtotalWithDiscount = cart[i].subtotal;
            dis2 = cart[i].subtotal - cart[i].subtotalWithDiscount
        }

    }
    subtotal.grocery.discount = Math.round((dis1 + dis2) * 100) / 100;
    console.log("applyPromotionsCart --> ", cart)
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            if (cart.includes(products[i]) == false) {
                products[i].quantity = 1;
                products[i].subtotal = products[i].price
                products[i].subtotalWithDiscount = null;
                cart.push(products[i]);
            }
            else {
                for (let k = 0; k < cart.length; k++) {
                    if (products[i].id == cart[k].id) {
                        cart[k].quantity++;
                        cart[k].subtotal += products[i].price;
                    }
                }
            }
        }
    }
    console.log(cart)
    calculateSubtotals();
    applyPromotionsCart();
    calculateTotal();
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart mmmmmmgggrrrh       
    // 2. Add found product to the cartList array mmmmmmmmggghhr

    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            if (cart.includes(products[i]) == false) {
                alert("nothing here")
            }
            else {
                for (let k = 0; k < cart.length; k++) {

                    if (products[i].id == cart[k].id) {
                        cart[k].quantity--;
                        cart[k].subtotal -= products[i].price;
                        if (cart[k].quantity < 1) {
                            cart.splice(k, 1)
                        }
                    }
                }
            }
        }
    }
    console.log(cart)
    calculateSubtotals();
    applyPromotionsCart();
    calculateTotal();
    printCart()
}

// Exercise 10


const list = document.getElementById("list")
const totalCart = document.getElementById("totalCart")

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    list.innerHTML = "";
    for (i = 0; i < cart.length; i++) {
        const itemList = document.createElement("li");
        itemList.className= "itemList";

        const name = document.createElement("span");
        // name.className ="spanCart"; para crear una clase
        name.textContent = cart[i].name;
        itemList.appendChild(name)

        const price = document.createElement("div");
        price.className ="priceList"
        price.textContent ="Price: €"+ cart[i].price;
        itemList.appendChild(price)

        if ((cart[i].id == 1) || (cart[i].id == 3)){
            const discount = document.createElement("div");
            discount.className ="discountList"
            discount.textContent ="Discount: €"+ (cart[i].subtotal - cart[i].subtotalWithDiscount);
            itemList.appendChild(discount)
        }


        const subtotal = document.createElement("div");
        subtotal.className ="subtotalList"
        subtotal.textContent ="Subtotal: €"+ (cart[i].subtotal);
        itemList.appendChild(subtotal)


        totalCart.textContent= "Total: € "+ total;
        itemList.appendChild(totalCart)


        list.appendChild(itemList)
    }
}



















//     if(cart.length>0){ 
//            for(i = 0; i<cart.length; i++){
//         if (cart[i].id == 1){
//             cookingOil.style.display="list-item";
//         }   
//         else{
//             cookingOil.style.display="none";
//         }
//     }}
//     else{
//         cookingOil.style.display="none";
//     }

// }



// Exercise 3
/*
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
   subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].type === 'grocery') {
            subtotal.grocery.value += cart[i].price;
        }
        else if (cart[i].type === 'beauty') {
            subtotal.beauty.value += cart[i].price;
        }
        else {
            subtotal.clothes.value += cart[i].price;
        }
    }
    console.log('calculateSubtotals -> ', subtotal);
}*/
/* This one works for Exercise 3

function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].type === 'grocery') {
            subtotal.grocery.value += cart[i].price*cart[i].quantity;
        }
        else if (cart[i].type === 'beauty') {
            subtotal.beauty.value += cart[i].price*cart[i].quantity;
        }
        else {
            subtotal.clothes.value += cart[i].price*cart[i].quantity;
        }
    }
    console.log('calculateSubtotals -> ', subtotal);
}
*/