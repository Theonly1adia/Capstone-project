




let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function clearCart() {
    cart = [];
    total = 0;
    displayCart();
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; 
    
    
    for(let i=0; i<cart.length; i++){
        item = cart[i];

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.product} - $${item.price}</p>
            <button onclick="removeFromCart(${i})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);

    };
        
    
    
    document.getElementById('total').innerText = total;
}
