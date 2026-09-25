
/* BOTON PARA CARGAR LA COLECCION */

const botonCargar = document.getElementById("boton-cargar");

function cargarTarjetas() {

    fetch("js/datos.json")
    .then(res => res.json())
    .then(datos => {

        let contenedor = document.getElementById("coleccion");
        let htmlAcumulado = "";

        datos.forEach(item => {

            htmlAcumulado += `<div class="tarjeta">`;

            htmlAcumulado += `<div class="titulo-tarjeta">`;
            htmlAcumulado += `<h2>${item.nombre}</h2>`;
            htmlAcumulado += `</div>`;

            htmlAcumulado += `<div class="cuerpo-tarjeta">`;
            htmlAcumulado += `<h3>${item.diseñador}</h3>`; 
            htmlAcumulado += `<h4>${item.año}</h4>`;
            htmlAcumulado += `</div>`;

            htmlAcumulado += `<div class="texto-tarjeta">`;
            htmlAcumulado += `<p>${item.descripción}</p>`;
            htmlAcumulado += `<p class="materiales"><strong>Materiales:</strong> ${item.materiales}</p>`;
            htmlAcumulado += `</div>`;

            htmlAcumulado += `</div>`;

        });

        contenedor.innerHTML = htmlAcumulado;

    });

}

botonCargar.addEventListener("click", cargarTarjetas);

/* BOTON PARA CAMBIAR TEMA A OSCURO */

const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});