let cart = [];
let total = 0;

// Function to handle adding a product to the cart
function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    
    cartElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ₹${item.price}`;
        cartElement.appendChild(li);
    });
    
    totalElement.textContent = total;
}

// Function to handle the form submission
function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // You can perform further processing here, such as sending the order details to a server.
    // For now, let's just log the details.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // You can also clear the form fields after submission if needed.
    document.getElementById('order-form').reset();
}

// Function to handle the form submission
function submitOrder() {
    const cname = document.getElementById('cname').value;
    const caddress = document.getElementById('caddress').value;
    const cphone = document.getElementById('cphone').value;

    // Get selected product details
    const selectedProduct = document.getElementById('cproduct').value;
    let productPrice = 0;
    switch (selectedProduct) {
        case 'Urea Fertilizer':
            productPrice = 320;
            break;
        case 'Potash Fertilizer':
            productPrice = 825;
            break;
        case 'Phosphate Fertilizer':
            productPrice = 630;
            break;
        case 'D.A.P Fertilizer':
            productPrice = 1500;
            break;
        default:
            productPrice = 0;
    }

    // Add customer details to the left side of the order
    const customerDetails = {
        Name: cname,
        Address: caddress,
        Phone: cphone
    };

    // Add selected product to the cart
    addToCart(selectedProduct, productPrice);

    // Open new window with order details
    const orderDetailsWindow = window.open('', 'Order Details', 'width=600,height=400');
    orderDetailsWindow.document.write(`<html><head><title>Order Details</title><link rel="stylesheet" href="styles.css"></head><body><h1>Order Details</h1><p><strong>Customer Details:</strong></p><p>Name: ${cname}</p><p>Address: ${caddress}</p><p>Phone: ${cphone}</p><p><strong>Products:</strong></p><ul>`);
    cart.forEach(item => {
        orderDetailsWindow.document.write(`<li>${item.product} - ₹${item.price}</li>`);
    });
    orderDetailsWindow.document.write(`</ul><p><strong>Total:</strong> ₹${total.toFixed(2)}</p><p>Please Visit again</p></body></html>`);
}
// Function to handle the form submission
function submitOrder() {
    // Get customer details
    const cname = document.getElementById('cname').value;
    const caddress = document.getElementById('caddress').value;
    const cphone = document.getElementById('cphone').value;

    // Add customer details to the left side of the order
    const customerDetails = {
        Name: cname,
        Address: caddress,
        Phone: cphone
    };

    // Open new window with order details
    const orderDetails = document.getElementById('order-details');
    orderDetails.innerHTML = `<p><strong>Customer Details:</strong></p>
                               <p>Name: ${cname}</p>
                               <p>Address: ${caddress}</p>
                               <p>Phone: ${cphone}</p>
                               <p><strong>Order:</strong></p>
                               <ul>`;

    // Add products to the order details
    cart.forEach(item => {
        orderDetails.innerHTML += `<li>${item.product} - ₹${item.price}</li>`;
    });

    // Add total price to the order details
    orderDetails.innerHTML += `<p><strong>Total:</strong> ₹${total.toFixed(2)}</p>`;
    orderDetails.innerHTML += `<p>Please Visit again</p>`;
}
