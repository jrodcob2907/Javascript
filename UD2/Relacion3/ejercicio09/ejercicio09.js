let contraseña = "dam123";
let intento = prompt("Introduce la contraseña:");

while (intento !== contraseña) {
    alert("Contraseña incorrecta.");
    intento = prompt("Inténtalo de nuevo:");
}

alert("Contraseña correcta.");
