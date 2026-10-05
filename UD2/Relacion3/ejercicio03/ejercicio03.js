let opcion = prompt("MENÚ\n1. Usuario principiante\n2. Usuario intermedio\n3. Usuario avanzado\n4. Salir");

switch (opcion) {
    case "1":
        alert("Usuario principiante");
        break;
    case "2":
        alert("Usuario intermedio");
        break;
    case "3":
        alert("Usuario avanzado");
        break;
    case "4":
        alert("Has elegido salir.");
        break;
    default:
        alert("Opción no válida.");
}
