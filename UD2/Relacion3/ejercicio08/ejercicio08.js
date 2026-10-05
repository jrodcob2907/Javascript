let palabra = prompt("Introduce una palabra:");
let vocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" ||
        letra === "o" || letra === "u") {
        vocales++;
    }
}

alert("La palabra contiene " + vocales + " vocales.");
