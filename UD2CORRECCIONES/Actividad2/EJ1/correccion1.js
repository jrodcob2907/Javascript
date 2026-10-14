class Libro {
    constructor(titulo, autor, numPaginas) {
        if (titulo === null || titulo === undefined || titulo === "") {
            throw new Error("El titulo no puede estar vacio")
        }
        if (isNaN(numPaginas) || numPaginas <= 0) {
            throw new Error("No puede tener paginas negativas")
        }
        if (autor === null || autor === undefined || autor === "") {
            throw new Error("El titulo no puede estar vacio")
        }
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas
    }

    describir() {
        document.body.innerHTML += ("<h1>" + this.titulo + "</h1>");
        document.body.innerHTML += ("<p>" + this.autor + "</p>");
        document.body.innerHTML += ("<p>" + this.numPaginas + "</p>")
    }

    esExtenso() {
        if (this.numPaginas >= 300) {
            return true;
        } else return false;
    }
}
let libro = new Libro("Titulo", "autor", 30);
console.log(libro.esExtenso());

class Catalogo{
    constructor(...libros){
        this.libros = libros;
    }
    existe(libro){
        for(let i =0;i<this.libros.length;i++){
            if(this.libros[i].titulo.toLowerCase() === libro.titulo.toLowerCase()){
                return true;
            }
        }
        return false;
    }
    agregar(libro){
        if(!this.existe(libro)){
            this.libros.push(libro);
        }else{
            console.error("No se ha agregado libro porque ya existe");
        }
    }
    eliminar(libro){
        if(this.existe(libro)){
           let pos = this.libros.indexOf(libro);
           this.libros.splice(pos, 1);
        }else{
            console.error("No se ha podido eliminar el libro");
        }
    }
    listar(){
        for(let i =0;i<this.libros.length;i++){
            this.libros[i].describir();
        }
    } 
}
let catalogo = new Catalogo();
catalogo.agregar(libro);
let libro2 = new Libro("Titulo2", "autor2", 20);
catalogo.agregar(libro2);
let libro3 = new Libro("Titulo3", "autor3", 50);
catalogo.agregar(libro3);
catalogo.listar();
catalogo.eliminar(libro3);
catalogo.listar();