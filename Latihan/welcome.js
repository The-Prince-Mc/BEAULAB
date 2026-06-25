const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("main-page");

enterBtn.addEventListener("click", () => {

    welcome.classList.add("fade-out");

    setTimeout(() => {

        welcome.style.display = "none";

        mainPage.style.display = "flex";

        requestAnimationFrame(() => {

            mainPage.classList.add("fade-in");

        });

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }, 800);

});

/* =====================
   SCROLL REVEAL
===================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

/* ====================
   GENERATE BINTANG
==================== */

for(let i = 0; i < 200; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 4 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (Math.random() * 5 + 2) + "s";

    star.style.animationDelay =
        (Math.random() * 5) + "s";

    stars.appendChild(star);
}

function scrollToSection(sectionId){

    const section = document.getElementById(sectionId);

    if(section){

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}