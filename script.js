
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