let hoy = new Date();

// a
console.log(hoy.getDate());

// b
console.log(hoy.getMonth() + 1);

// c
console.log(hoy.getFullYear());

// d
let fechaCompleta = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(hoy);

console.log(fechaCompleta);
