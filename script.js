if (typeof AOS !== "undefined") {
    AOS.init({ duration: 900, once: true });
}

// Plugin Typed.js: texto que se escribe solo en el banner
if (typeof Typed !== "undefined") {
    new Typed("#typed", {
        strings: ["Ingeniería de Software", "Desarrollo Web", "Bases de Datos", "Metodologías Ágiles"],
        typeSpeed: 60,
        backSpeed: 35,
        backDelay: 1500,
        loop: true
    });
} else {
    document.getElementById("typed").textContent = "Ingeniería de Software";
}

// Menú para celulares
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("abierto");
});

// Cerrar el menú al elegir una opción
document.querySelectorAll("#menu a").forEach((enlace) => {
    enlace.addEventListener("click", () => menu.classList.remove("abierto"));
});

console.log("¡Bienvenido/a al portafolio de Paola Taipe! ♡");
