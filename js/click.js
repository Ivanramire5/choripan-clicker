
let contador = 0;
let nivel = 1; // Inicializa el nivel

const boton = document.getElementsByClassName("botonClick");

for (let i = 0; i < boton.length; i++) {
    boton[i].onclick = respuesta;
}

function respuesta() {
    contador++;
    const score = document.querySelector('.score');
    score.textContent = `Your Score: ${contador}`;

    // Actualiza el nivel solo cuando el contador alcanza un valor que indique un cambio de nivel
    if (contador === 25) {
        cambiarNombreNivel();
        nivel++; // Incrementa el nivel
        contador = 0; // Reinicia el contador si es necesario
    }
}


//Manipulamos una imagen

function cambiarNombreNivel() {
    const name = document.querySelector(".level");
    const contenedorChori = document.getElementsByClassName("imgChori")[0]; // Accede al primer elemento de la lista

    // Actualiza el texto del elemento .level basado en el nivel actual
    if (nivel === 1) {
        name.textContent = "Chori humilde";
    } else if (nivel === 2) {
        name.textContent = "Chori hecho en casa";
        contenedorChori.innerHTML = '<img src="./img/choriCiruja.png" alt="Chori ciruja">';
    } else if (nivel === 3) {
        name.textContent = "Chori de carrito";
        contenedorChori.innerHTML = '<img src="./img/choriDeCarrito.png" alt="Chori de carrito">';
    } else if (nivel === 4) {
        name.textContent = "Chori de cancha";
        contenedorChori.innerHTML = '<img src="./img/choriDeCancha.png" alt="Chori de cancha">';
    } else if (nivel === 5) {
        name.textContent = "Chori peronista";
        contenedorChori.innerHTML = '<img src="./img/choriPeronista.png" alt="Chori peronista">';
    } else if ( nivel === 6) {
        Swal.fire({
            title: '<h1 class="tituloSweetAlert">Game finished',
            text: "Congrats :)",
            icon: "success",
            background: '#FFF6E9'
        });
    }
}
