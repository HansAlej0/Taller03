function calcularIMC() {
    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (nombre === "" || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, completa todos los campos con valores validos");
        return;
    }

    const imc = peso / (altura * altura);
    let mensaje = "";

    if (peso < 18.5) {
        mensaje = "Bajo peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = "Peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        mensaje = "Sobrepeso.";
    } else {
        mensaje = "Obesidad";
    }

    alert(`${nombre}, tu IMC es ${imc.toFixed(2)} - ${mensaje}`);
}
