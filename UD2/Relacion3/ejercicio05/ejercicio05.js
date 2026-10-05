let suma = 0;
let cantidad = 0;
let numero = Number(prompt("Introduce un número (negativo para terminar):"));

while (numero >= 0) {
    suma = suma + numero;
    cantidad++;

    numero = Number(prompt("Introduce otro número (negativo para terminar):"));
}

if (cantidad > 0) {
    let media = suma / cantidad;
    alert("Suma: " + suma + "\nMedia: " + media);
} else {
    alert("No has introducido ningún número para calcular.");
}
