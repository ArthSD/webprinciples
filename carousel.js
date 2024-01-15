document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const items = document.querySelectorAll(".testimonial-carousel-item");
    const totalItems = items.length;

    // Initially show the first item
    items[currentIndex].classList.add("active");

    setInterval(() => {
        items[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add("active");
    }, 3000);
});