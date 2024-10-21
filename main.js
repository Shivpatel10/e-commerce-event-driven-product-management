//Task 2: Add event Listeners for Product Selection
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
const formResponse = document.getElementById("for,-reponse");

sizeSelector.addEventListener("change" , (event) => {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`
})


//Task 3: Handle Stock Availability
let availableStock = [10, 8, 12, 0]

if (sizeSelector.availableStock > 0) { // if stock is above ) from availableStock array then the purchase will go through
        formResponse.textContent = "Thank you for your purchas e!"
    } else { 
        formResponse.textContent = "Please select another size!"
      }