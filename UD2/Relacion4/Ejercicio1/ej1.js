function eurosADolares(euros, cambio = 1.01) {
    return euros / cambio;
}

console.log("100 € =", eurosADolares(100), "$");

console.log("100 € =", eurosADolares(100, 1.10), "$");
