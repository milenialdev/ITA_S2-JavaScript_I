// Activar botones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-product-id'));
            buy(id);
            applyPromotionsCart();
            printCart();
            updateCartCount();
        });
    });

    const cleanBtn = document.getElementById('clean-cart');
    if (cleanBtn) {
        cleanBtn.addEventListener('click', () => {
            cleanCart();
            applyPromotionsCart();
            printCart();
            updateCartCount();
        });
    }
});

// Para eliminar productos, añade un botón en cada fila del carrito (printCart)
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

function updateCartCount() {
    const countSpan = document.getElementById('count_product');
    if (countSpan) {
        let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        countSpan.textContent = totalItems;
    }
}

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
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const discount = product.offer ? product.offer.percent : 0;
        if (item.id === 1) {
            if (item.quantity >= 3) {
                item.subtotalWithDiscount = item.quantity * (item.price - (item.price * (discount / 100)));
            } else {
                delete item.subtotalWithDiscount;
            }
        } else if (item.id === 3) {
            if (item.quantity >= 10) {
                item.subtotalWithDiscount = item.quantity * (item.price - (item.price * (discount / 100)));
            } else {
                delete item.subtotalWithDiscount;
            }
        } else {
            delete item.subtotalWithDiscount;
        }
    });
}

// Exercise 5

const printCart = () => {
    const cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";

    if (cart.length === 0) {
        // Mostrar mensaje de carrito vacío
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.className = "text-center text-muted";
        cell.textContent = "Your cart is empty.";
        row.appendChild(cell);
        cartList.appendChild(row);
    } else {
        cart.forEach(item => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("th");
            nameCell.scope = "row";
            nameCell.textContent = item.name;

            const priceCell = document.createElement("td");
            priceCell.textContent = `$${item.price}`;

            const quantityCell = document.createElement("td");
            quantityCell.textContent = item.quantity;

            const totalCell = document.createElement("td");
            const total = item.subtotalWithDiscount !== undefined
                ? item.subtotalWithDiscount
                : item.price * item.quantity;
            totalCell.textContent = `$${total.toFixed(2)}`;

            // Botón para eliminar una unidad
            const removeCell = document.createElement("td");
            const removeBtn = document.createElement("button");
            removeBtn.className = "btn btn-danger btn-sm";
            removeBtn.textContent = "-";
            removeBtn.title = "Remove one";
            removeBtn.addEventListener('click', () => {
                removeFromCart(item.id);
            });
            removeCell.appendChild(removeBtn);

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell);
            row.appendChild(totalCell);
            row.appendChild(removeCell);

            cartList.appendChild(row);
        });
    }
    document.getElementById("total_price").textContent = calculateTotal().toFixed(2);
    updateCartCount();
}

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {
    // Buscar el producto en el carrito
    const item = cart.find(product => product.id === id);
    if (!item) return; // Si no está, no hacemos nada

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        // Si la cantidad es 1, eliminar el producto del carrito
        const index = cart.findIndex(product => product.id === id);
        if (index !== -1) cart.splice(index, 1);
    }
    // Actualizar promociones
    applyPromotionsCart();
    // Actualizar vista del carrito si es necesario
    if (typeof printCart === 'function') printCart();
}

const open_modal = () =>  {
    printCart();
}