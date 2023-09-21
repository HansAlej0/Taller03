// Obtener referencias a los elementos del DOM
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultadoDiv = document.getElementById("resultado");

// Eventos para los botones
piedraBtn.addEventListener("click", () => jugar("piedra"));
papelBtn.addEventListener("click", () => jugar("papel"));
tijerasBtn.addEventListener("click", () => jugar("tijeras"));

// Función para que la computadora elija una opción al azar
function obtenerOpcionComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

// Función para determinar el ganador
function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "Empate";
    } else if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "¡La computadora ganó!";
    }
}

// Función principal para jugar
function jugar(opcionJugador) {
    const opcionComputadora = obtenerOpcionComputadora();
    const resultado = determinarGanador(opcionJugador, opcionComputadora);

    resultadoDiv.textContent = `Elegiste ${opcionJugador}. La computadora eligió ${opcionComputadora}. ${resultado}`;
}
