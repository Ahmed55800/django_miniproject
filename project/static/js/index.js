// Sample product data
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Earbuds",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/51+5kU7RzhL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 2,
        title: "Smart Watch with Fitness Tracker",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61S0m+uR5TL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 3,
        title: "Portable External Hard Drive 1TB",
        price: 59.99,
        image: "https://m.media-amazon.com/images/I/61LBOD0WMYL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 4,
        title: "Wireless Charging Stand",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/61+Q6Rh5KIL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 5,
        title: "Noise Cancelling Headphones",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/61Cj6fGJ+4L._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 6,
        title: "4K Ultra HD Smart TV",
        price: 499.99,
        image: "https://m.media-amazon.com/images/I/71lrX2OjOIL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 7,
        title: "Gaming Laptop",
        price: 1299.99,
        image: "https://m.media-amazon.com/images/I/71S4sIPFvBL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 8,
        title: "Smartphone with Triple Camera",
        price: 699.99,
        image: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._AC_UL640_FMwebp_QL65_.jpg"
    }
];

// Shopping cart
let cart = [];

// Display products
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    alert(`${product.title} added to cart!`);
}

// Update cart count in navbar
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Add event listener to cart icon (could show a modal with cart items)
    document.querySelector('.nav-cart').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty');
        } else {
            const itemList = cart.map(item => 
                `${item.title} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
            ).join('\n');
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Your Cart:\n${itemList}\n\nTotal: $${total.toFixed(2)}`);
        }
    });
});