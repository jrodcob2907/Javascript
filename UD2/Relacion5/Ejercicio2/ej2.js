let pasillo = [".",".",".","#",".","."];
let negativo = [];

function inicializar(){

    
    let numeroAleatorio = Math.floor(Math.random()* pasillo.length);
    while(pasillo[numeroAleatorio] ==="#"){
        numeroAleatorio = Math.floor(Math.random()* pasillo.length);
    }
    pasillo[numeroAleatorio] = "$";
}

function posicion(mensaje){
        let robot =0;
        for(let i;i<pasillo.length;i++){
            if(pasillo[i] ==="$"){
                robot = i;
            }
        }
        if(mensaje ==="derecha"){
            if(pasillo[robot +1] ==="#"){
                console.log("rechazado hay un obstaculo");
                negativo.push("derecha");
            }else if((robot+1) >= pasillo.length){
                console.log("rechazadom te has salido del limite")
                negativo.push("derecha")
            }else{
                pasillo[robot+1] ="$";
                pasillo[robot] = ".";
                console.log("aceptada, posicion del robot "  + (robot + i) )
            }
        }
             if(pasillo[i] ==="$"){
                robot = i;
            }
        }
        if(mensaje ==="izquierda"){
            if(pasillo[robot +-11] ==="#"){
                console.log("rechazado hay un obstaculo");
                negativo.push("izquierda");
            }else if((robot+1) >= pasillo.length){
                console.log("rechazado te has salido del limite")
                negativo.push("izquierda")
            }else{
                pasillo[robot+1] ="$";
                pasillo[robot] = ".";
                console.log("aceptada, posicion del robot "  + (robot - i) )
            }
        }
    
function finalizar (){
  let indice =  pasillo.indexOf("$");
  pasillo[indice] = "R"
}

inicializar();

console.log(pasillo);
posicion("derecha");
//posicion("derecha");
//posicion("izquierda");
//posicion("izquierda");
finalizar();

console.log(pasillo);

