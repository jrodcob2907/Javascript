let nombre = "Jesús";
let apellidos = "Rodríguez Cobo";

let nombreCompleto = nombre + " " + apellidos;

// a
console.log(nombreCompleto);

// b
console.log(nombreCompleto.length);

// c
console.log(nombreCompleto.slice(7, 11));

// d
console.log(nombreCompleto.replace("Cobo", "García"));

// e
console.log(nombreCompleto.toUpperCase());

// f
console.log(nombreCompleto[nombreCompleto.length - 1]);

// g
let array = nombreCompleto.split(" ");
console.log(array);

// h
console.log(nombreCompleto.indexOf("Rodríguez"));

// i
console.log(`Bienvenido/a ${nombreCompleto}`);

// j
let iniciales = "";

for (let i = 0; i < array.length; i++) {
    iniciales = iniciales + array[i][0];
}

console.log(iniciales.toUpperCase());
