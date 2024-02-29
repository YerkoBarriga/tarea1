function ejer1(){
    
    Swal.fire({
        title: '¿eres bellisim@?',
        input: "text",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro',
        preConfirm:(respuesta)=>{
            console.log(respuesta.toLowerCase());
            if(respuesta.toLowerCase()  !==  "si" && respuesta.toLowerCase() !== "no" ){
                Swal.showValidationMessage('Por favor, escriba si o no');
            }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('¡Hecho!', 'La acción se realizó con éxito', 'success');
          // Aquí puedes agregar la lógica que desees al confirmar
        }
      });
    
}

function ejer2(){
    Swal.fire({
        title: '¿introducir un numero entero',
        input: "number",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ok',
        preConfirm:(respuesta)=>{
            if(isNaN(respuesta) ){
                Swal.showValidationMessage('Por favor, escriba un numero');
            }
            return respuesta;
        },
      }).then((result) => {
        if (result.value) {
            const numero    =   parseInt(result.value);
            if (numero%2    ==  0) {
                Swal.fire('¡EL NUMERO!', `ES PAR ${numero}`, 'success');
            } else {
                Swal.fire('¡EL NUMERO!', `ES IMPAR ${numero} `, 'success');
            }
        }
      });
    
}
/*
Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio',
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”

*/
function ejer5(){
    const VALOR1="";
    const VALOR2="";
        Swal.fire({
            title: '¿ingrese valores',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            html:
                '<input type="number" id="input1" class="swal2-input" placeholder="Ingrese numero">' +
                '<input type="number" id="input2" class="swal2-input" placeholder="Ingrese numero">' ,
            preConfirm:()=>{
                const VAL1   =   document.getElementById("input1").value;
                const VAL2   =   document.getElementById("input2").value;
                if(isNaN(parseInt(VAL1)) ){
                    Swal.showValidationMessage('Por favor, escriba un numero');
                }
                if(isNaN(parseInt(VAL2)) ){
                    Swal.showValidationMessage('Por favor, escriba un numero');
                }
                return [VAL1 ,VAL2];
            },
        }).then((result) => {
            if (result.value) {
                const [val1 ,val2]    =   result.value;
                if (val1  >   val2) {
                    Swal.fire('¡Datos ingresados!', `el: ${val1}, es mayor que el: ${val2}`, 'success');
                } else {
                    Swal.fire('¡Datos ingresados!', `el: ${val2}, es mayor que el: ${val1}`, 'success');
                }
            }
        });

   
}

function ejer6(){
   
        let valor1;
        let valor2;
        let valor3;
        //validaciones
        do {
            valor1 =parseInt(prompt("ingrese un valor numerico valo1"));
        
        } while (isNaN(valor1));
  
        do {
            valor2 =parseInt(prompt("ingrese un valor numerico valor2"));
        
        } while (isNaN(valor2));
       
        do {
            valor3 =parseInt(prompt("ingrese un valor numerico valor 3"));
        
        } while (isNaN(valor3));
        ///fin de la validadeciones
        if(valor1>= valor2 && valor1>=valor3 ){
            if(valor2>=valor3){
                alert("valor1: " +valor1 + "\nvalor2 :" + valor2 + "\nvalor3 :"+valor3);
            }else{
                alert("valor1: "+valor1+"\n valor3: "+ valor3 +"\n valor2: "+valor2);
            }    
        }else{
            if(valor1<=valor2 && valor2>=valor3){
                if (valor1>= valor3) {
                    alert("valor2: " +valor2+"\n valor1:  "+valor1+"\n valor3:  "+valor3 );
                }else{
                    
                    alert("valor2:  "+valor2+ "\n valor3:  "+valor3+ "\n valor1:  "+ valor1);
                }
            }else{
                if(valor3>=valor2 && valor3 >=valor1 ){
                    if(valor2>=valor1){
                        alert("valor3:  "+ valor3+ "\n valor2:  "+ valor2+ "\n valor1:  "+valor1);
                        
                    }else{
                        
                        alert("valor3:  "+ valor3 +"\n valor1:  "+ valor1,"\n valor2: "+valor2);
                    }
                }
            }
        }
    }
function ejer7(){   
    let dias    =  prompt("introducir un dia de la semana:\n");
    if (dias.toLocaleLowerCase() === "lunes"  || dias.toLocaleLowerCase() === "martes"|| dias.toLocaleLowerCase() === "miercoles" || dias.toLocaleLowerCase() === "jueves" || dias.toLocaleLowerCase() === "viernes" || dias.toLocaleLowerCase() === "sabado" || dias.toLocaleLowerCase() === "domingo") {
        Swal.fire("buenos dias que tengas un exelecte : ",`\n ${dias}`,'success');
    }else{
        Swal.fire("escriba un dia de la semana : ",`\n ${dias}`,'error');
    }
}
function ejer8(){
    let notas   =   parseInt(prompt("ingrese su nota:"));
    if (isNaN(notas)) {
        Swal.fire("escriba un valor de la nota ", "se acpetan numeros" ,'error');
    } else {
        if (notas >0  && notas <=10) {
            if (notas <= 5 ) {
                Swal.fire("REPROBADO ","ESFUERZATE UN MAS",'error');
            }
            if (notas >= 6 && notas <= 8  ) {
                Swal.fire("REGULAR ","ESFUERZATE UN POCO",'warning');
            }
            if (notas === 9){
                Swal.fire("BIEN ","SIGUE ADELANTE",'success');
            }
            if (notas ===10){
                Swal.fire("EXCELENTE "," SIGUE ADELANTE",'success');
            }
        } else {
            Swal.fire("DEBE COLOCAR UNA NOTA  ","ENTRE 1 A 10", 'warning');
        }
    }
}

