//Task 2: Add event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector")

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
})


//Task 3: Handle Stock Availability
let availableStock = [10, 8, 12, 20]