"use strict";
//posiciones
let arreglo_cartas=["X"," "," "," "," "];
let arreglo_verificado=["X"," "," "," "," "];
//contadores
let numPartida=0;
let partidasGanadas=0;

//--botones--
//principal
let jugar=document.getElementById("iniciar");
//cartas
let opcion_1=document.getElementById("opcion_1");
let opcion_2=document.getElementById("opcion_2");
let opcion_3=document.getElementById("opcion_3");
let opcion_4=document.getElementById("opcion_4");
let opcion_5=document.getElementById("opcion_5");

jugar.addEventListener("click", juego);

/*------------botones de las img------------------*/
 escucharBotones();
/*-----la funcion para que este mas ordenado------*/

function juego(){
    reiniciarBotones();
    mesclarCartasCada2partidas();
    mostrarMesa();//se supone que hace apareser las cartas y la tabla (le saca la clase oculto al div contenedor)

    mostarcartas(); //y las esconde luego de un tiempo (metodo dentro del mismo)

    numPartida++;
}

function mostrarMesa(){
    let elOculto = document.getElementById("c");

    elOculto.classList.remove("oculto");
    elOculto.classList.add("contenedor");
}

/*-------------------------------------------------------------------*/
function mesclarCartasCada2partidas(){
    document.getElementById("Numero_Partida").innerHTML=parseInt(document.getElementById("Numero_Partida").innerHTML)+1;
    if(numPartida%2===0){
        mesclarCartas(); 
    }
}

function mesclarCartas(){
    for(let i=1;i<5;i++){
        let d1 = Math.floor((Math.random() * 2) + 1);
        //Carga "X" o "O" al azar dependiendo el numero
        
        /*se carga un segundo arreglo para modificarlo y verificar
        cuando gana y conservar uno igual durante las 2 partidas*/
        
        if(d1===1){
            arreglo_cartas[i]="X";
            arreglo_verificado[i]="X";
        }else{
            arreglo_cartas[i]="O"; 
            arreglo_verificado[i]="O";
        }
    }
}
/*-------------------------------------------------------------------*/

/*-------------------------------------------------------------------*/
function mostarcartas(){
    for(let i=0;i<5;i++){
        document.getElementById("carta_"+i).src="imagen/"+arreglo_cartas[i]+".png";
    }

    let timer = setTimeout('ocultarCarta()', 1000);
}

function ocultarCarta(){
    for(let i=0;i<5;i++){
        document.getElementById("carta_"+i).src="imagen/oculta.jpg";
    }
}
/*-------------------------------------------------------------------*/

/*-------------------------------------------------------------------*/


function escucharBotones(){
    opcion_1.addEventListener("click", function(e){
        modificarArreglo(0);
        verificar();
        ocultarboton(1);
    });
    opcion_2.addEventListener("click", function(e){
        modificarArreglo(1);
        verificar();
        ocultarboton(2);
     });
    opcion_3.addEventListener("click", function(e){
        modificarArreglo(2);
        verificar();
        ocultarboton(3);
     });
    opcion_4.addEventListener("click", function(e){
        modificarArreglo(3);
        verificar();
        ocultarboton(4);
     });
    opcion_5.addEventListener("click", function(e){
        modificarArreglo(4);
        verificar();
        ocultarboton(5);
     });
}


/*-------------------------------------------------------------------*/
function modificarArreglo(casillero_modificado){
    if(arreglo_cartas[casillero_modificado]==="X"){
        arreglo_verificado[casillero_modificado]="O";
        document.getElementById("Aciertos").innerHTML = parseInt(document.getElementById("Aciertos").innerHTML)+1;
        document.getElementById("AciertosParciales").innerHTML = parseInt(document.getElementById("AciertosParciales").innerHTML)+1;
    }

    if(arreglo_cartas[casillero_modificado]==="O"){
        document.getElementById("Perdidas").innerHTML = parseInt(document.getElementById("Perdidas").innerHTML)+1;
        document.getElementById("PerdidasParciales").innerHTML = parseInt(document.getElementById("PerdidasParciales").innerHTML)+1;
    }
    
}

function verificar(){
    let sonToda_O=true;
    for(let i=0;i<5;i++){
        if(arreglo_verificado[i]==="X"){
            sonToda_O=false;
        }
    }

    if(sonToda_O){
        partidasGanadas++
        alert("ganaste :"+partidasGanadas+" partida");
        let elOculto = document.getElementById("c");
        elOculto.classList.add("oculto");

        reiniciarArreVerificador();
        reiniciarTabla();
    }

}

function reiniciarTabla(){
    document.getElementById("PerdidasParciales").innerHTML = "0";
    document.getElementById("AciertosParciales").innerHTML = "0";
}

function ocultarboton(b){
    let elOculto = document.getElementById("opcion_"+b);
    elOculto.classList.add("oculto");
}

function reiniciarBotones(){
    for(let i=1; i<=5 ;i++){
        let elOculto = document.getElementById("opcion_"+i);
    elOculto.classList.remove("oculto");
    }
}

function reiniciarArreVerificador(){
    for (let i=0;i<5;i++){
        arreglo_verificado[i]=arreglo_cartas[i];
    }
}


/*-------------------------------------------------------------------*/