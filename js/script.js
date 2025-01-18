

// Declaro las varibales
const preguntas = document.querySelectorAll('.Container-pregunta');
const darkMode = document.getElementById('#darkMode');


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

// Seleccionar el botón

// Añadir un event listener al botón
darkMode.addEventListener('click', () => {
    // Alternar la clase 'light-mode' en el cuerpo del documento
    document.body.classList.toggle('light-mode');
});












