import * as rls from 'readline-sync';
//Funcion para crear un numero random entre 0 y numAzar
function azar(parLimite : number) : number {
    return Math.floor(Math.random() * parLimite);
}
/*Este metodo permite cargar un arreglo "arreglo" de dimension "dimension" 
y llenarlo de valores generados al azar entre 0 y "numAzar"(Parámetro)*/
function cargar(arreglo : number[] , dimension: number , parLimite : number){
    let i : number;
    for(i = 0 ; i < dimension ; i++){
        arreglo[i] =  azar(parLimite);

    }
}
/*Este metodo permite mostrar un arreglo "arreglo" de dimension "dimension" en una unica linea, separando 
los valores con un espacio*/
function escribirUnaLinea (parArreglo : number[] , parDimension: number){
    let i : number;
    let vector : string = "";
    for(i = 0 ; i < parDimension ; i++){
        vector += `${parArreglo[i]} `;
    }
    console.log(vector);
}
/*Este metodo permite intercambiar los valores en las posiciones "i" y "j" de un arreglo 
"arreglo", utilizando una variable auxiliar*/
function intercambiarValoresDeArreglo(parArreglo : number[] , i: number , j: number){
 let auxiliar : number;
    auxiliar = parArreglo[i];
    parArreglo[i] = parArreglo[j];
    parArreglo[j] = auxiliar;
}
/*Este metodo permite comparar los valores en las posiciones "i" y "j" del arreglo "arreglo"
//Devuelve 0 si son iguales.
//Devuelve 1 si lo que hay en "i" es mayor a lo que hay en "j".
//Devuelve -1 si lo que hay en "i" es menor a lo que hay en "j". */ 
function comparar(parArreglo : number[] , i : number , j : number) : number{
    let comparacion : number;
    if(parArreglo[i] === parArreglo[j]){
        comparacion = 0;
    }
    else if(parArreglo[i] > parArreglo[j]){
        comparacion = 1;
    }
    else{
        comparacion = -1;
    }
    return comparacion;
}
//Metodo para burbujear
function burbuja(parArreglo : number[] , cantidad : number ) {
    let i : number;
    let j : number;
    //Desde 0 hasta cantidad: El primer elementos esta ordenado en la ultima vuelta.
    for(i = 0 ; i < cantidad ; i++){
        //Desde cero hasta cantidad - i (vamos achicando el rango a medida que se ubican los valores al final 
        //del arreglo) 
        for(j = 0 ; j < cantidad - 1  ; j++){
            //Si los adyacentes j y j + 1 no estan ordenados, intercambiarlos.
            if(comparar(parArreglo , j , j + 1) == -1){
                intercambiarValoresDeArreglo(parArreglo , j , j + 1);
            }
        }

    }
}
/*Ejercicio 1 Implemente un algoritmo de ordenamiento con el metodo bubble sort,
para que ordene un arreglo de longitud N en orden descendente.*/
//Entradas
let limite : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let array : number[] = new Array(limite);
//Procesos
cargar(array , limite , 100);
//Mostrar arreglo desordenado
escribirUnaLinea(array , limite);
//ordenamiento de arreglo
burbuja(array , limite);
//salidas
//Mostrar arreglo ordenado
escribirUnaLinea(array , limite);
