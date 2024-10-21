//Task 2: Add event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
const purchaseButton = document.getElementById("purchase-button");
const inventoryCount = document.getElementById("inventory-count");

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
})


//Task 3: Handle Stock Availability
let availableStock = {
    "Small": 10, //in stock
    "Medium": 8, //in stock
    "Large": 5,  //in stock
    "XL": 0      //out of stock
};


purchaseButton.addEventListener("click", () => {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex].text;

    // Check if the selected size is in stock and handle the purchase
    if (selectedOption.includes("Out of Stock")) {
        alert("Sorry, this product is out of stock and can't be purchased.");
    } else {
        alert("Thank you for your purchase!");
    }
});

