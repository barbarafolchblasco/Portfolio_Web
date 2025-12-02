function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function() {
    
    const btnTop = document.getElementById("btn-top");

    if (btnTop) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                btnTop.classList.add("mostrar");
            } else {
                btnTop.classList.remove("mostrar");
            }
        });
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}