function ejer9(){
   alert("BIENVENIDOS A THE CAKES");
   const res=menuEjer9();
   if(res ===true){    
    let opcion  = parseInt(prompt("introduzaca la opcion 1 al 4"));
    if (isNaN(opcion)) {
        alert("debe selecionar una opcion \n 1 a 4 \n introduzca solo numeros de las opciones");
    }else{
        if(opcion >0 && opcion<=4){
            if (opcion===1) {
                alert("gracias por escojer el \n (1)El topping de oreo cuesta 10 MXN"  );
            }
            if(opcion === 2){
                alert("gracias por escojer el \n (2)El topping de KitKat cuesta 15 MXN."  );
            }
            if (opcion ===3) {
                alert("gracias por escojer el \n (3)El topping de brownie cuesta 20 MXN."  );
            }
            if (opcion ===4) {
                let otro = prompt("cual es su otra opcion");
              
                alert("NO TENEMOS ESA OPCION PERO LO OFRECEMOS \n  El helado sin topping cuesta 50 MXN")
            }
        }else{
            alert("debe colocar un numero dentro del rango de 1 a 4 , que eson las opciones")
        }
    }  
}else{
    let continuar = confirm("desea volver a ver el menu?");
        if (continuar === true) {
            ejer9();
        } else {
            alert("GRACIAS POR VENIR A TEHE CAKES , ESPERO EN TU PROXIMA VISITA PODAMOS DARTE GUSTO")
        }
   }
}
function menuEjer9(){
    let pregunta =   confirm("EN NUESTRO MENU TENEMOS \n (1) El topping de oreo \n (2) El topping de KitKat  \n (3) El topping de brownie  \n (4) otro opcion ");
    return pregunta;
}
function ejer10(){
    let descuento;
    let pagoMes;
    let carreras  =   [
        {carrera:"master in coding", valor:4999 ,duracion:2}, 
        {carrera:"master in data science",valor:3999 , duracion:6},
        {carrera:"master en diseño UX", valor:2999 , duracion:12}];
        let becas  =   [
        {beca:"Beca Facebook", descuento:20}, 
        {beca:"Beca Google",descuento:15},
        {beca:"Beca Jesua", descuento:50}];
     
        for (const carrera in carreras) {
            if (carreras.hasOwnProperty.call(carreras, carrera)) {
               const elemento = carreras[carrera];
               let eleccionCarrera = confirm("esta es la carrera que quires?"+"\n"+ elemento.carrera+" con valor de: "+elemento.valor);
               if (eleccionCarrera === true) {
                for (const beca in becas) {
                    if (becas.hasOwnProperty.call(becas, beca)) {
                        const element = becas[beca];
                        let eleccion = confirm("carrera: "+elemento.carrera +" \n cuentas con esta: "+"\n " + element.beca + " con descueto del: " + element.descuento + "%" );
                        if (eleccion === true) {
                            descuento   = elemento.valor -(elemento.valor * (element.descuento/100));
                            pagoMes     = descuento /  elemento.duracion;
                            alert("el monto a pagar total es:  "+ descuento +" en:" + elemento.duracion+" meses"+"\n  pago por mes "+ pagoMes ); 
                            break; 
                        }
                    } 
                }
                break;
               }
            }
        }
}
function ejer11(){
    let operacion;
    let movilidades = [
        {movil:"coche", kilometro: 0.20, },
        {movil:"moto", kilometro: 0.10},
        {movil:"autobus", kilometro:0.5}
    ];
    for (const vehi in movilidades) {
        if (movilidades.hasOwnProperty.call(movilidades, vehi)) {
            const element = movilidades[vehi];
            let mv=confirm("que tipo de movilidad tienes"+ "\n "+ element.movil+ "?");
           if(mv === true){
            let kilometros = parseFloat(prompt("cuantos kilomotros recorrio? "));
            if(isNaN(kilometros)){
                alert("debe introducir solo numeros")
            }else{
                kilometros = kilometros * element.kilometro;
                let litros  =  parseFloat(prompt("cuantos litros consumiste?"));
                if (isNaN(litros) && litros < 0) {
                    alert("inserte valores correctos con respecto a los litros");
                }else{
                    if (litros >= 0 && litros<= 100) {
                        operacion = kilometros + 5;
                        alert("monto a cobrar total :  "+ operacion );
                        break;
                    }else{
                        operacion = litros + 10;
                        alert("monto a cobrar total :  "+ operacion );
                        break;
                    }   
                }
            }
            break;
           }
            
        }
    }
}

