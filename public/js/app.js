document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Backpack", price: "₹2999.99", img: "images/img1.webp" },
        { id: 2, name: "Smart Watch", price: "₹1599.99", img: "images/img2.webp" },
        { id: 3, name: "Ear Buds", price: "₹1339.99", img: "images/img3.webp" },
        { id: 4, name: "Wallet", price: "₹799.99", img: "images/img4.webp" }
    ];

    const productList = document.getElementById("product-list");
    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid");
    productList.appendChild(productGrid);

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });

    // Add event listener to add to cart button
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the product details
            const product = button.parentNode;
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector("p").textContent;

            // Add the product to the cart
            const cart = document.querySelector(".cart");
            const cartCount = cart.querySelector(".cart-count");
            const cartCountValue = parseInt(cartCount.textContent);
            cartCount.textContent = cartCountValue + 1;

            // Display the product details in the cart
            const cartDetails = document.querySelector(".cart-details");
            if (!cartDetails) {
                const cartDetailsDiv = document.createElement("div");
                cartDetailsDiv.classList.add("cart-details");
                cart.appendChild(cartDetailsDiv);
            }
            const cartDetailsList = document.querySelector(".cart-details");
            const cartDetailsItem = document.createElement("p");
            cartDetailsItem.textContent = `${productName} - ${productPrice}`;
            cartDetailsList.appendChild(cartDetailsItem);
        });
    });
});
