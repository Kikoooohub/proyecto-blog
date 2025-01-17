

// Selecciona todas las preguntas
const preguntas = document.querySelectorAll('.Container-pregunta');

// Itera sobre cada pregunta para agregar un evento de clic
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        // Encuentra el contenedor de la respuesta asociada
        const respuesta = pregunta.nextElementSibling;

        // Comprobamos si la respuesta existe (es decir, si nextElementSibling no es null)
        if (respuesta && respuesta.classList.contains('Container-respuesta')) {

            // Quitar la clase 'visible' de todas las respuestas
            document.querySelectorAll('.Container-respuesta').forEach(res => {
                if (res !== respuesta) {
                    res.classList.remove('visible');
                }
            });

            // Alterna la visibilidad de la respuesta clicada
            respuesta.classList.toggle('visible');
        }
    });
});












