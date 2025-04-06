

//Acordeon

// Declaro las varibales
const preguntas = document.querySelectorAll('.Container-pregunta');



preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {

        const respuesta = pregunta.nextElementSibling; // Encuentra el contenedor de la respuesta asociada

        // Existe el contenedor de la respuesta?
        if (respuesta && respuesta.classList.contains('Container-respuesta')) {

            // Quitar la clase 'visible' de todas las respuestas
            // Si la respuesta es estrictamente desigual
            document.querySelectorAll('Container-respuesta').forEach(res => {
                if (res !== respuesta) {
                    res.classList.remove('visible');
                }
            });


            respuesta.classList.toggle('visible');//AGrega la clase 'visible' con toggle
        }
    });
});







// Button Dark mode
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica si el usuario ya tiene una preferencia de tema guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleBtn.textContent = 'Modo Claro';
        }
    }

    // Función para cambiar el tema
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggleBtn.textContent = '';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggleBtn.textContent = '';
        }
    });
});






//Carousel Slider

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#news-carousel");
    if (!carousel) return;

    let slides = carousel.querySelectorAll(".Main-li");
    let interval;

    function highlightCenterSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active-slide"); // Quita la clase de todos
            slide.classList.add("inactive-slide"); // Agrega la clase de opacidad a todos
        });
        slides[2].classList.add("active-slide"); // Hace que el del centro destaque
        slides[2].classList.remove("inactive-slide"); // Quita la opacidad al central
    }

    function moveCarousel() {
        carousel.style.transition = "transform 1s ease-in-out";
        carousel.style.transform = `translateX(${-slides[0].offsetWidth}px)`;

        setTimeout(() => {
            let firstSlide = carousel.firstElementChild;
            carousel.appendChild(firstSlide);
            carousel.style.transition = "ease-in-out 1s";
            carousel.style.transform = "translateX(0)";
            slides = carousel.querySelectorAll(".Main-li"); // Reasigna los slides
            highlightCenterSlide(); // Destacar el nuevo slide central
        }, 800);
    }

    function startCarousel() {
        clearInterval(interval);
        interval = setInterval(moveCarousel, 4000);
    }

    // Detener el carrusel al pasar el mouse
    carousel.addEventListener("mouseenter", () => clearInterval(interval));
    carousel.addEventListener("mouseleave", startCarousel);

    // Estilos iniciales
    carousel.style.display = "flex";
    carousel.style.overflow = "visible";

    highlightCenterSlide();
    startCarousel();
});













