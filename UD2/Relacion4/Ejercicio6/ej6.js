const litros = (distancia, consumo) => distancia * consumo / 100;

const coste = (litros, precio = 1.60) => litros * precio;

const costeViajero = (coste, viajeros) => coste / viajeros;

const mostrarCoste = (funcion, valor) => {
    console.log(funcion(valor).toFixed(2) + " €");
};
let distancia = Number(prompt("Distancia en km:"));
while (distancia <= 0 || isNaN(distancia)) {
    alert("La distancia debe ser mayor que 0");
    distancia = Number(prompt("Distancia en km:"));
}

let consumo = Number(prompt("Consumo (litros cada 100 km):"));
while (consumo <= 0 || isNaN(consumo)) {
    alert("El consumo debe ser mayor que 0");
    consumo = Number(prompt("Consumo:"));
}

let precio = Number(prompt("Precio del litro:"));
if (isNaN(precio) || precio <= 0) {
    precio = 1.60;
}

let viajeros = Number(prompt("Número de viajeros:"));
while (viajeros <= 0 || isNaN(viajeros)) {
    alert("Los viajeros deben ser mayores que 0");
    viajeros = Number(prompt("Número de viajeros:"));
}

let combustible = litros(distancia, consumo);
let total = coste(combustible, precio);

console.log("Combustible: " + combustible.toFixed(2) + " litros");

console.log("Coste total:");
mostrarCoste(() => total, 0);

console.log("Coste por viajero:");
mostrarCoste(() => costeViajero(total, viajeros), 0);