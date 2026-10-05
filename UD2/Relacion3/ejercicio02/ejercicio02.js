let valor1 = prompt("Introduce el primer número:");
let valor2 = prompt("Introduce el segundo número:");

let numero1 = Number(valor1);
let numero2 = Number(valor2);

if (valor1.trim() === "" || valor2.trim() === "" ||
    isNaN(numero1) || isNaN(numero2) || numero1 === 0 || numero2 === 0) {
    alert("Error: introduce dos números válidos y distintos de cero.");
} else if (numero1 === numero2) {
    alert("Los dos números son iguales.");
} else if (numero1 > numero2) {
    alert("El primer número es mayor que el segundo.");
} else {
    alert("El segundo número es mayor que el primero.");
}
