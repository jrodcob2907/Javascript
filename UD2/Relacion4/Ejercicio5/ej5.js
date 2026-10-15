const valida = n => n >= 0 && n <= 10;

const clasifica = n =>
    n < 5 ? "Suspenso" :
    n < 7 ? "Aprobado" :
    n < 9 ? "Notable" : "Sobresaliente";

const media = notas =>
    notas.reduce((suma, n) => suma + n, 0) / notas.length;

let notas = [];

while (true) {
    let n = Number(prompt("Nota (0-10) o -1:"));

    if (n === -1) break;

    if (isNaN(n) || !valida(n)) {
        alert("Nota no válida");
        continue;
    }

    notas.push(n);
    console.log(n + ": " + clasifica(n));
}

if (notas.length == 0) {
    console.log("No hay notas");
} else {
    console.log("Cantidad:", notas.length);
    console.log("Media:", media(notas).toFixed(2));
    console.log("Máxima:", Math.max(...notas));
    console.log("Mínima:", Math.min(...notas));
}