let secreto = Math.floor(Math.random() * 10) + 1;
let intento = Number(prompt("Adivina el número del 1 al 10:"));

while (intento !== secreto) {
    if (intento < secreto) {
        alert("El número secreto es mayor.");
    } else {
        alert("El número secreto es menor.");
    }

    intento = Number(prompt("Prueba otra vez:"));
}

alert("¡Has acertado!");
