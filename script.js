function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* ==== BOTÓ TORNAR A DALT ==== */
document.addEventListener("DOMContentLoaded", function () {

    const btnTop = document.getElementById("btn-top");

    if (btnTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                btnTop.classList.add("mostrar");
            } else {
                btnTop.classList.remove("mostrar");
            }
        });
    }

    /* ==== CURSOR ==== */
    const cursor = document.querySelector('.custom-cursor');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






