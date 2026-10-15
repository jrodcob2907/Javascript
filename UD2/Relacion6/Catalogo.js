class Catalogo{
   constructor(libros){
    this.libros = libros;
   }
} 
const libros = [
        new Libro("Libro","autor",332),
        new Libro("LIBRO2","AUTOR2",32)

     ];

function anadirLibro(){
    
    anadirLibro.push("Se ha añadido un nuevo libro");
}
function eliminarLibro(Libro){
    let indice = libros.indexOf("Libro");
    libros.slice(indice,1);
    console.log(libros)
}