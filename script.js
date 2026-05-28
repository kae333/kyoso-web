const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});


sections.forEach((section) => {

    observer.observe(section);

});
const openButton =
document.getElementById("openMapButton");

const closeButton =
document.getElementById("closeButton");

const overlay =
document.getElementById("overlay");

openButton.addEventListener("click", () => {

overlay.classList.add("show");

});

closeButton.addEventListener("click", () => {
overlay.classList.remove("show");


});
console.log("button works");
