

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



/*function cambiarClases(buttonSelector, targetSelector, className) {
    const lista_items = document.querySelectorAll(buttonSelector);
    const targets = document.querySelectorAll(targetSelector);
    
    lista_items.forEach(button => {
        button.addEventListener('click', () => {
            targets.forEach(target => {
                target.classList.toggle(className);
            });
        });
    });
}
cambiarClases("#darkMode", ".Body-faq", "open");*/











