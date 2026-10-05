let numero = Number(prompt("Introduce un número entero positivo:"));

if (numero > 0 && Number.isInteger(numero)) {
    for (let divisor = 1; divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            console.log(divisor);
        }
    }
} else {
    alert("Introduce un número entero positivo.");
}
