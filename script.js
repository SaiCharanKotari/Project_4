let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let currentIndex = 0;
let interval;

// Create slide indicators (dots)
slides.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `goToSlide(${index})`);
    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

// Function to show a slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active-dot"));

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
    currentIndex = index;
}

// Next slide function
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Previous slide function
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Go to a specific slide
function goToSlide(index) {
    showSlide(index);
}

// Auto-slide function
function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

// Stop auto-slide on hover
document.querySelector(".slider").addEventListener("mouseenter", () => clearInterval(interval));
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

// Initialize the slider
showSlide(currentIndex);
startAutoSlide();
