// Sample product data
const products = [
    {
        id: 1,
        name: "iPhone 13 Pro",
        price: 999.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "The latest iPhone with advanced camera system and A15 Bionic chip.",
        rating: 4.8,
        reviews: 1250
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 799.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Powerful Android smartphone with stunning display and camera.",
        rating: 4.6,
        reviews: 980
    },
    {
        id: 3,
        name: "Sony WH-1000XM4",
        price: 349.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Industry-leading noise cancelling headphones with exceptional sound quality.",
        rating: 4.7,
        reviews: 750
    },
    {
        id: 4,
        name: "Men's Casual Shirt",
        price: 49.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Comfortable and stylish casual shirt for everyday wear.",
        rating: 4.5,
        reviews: 320
    },
    {
        id: 5,
        name: "Women's Summer Dress",
        price: 59.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Light and breezy summer dress perfect for warm days.",
        rating: 4.4,
        reviews: 280
    },
    {
        id: 6,
        name: "Leather Wallet",
        price: 39.99,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Premium leather wallet with multiple card slots.",
        rating: 4.3,
        reviews: 150
    },
    {
        id: 7,
        name: "Smart LED TV",
        price: 699.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "55-inch 4K Smart TV with HDR and built-in streaming apps.",
        rating: 4.7,
        reviews: 420
    },
    {
        id: 8,
        name: "Wireless Keyboard",
        price: 79.99,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Ergonomic wireless keyboard with backlit keys.",
        rating: 4.4,
        reviews: 180
    },
    {
        id: 9,
        name: "Coffee Maker",
        price: 89.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Programmable coffee maker with thermal carafe.",
        rating: 4.6,
        reviews: 310
    },
    {
        id: 10,
        name: "Throw Pillow",
        price: 24.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Soft and decorative throw pillow for your living space.",
        rating: 4.2,
        reviews: 95
    },
    {
        id: 11,
        name: "Desk Lamp",
        price: 49.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Adjustable LED desk lamp with multiple brightness levels.",
        rating: 4.5,
        reviews: 210
    },
    {
        id: 12,
        name: "Plant Pot",
        price: 19.99,
        category: "home",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Modern ceramic plant pot for indoor plants.",
        rating: 4.3,
        reviews: 140
    }
];

// Categories data
const categories = [
    {
        id: 1,
        name: "Electronics",
        icon: "fa-laptop",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Fashion",
        icon: "fa-tshirt",
        image: "https://images.unsplash.com/photo-1444012236767-1b471c68781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Home & Living",
        icon: "fa-home",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// Special deals data
const specialDeals = [
    {
        id: 1,
        name: "Black Friday Sale",
        discount: "50% OFF",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        endDate: "2023-11-25"
    },
    {
        id: 2,
        name: "Cyber Monday",
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        endDate: "2023-11-28"
    },
    {
        id: 3,
        name: "Holiday Special",
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        endDate: "2023-12-25"
    }
];

// Cart functionality
let cart = [];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const categoryGrid = document.getElementById('categoryGrid');
const dealsGrid = document.getElementById('dealsGrid');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const closeModal = document.querySelector('.close-modal');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('.search-box input');

// Display categories
function displayCategories() {
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="filterProducts('${category.id}')">
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
        </div>
    `).join('');
}

// Display products
function displayProducts(filteredProducts = products) {
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300?text=No+Image'"
                     loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${Array(5).fill().map((_, i) => `
                        <i class="fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}"></i>
                    `).join('')}
                    <span>(${product.reviews})</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Display deals
function displayDeals() {
    dealsGrid.innerHTML = specialDeals.map(deal => `
        <div class="deal-card">
            <img src="${deal.image}" alt="${deal.name}" class="product-image">
            <div class="deal-badge">${deal.discount}</div>
            <div class="deal-info">
                <h3 class="deal-title">${deal.name}</h3>
                <p class="deal-end">Ends: ${new Date(deal.endDate).toLocaleDateString()}</p>
                <button class="shop-now-btn">Shop Now</button>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
    
    // Update active filter button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Search products
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCart();
    showNotification('Product added to cart!');
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Event Listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.dataset.category);
    });
});

searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
});

// Initialize
displayCategories();
displayProducts();
displayDeals();
updateCart();

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 