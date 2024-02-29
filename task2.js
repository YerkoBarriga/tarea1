function ejer2_1(){
    
    let almacenar=[];
    for (let index = 0; index < 10; index++) {
        almacenar.push(Math.floor(Math.random()*10)+1);
    }
    alert("Numeros aleatorios almacenados :" +almacenar);
}

function ejer2_2(){
    let almacenar=[];
    let cadena =  prompt("Ingresar cadena separados por cadenas");
    almacenar = cadena.split(",");
    console.log(almacenar);
    alert("es una dato tipo:"+ typeof(almacenar)+"\n" +"["+ almacenar+"]");
}
function ejer2_3(){
    let valores =  [10,40,30,20,15,5];
    let aux;
    for (let index = 0; index < valores.length; index++) {
        if(valores[index] <= valores[index+1]){

        }else{
            valores[index+1]=valores[index];
            console.log(valores);
        }
        
    }
}