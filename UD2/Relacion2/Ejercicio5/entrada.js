let edad = Number(prompt("Introduce tu edad"));
let nota = Number(prompt("Introduce tu nota media"));

if (Number.isFinite(edad) && Number.isFinite(nota) &&
    nota >= 0 && nota <= 10) {

    // a
    console.log(nota.toFixed(2));

    // b
    console.log("Suma: " + (edad + nota));
    console.log("Resta: " + (edad - nota));
    console.log("Multiplicación: " + (edad * nota));

    if (nota != 0) {
        let division = edad / nota;

        console.log("División: " + division);

        // c
        let divisionString = division.toString();
        console.log(divisionString);
    } else {
        console.log("No se puede dividir entre 0");
    }

    // d
    let aprobado = true;

    // e
    console.log(typeof edad);
    console.log(typeof nota);
    console.log(typeof aprobado);

} else {
    console.log("Los datos no son válidos");
}
