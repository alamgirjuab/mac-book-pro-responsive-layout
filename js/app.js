// Input function from category button to invoice

function inputPrice(number, is1tbMemory, isFreeDelivery) {
    const memoryCostArea = document.getElementById('extra-memory-price');
    const storageCostArea = document.getElementById('extra-storage-price');
    const deliveryCostArea = document.getElementById('premium-delivery-price');
    if (number == 0 && is1tbMemory == false && isFreeDelivery == false) {
        memoryCostArea.innerText = 0;
    }
    if (number == 180 && is1tbMemory == false && isFreeDelivery == false) {
        memoryCostArea.innerText = 180;
    }
    if (number == 0 && is1tbMemory == true && isFreeDelivery == false) {
        storageCostArea.innerText = 0;
    }
    if (number == 100 && is1tbMemory == true && isFreeDelivery == false) {
        storageCostArea.innerText = 100;
    }
    if (number == 180 && is1tbMemory == true && isFreeDelivery == false) {
        storageCostArea.innerText = 180;
    }
    if (number == 0 && is1tbMemory == false && isFreeDelivery == true) {
        deliveryCostArea.innerText = 0;
    }
    if (number == 20 && is1tbMemory == false && isFreeDelivery == false) {
        deliveryCostArea.innerText = 20;
    }
}

// Total Price Calculation function

function totalPrice() {
    const bestPriceText = document.getElementById('normal-price');
    const bestPrice = parseInt(bestPriceText.innerText);
    const basicMemory = document.getElementById('extra-memory-price');
    const memoryPrice = parseInt(basicMemory.innerText);
    const storagePriceText = document.getElementById('extra-storage-price');
    const storagePrice = parseInt(storagePriceText.innerText);
    const deliveryPriceText = document.getElementById('premium-delivery-price');
    const deliveryPrice = parseInt(deliveryPriceText.innerText);
    const totalPriceText = document.getElementById('total-price');
    const total = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPriceText.innerText = total;

    // Updating Total Price Area
    const footerTotalPrice = document.getElementById('grand-total');
    footerTotalPrice.innerText = total;

}

// All button click event
document.getElementById('8gb-memory').addEventListener('click', function () {
    inputPrice(0, false, false);
    totalPrice();
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    inputPrice(180, false, false);
    totalPrice();
})

document.getElementById('256gb-storage').addEventListener('click', function () {
    inputPrice(0, true, false);
    totalPrice();
})

document.getElementById('512gb-storage').addEventListener('click', function () {
    inputPrice(100, true, false);
    totalPrice();
})

document.getElementById('1tb-storage').addEventListener('click', function () {
    inputPrice(180, true, false);
    totalPrice();
})

document.getElementById('free-delivery').addEventListener('click', function () {
    inputPrice(0, false, true);
    totalPrice();
})

document.getElementById('premium-delivery').addEventListener('click', function () {
    inputPrice(20, false, false);
    totalPrice();
})

// Promo Code validation condition
document.getElementById('promo-code-button').addEventListener('click', function () {
    const cuponText = document.getElementById('promo-code-input');
    const subTotal = document.getElementById('total-price');
    const totalPriceText = document.getElementById('grand-total');
    if (cuponText.value == 'stevekaku' && subTotal.innerText == totalPriceText.innerText) {
        const totalPrice = parseFloat(totalPriceText.innerText);
        const discount = (totalPrice * 20) / 100;
        const subTotal = totalPrice - discount;
        totalPriceText.innerText = subTotal;
        cuponText.value = '';
    }
    else {
        cuponText.value = '';
    }
})