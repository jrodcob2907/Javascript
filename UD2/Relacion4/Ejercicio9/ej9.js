const generarNumero = () => Math.floor(Math.random() * 100) + 1;

const intentos = nivel => {
    switch (nivel) {
        case "1": return 10;
        case "2": return 7;
        case "3": return 5;
        default: return 0;
    }
};

const valido = n => n >= 1 && n <= 100;

const comparar = (n, secreto) => {
    if (n == secreto) return 0;
    if (n < secreto) return 1;
    return -1;
};

let puntos = 0;
let nivel = prompt("Nivel: 1-Fácil  2-Medio  3-Difícil  4-Salir");

while (nivel != "4") {

    let max = intentos(nivel);

    if (max == 0) {
        alert("Nivel no válido");
    } else {

        let secreto = generarNumero();
        let acierto = false;

        for (let i = 1; i <= max; i++) {

            let n = Number(prompt("Intento " + i + " de " + max));

            if (isNaN(n) || !valido(n)) {
                alert("Número no válido");
                i--;
                continue;
            }

            let resultado = comparar(n, secreto);

            if (resultado == 0) {
                alert("¡Has acertado!");
                puntos += 10;
                acierto = true;
                break;
            }

            puntos--;

            if (resultado == 1)
                alert("Prueba con un número mayor");
            else
                alert("Prueba con un número menor");
        }

        if (!acierto)
            alert("Has perdido. Era el " + secreto);

        alert("Puntuación: " + puntos);
    }

    nivel = prompt("Nivel: 1-Fácil  2-Medio  3-Difícil  4-Salir");
}

alert("Fin del juego. Puntuación: " + puntos);