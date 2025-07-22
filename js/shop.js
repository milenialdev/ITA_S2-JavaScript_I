// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
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
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
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

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    const findProduct = products.find(product => product.id === id);
    //validation in case the item doesn't exist (the activity does not expect it)
    const emptyCart = cart.find(item => item.id === id)
    // 2. Add found product to the cart array
    !emptyCart ? cart.push({...findProduct, quantity: 1}) : emptyCart.quantity++;
}

// Exercise 2
const cleanCart = () =>  {
    cart.length = 0;
}

// Exercise 3
const calculateTotal = () =>  {
    let count = 0
    cart.forEach(item => {
        item.subtotalWithDiscount != undefined ? count += item.subtotalWithDiscount : count += item.price*item.quantity
    })
    return count;
}


// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    cart.forEach(item =>{
        if(item.id === 1){
            item.quantity >= 3 ? item.subtotalWithDiscount = item.quantity * (item.price * 0.8) : delete item.subtotalWithDiscount
        } else if (item.id === 3){
            item.quantity >= 10 ? item.subtotalWithDiscount = item.quantity * (item.price * 0.7) : delete item.subtotalWithDiscount
        } else {
            delete item.subtotalWithDiscount;
        }
    } )
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}