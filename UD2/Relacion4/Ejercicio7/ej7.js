const celsiusAFahrenheit = c => c * 9 / 5 + 32;
const fahrenheitACelsius = f => (f - 32) * 5 / 9;
const kmAMillas = km => km * 0.621371;
const millasAKm = millas => millas / 0.621371;
const eurosADolares = (euros, cambio = 1.01) => euros / cambio;
const dolaresAEuros = (dolares, cambio = 1.01) => dolares * cambio;
const mostrar = (texto, funcion, valor) => {
    console.log(texto + funcion(valor).toFixed(2));
};
let opcion = "";
while (opcion != "7") {
    opcion = prompt(
        "1. Celsius a Fahrenheit\n" +
        "2. Fahrenheit a Celsius\n" +
        "3. Kilómetros a millas\n" +
        "4. Millas a kilómetros\n" +
        "5. Euros a dólares\n" +
        "6. Dólares a euros\n" +
        "7. Salir"
    );
    switch (opcion) {
        case "1":
            let c = Number(prompt("Introduce Celsius:"));
            if (!isNaN(c))
                mostrar(c + " ºC equivalen a ", celsiusAFahrenheit, c);
            else
                alert("Debes introducir un número");
            break;
        case "2":
            let f = Number(prompt("Introduce Fahrenheit:"));
            if (!isNaN(f))
                mostrar(f + " ºF equivalen a ", fahrenheitACelsius, f);
            else
                alert("Debes introducir un número");
            break;
        case "3":
            let km = Number(prompt("Introduce kilómetros:"));
            if (!isNaN(km))
                mostrar(km + " km equivalen a ", kmAMillas, km);
            else
                alert("Debes introducir un número");
            break;
        case "4":
            let millas = Number(prompt("Introduce millas:"));
            if (!isNaN(millas))
                mostrar(millas + " millas equivalen a ", millasAKm, millas);
            else
                alert("Debes introducir un número");
            break;
        case "5":
            let euros = Number(prompt("Introduce euros:"));
            if (!isNaN(euros))
                mostrar(euros + " € equivalen a ", eurosADolares, euros);
            else
                alert("Debes introducir un número");
            break;
        case "6":
            let dolares = Number(prompt("Introduce dólares:"));
            if (!isNaN(dolares))
                mostrar(dolares + " $ equivalen a ", dolaresAEuros, dolares);
            else
                alert("Debes introducir un número");
            break;
        case "7":
            console.log("Fin del programa");
            break;
        default:
            alert("Opción no válida");
    }
}