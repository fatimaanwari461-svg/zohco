const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {
  navbar.classList.toggle("active");

});

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {

    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");
    const arrow = item.querySelector(".arrow");

    button.addEventListener("click", () => {

      
        items.forEach(other => {
            if (other !== item) {
                other.querySelector(".accordion-content").style.display = "none";
                other.querySelector(".arrow").textContent = "⌄";
            }
        });

        
        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.textContent = "⌄";
        } else {
            content.style.display = "block";
            arrow.textContent = "⌃";
        }
    });

});


const men = document.querySelector(".men");

const men1 = document.querySelectorAll(".men1");

const next = document.getElementById("next");

const prev = document.getElementById("prev");


// Current card

let current = 0;


// Total cards

const totalSlides = men1.length;


// Show card

function showSlide() {

    const slideWidth = men.clientWidth;

    men.scrollTo({

        left: current * slideWidth,

        behavior: "smooth"

    });

}


// NEXT BUTTON

next.addEventListener("click", function () {

    current++;

    if (current >= totalSlides) {

        current = 0;

    }

    showSlide();

});


// PREVIOUS BUTTON

prev.addEventListener("click", function () {

    current--;

    if (current < 0) {

        current = totalSlides - 1;

    }

    showSlide();

});


// CLICK ON IMAGE

men1.forEach(function (card) {

    const image = card.querySelector("img");

    image.addEventListener("click", function () {

        current++;

        if (current >= totalSlides) {

            current = 0;

        }

        showSlide();

    });

});

men.addEventListener("scroll", function () {

    const slideWidth = men.clientWidth;

    current = Math.round(men.scrollLeft / slideWidth);

});