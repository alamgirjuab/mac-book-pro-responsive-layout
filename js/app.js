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
document.getElementById('8gb-memory').addEventListener('click', function () {
    const basicMemory = document.getElementById('extra-memory-price');
    basicMemory.innerText = 0;
    totalPrice();
})

document.getElementById('16gb-memory').addEventListener('click', function () {
    const basicMemory = document.getElementById('extra-memory-price');
    basicMemory.innerText = 180;
    totalPrice();
})

document.getElementById('256gb-storage').addEventListener('click', function () {
    const basicStorage = document.getElementById('extra-storage-price');
    basicStorage.innerText = 0;
    totalPrice();
})

document.getElementById('512gb-storage').addEventListener('click', function () {
    const basicStorage = document.getElementById('extra-storage-price');
    basicStorage.innerText = 100;
    totalPrice();
})

document.getElementById('1tb-storage').addEventListener('click', function () {
    const basicStorage = document.getElementById('extra-storage-price');
    basicStorage.innerText = 180;
    totalPrice();
})

document.getElementById('free-delivery').addEventListener('click', function () {
    const basicStorage = document.getElementById('premium-delivery-price');
    basicStorage.innerText = 0;
    totalPrice();
})

document.getElementById('premium-delivery').addEventListener('click', function () {
    const basicStorage = document.getElementById('premium-delivery-price');
    basicStorage.innerText = 20;
    totalPrice();
})

document.getElementById('promo-code-button').addEventListener('click', function () {
    const cuponText = document.getElementById('promo-code-input');
    if (cuponText.value == 'stevekaku') {
        const totalPriceText = document.getElementById('grand-total');
        const totalPrice = parseFloat(totalPriceText.innerText);
        const discount = (totalPrice * 20) / 100;
        const subTotal = totalPrice - discount;
        totalPriceText.innerText = subTotal;
    }
})