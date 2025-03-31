

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



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".Main-ul");
    const slides = document.querySelectorAll(".Main-li");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Clone first slide and append it to the end for seamless transition
    const firstClone = slides[0].cloneNode(true);
    carousel.appendChild(firstClone);

    function moveCarousel() {
        currentIndex++;
        carousel.style.transition = "transform 0.8s ease-in-out";
        carousel.style.transform = `translateX(${-currentIndex * slides[0].offsetWidth}px)`;
        
        // Reset transition for seamless looping
        if (currentIndex === totalSlides) {
            setTimeout(() => {
                carousel.style.transition = "none";
                carousel.style.transform = "translateX(0px)";
                currentIndex = 0;
            }, 800);
        }
    }

    function startCarousel() {
        setInterval(moveCarousel, 4000); // Change slide every 4 seconds
    }

    // Initial styles for smooth transition
    carousel.style.display = "flex";
    carousel.style.transition = "transform 0.8s ease-in-out";

    startCarousel();
});











