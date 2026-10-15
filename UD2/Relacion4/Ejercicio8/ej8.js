const analizar = (...numeros) => {

    if (numeros.length == 0) {
        return null;
    }

    for (let numero of numeros) {
        if (typeof numero != "number" || !Number.isFinite(numero)) {
            return null;
        }
    }

    let suma = 0;
    let minimo = numeros[0];
    let maximo = numeros[0];

    for (let numero of numeros) {
        suma += numero;

        if (numero < minimo) {
            minimo = numero;
        }

        if (numero > maximo) {
            maximo = numero;
        }
    }

    return {
        suma: suma,
        media: suma / numeros.length,
        minimo: minimo,
        maximo: maximo
    };
};

const mostrar = resultado => {

    if (resultado == null) {
        console.log("No hay datos o hay algún valor no válido.");
    } else {
        console.log("Suma: " + resultado.suma);
        console.log("Media: " + resultado.media.toFixed(2));
        console.log("Mínimo: " + resultado.minimo);
        console.log("Máximo: " + resultado.maximo);
    }
};

mostrar(analizar(5, 10, 15, 20));
let numeros = [2, 4, 6, 8];
mostrar(analizar(...numeros));
let vacio = [];
mostrar(analizar(...vacio));
mostrar(analizar(7));
mostrar(analizar(5, 5, 5, 5));
mostrar(analizar(-5, -10, -2, -8));
mostrar(analizar(5, "hola", 10));
