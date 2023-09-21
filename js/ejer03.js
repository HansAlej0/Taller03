// Generar un número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function comprobarAdivina() {
    const adivinar = parseInt(document.getElementById("adivinar").value);

    if (isNaN(adivinar) || adivinar < 1 || adivinar > 100) {
        alert("Por favor, ingresa un numero entre 1 y 100");
        return;
    }

    intentos++;

    if (adivinar === numeroAleatorio) {
        const mensaje = `¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`;
        alert(mensaje);
        reiniciarJuego();
    } else if (adivinar < numeroAleatorio) {
        document.getElementById("mensaje").textContent = "Mas alto";
    } else {
        document.getElementById("mensaje").textContent = "Mas bajo";
    }

    document.getElementById("adivinar").value = "";
}

function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random * 100) + 1;
    intentos = 0;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("adivinar").value = "";
}
