// Carousel Rotation for USP Section
let carouselItems = document.querySelectorAll('.usp-carousel-item');
let currentItemIndex = 0;

function rotateCarousel() {
    carouselItems[currentItemIndex].classList.remove('active');
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    carouselItems[currentItemIndex].classList.add('active');
}

setInterval(rotateCarousel, 3000); // Change every 3 seconds

// Color Selection for Product Pages
let colorButtons = document.querySelectorAll('.color-button');
let productImage = document.querySelector('.product-details img');

colorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let color = event.target.dataset.color;
        productImage.src = `images/${color}.png`; // Assuming images are named se03lite-red.png, se03lite-blue.png, se03lite-black.png etc.
    });
});
