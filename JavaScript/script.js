// 1. Declarar variables y cosntantes
const headers = document.querySelectorAll(".acordeon-header");
const items = document.querySelectorAll(".acordeon-item");


// 2. Crear funciones y listeners
// a.) Pasar por todas las cabezeras,agregarles un click y agregar active al que le haga click
headers.forEach((header) => {

    header.addEventListener("click", () => {
        const item = header.closest(".acordeon-item");

        //quitar el active de todos
        items.forEach(elemento => {
            elemento.classList.remove("active");
        });

        //agregar el active a item
        item.classList.toggle("active");

    });
});







//3. Ejecutar nuestros programa

//hacer click en nuestro primer elemento
headers[0].click();
