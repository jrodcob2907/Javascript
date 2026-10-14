class Libro{
    constructor(titulo, autor, numPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    constructor(){

    }

}
function describir(){
    console.log("descripcion del libro")
}
function esExtenso(){
    if(numPaginas>=300){
        console.log("El libro es extenso")
    }else{
        console.log("El libro no es extenso")
    }
}
function validarDatos(){
    if(autor && titulo === null || autor && titulo === undefined){
        console.log("Los datos titulo o autor no pueden estar vacios")
    }if(numPaginas === null || numPaginas === undefined){
        console.log("El dato de numero de paginas no puede estar vacio")
    }
}