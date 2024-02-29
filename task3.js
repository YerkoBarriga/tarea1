function ejer3_1(){
    let numero  =   parseInt(prompt("introduzca un numero:"));
    let aux= 5;
    while (numero>0 && aux<=numero) {
        if(aux % 5 === 0  ){
            console.log(aux);
            aux = aux+5;
        }      
    }
}
function ejer3_2(){
    let numero1  =   parseInt(prompt("introduzca un numero:"));
    let numero2  =   parseInt(prompt("introduzca un numero:"));
    let aux=numero1;
    
        if(numero2 <= numero1 ){
            alert("el valor del primer numero debe ser mayor al segundo valor \n vuelva a ejecutar");
        }else{
            while (aux<=numero2) {
                console.log(aux);
                aux = aux+1;
            }
        }    
    }
function ejer3_3() {
    let numerosGuardar =[];
        while (true) {
            valores = parseInt(prompt("introducir valores:"));
            if (isNaN(valores)) {
                alert("xfavor ingrese valores numericos")
            }else{
                if (valores!= 0) {
                    numerosGuardar.push(valores)
                } else {
                    break;
                }
            }
        }
        alert(numerosGuardar);
    }
function ejer3_4() {
    let valoresGuardar  = "";
    while(true){
        valores = prompt("introducir valores letras o palabras:");
        if (valores=== "" || valores==null){
            break;
        }else{
            if (isNaN(valores)) {
                valoresGuardar=valoresGuardar.concat(valores);
            } else {
                alert("introduzca valores  letras o palabras");
            }
        } 
    }
    alert(valoresGuardar);
}
function ejer3_5() {
    let semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];    
 
    while(true){
        let dia = prompt("introducir dia de la semana");
        if (semana.includes(dia.toLocaleLowerCase())) {
            if (semana[0]=== dia.toLocaleLowerCase()) {
                alert("lunes");
            }
            if (semana[1]=== dia.toLocaleLowerCase()) {
                alert("martes");
            }
            if (semana[2]=== dia.toLocaleLowerCase()) {
                alert("miercoles");
            }
            if (semana[3]=== dia.toLocaleLowerCase()) {
                alert("jueves");
            }
            if (semana[4]=== dia.toLocaleLowerCase()) {
                alert("viernes");
            }
            if (semana[5]=== dia.toLocaleLowerCase()) {
                alert("sabado");
            }
            if (semana[6]=== dia.toLocaleLowerCase()) {
                alert("Domingo , ve a descansar , CHAUUUU!");
                break;
            }
        } else {
            alert("introduzca de  manera correcta el dia");
        }
    }
}

