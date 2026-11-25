
function irAPantalla(idPantalla) {
    let inicio = document.getElementById("pantalla-inicio");
    let envases = document.getElementById("pantalla-envases");
    let sabores = document.getElementById("pantalla-sabores");

    if (inicio) inicio.classList.add("oculta");
    if (envases) envases.classList.add("oculta");
    if (sabores) sabores.classList.add("oculta");

    let destino = document.getElementById(idPantalla);
    if (destino) destino.classList.remove("oculta");
}

function animarYCambiar(elemento, envase) {
    localStorage.setItem("envase", envase);

    elemento.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.9)" },
            { transform: "scale(1)" }
        ],
        200
    );

    setTimeout(function () {
        irAPantalla("pantalla-sabores");
    }, 200);
}