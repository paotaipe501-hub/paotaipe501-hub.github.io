
const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

secciones.forEach((seccion) => {
    observador.observe(seccion);
});

// Mensaje de bienvenida en la consola
console.log("¡Bienvenido/a al portafolio de Paola Taipe! ♡");
