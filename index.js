let slides = document.getElementById("slides");
let slideIndex = 0;
let totalSlides = slides.children.length;
let slideWidth = 600; 

function showSlide(index) {
    if (index < 0) slideIndex = totalSlides - 1;
    else if (index >= totalSlides) slideIndex = 0;
    else slideIndex = index;

    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function goSlide(index) {
    showSlide(index);
}
