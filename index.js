let index = 0;
let slides = document.getElementById("slides");
let dots = document.querySelectorAll(".dot");

function showSlide(i){
    index = i;
    if(index >= dots.length) index = 0;
    if(index < 0) index = dots.length - 1;

    slides.style.transform = `translateX(${-600 * index}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide(){
    showSlide(index + 1);
}

function prevSlide(){
    showSlide(index - 1);
}

function goSlide(i){
    showSlide(i);
}


setInterval(() => {
    nextSlide();
}, 3000);