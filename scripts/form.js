const products = [
    { name: "Product 1", value: "product1" },
    { name: "Product 2", value: "product2" },
    { name: "Product 3", value: "product3" },
    { name: "Product 4", value: "product4" }
];

// Function to dynamically populate the product dropdown
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-name');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.value;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
// Dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
