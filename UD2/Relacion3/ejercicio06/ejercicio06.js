let numero1 = Number(prompt("Introduce el primer número:"));
let numero2 = Number(prompt("Introduce el segundo número:"));

let menor = Math.min(numero1, numero2);
let mayor = Math.max(numero1, numero2);

for (let numero = menor; numero <= mayor; numero++) {
    console.log(numero);
}
