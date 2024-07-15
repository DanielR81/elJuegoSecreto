
//--------------------------> Funciones de selectores
/**
 * Aqui entran por primera algunos ejemplos de atributos, id = identificador unico del elemento
 * class = se utiliza para un grupo de elementos
 * name = se utiliza para formularios
 * id y class se utilizan para meter estilos de CSS
 */ 

let contadorDeVeces = 1;
let listaNumeroSorteados = [];
let numeroSecreto;
let numeroMaximo = 10;

//Selectores directamente con etiquetas
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value =("");   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //console.log(numeroGenerado);
    //console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == numeroMaximo){
     asignarTextoElemento('#parrafoPrincipal','Ya se asignaron todos los numeros posibles');
    }else {

      //si el numero generado esta incluido en la lista
      if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      } else {
   
       //
       listaNumeroSorteados.push(numeroGenerado);
       return numeroGenerado;
      }
    }    
 } 

function condicionesIniciales(){
    
    asignarTextoElemento('h1', 'Este es el juego del numero secreto');
    asignarTextoElemento('p',`Coloque un numero del 1 al ${numeroMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    contadorDeVeces =1;
  
}

//Selectores con Id
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){ //colocamos el tercer igual para comprobar que es el mismo tipo de dato
       asignarTextoElemento('p',`Acertaste el numero. Lo hiciste en ${contadorDeVeces} ${contadorDeVeces == 1 ? 'vez':'veces'}`);
       document.getElementById('reiniciar').removeAttribute('disabled');
       //el usuario no acerto
    } else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','el numero secreto es menor');
        limpiarCaja();
        contadorDeVeces ++;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        asignarTextoElemento('p','el numero secreto es mayor');
        limpiarCaja();
        contadorDeVeces ++;
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    return;
}


function reiniciarJuego(){
        //condiciones Iniciales
        condicionesIniciales();
        document.getElementById("reiniciar").setAttribute("disabled","true");      
}

// Inicio del juego por primera vez
condicionesIniciales();
