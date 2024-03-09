let productos = [
    {producto:"Aqua", precio: 200, moneda:"bs"},
    {producto:"Emocion", precio: 180, moneda:"bs"},
    {producto:"Alegria", precio: 160, moneda:"bs"},
    {producto:"Frescura", precio: 150, moneda:"bs"}
]
let aux1=0;
let aux2=0;
let user = ["Yerko", "Cristiano"];
function ejer611() {
    let contenedor =document.getElementById('tabla');
    contenedor.style.display="block";

}
function vender(){
    let valor;
    let usuarios = document.getElementsByName("usuario");
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].checked) {
            valor = usuarios[index].value;
        }
    }
    return datelles(valor);
}

function datelles(val){
    let valor = val;
   
    let seleccionar  ="";
    productos.forEach(product =>{
        seleccionar +=`<option value="${product.producto}">${product.producto} - ${product.precio} ${product.moneda}</option>`;
    });
  
    if (user[0] === valor) {
        Swal.fire({
            title: '¿Usuario Yerko',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok',
            html:
                `<input type="hidden" id="usuarioSelec" value="${valor}"  ></p>` +
                '<p><label>Seleccione el Producto a veder</label></p>' +
                `<select id="swal-input2" class="swal2-input"> ${seleccionar} </select>`,
            preConfirm:()=>{
                let userSelect = document.getElementById("usuarioSelec");
                let idSelect =document.getElementById("swal-input2");
                if(idSelect === "seleccionar"){
                    Swal.showValidationMessage('Por favor seleccionar un producto');
                }
                return [idSelect, userSelect];
            },
          }).then((result) => {
            if (result.value) {
                const [numeroo, usuario]    =   result.value;
                for (let index = 0; index < productos.length; index++) {
                    if(productos[index].producto === numeroo.value){
                        agregarDetalle(numeroo.value, productos[index].precio,productos[index].moneda, usuario.value);
                        break;
                    }
                }
            }
          });
    }
    if (user[1] === valor) {
        Swal.fire({
            title: 'Usuario Cristiano Ronaldo',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok',
            html:
                `<input type="hidden" id="usuarioSelec" value="${valor}"  ></p>` +
                '<p><label>Seleccione el Producto a veder</label></p>' +
                `<select id="swal-input2" class="swal2-input"> ${seleccionar} </select>`,
            preConfirm:()=>{
                let userSelect = document.getElementById("usuarioSelec");
                let idSelect =document.getElementById("swal-input2");
                if(idSelect === "seleccionar"){
                    Swal.showValidationMessage('Por favor seleccionar un producto');
                }
                return [idSelect, userSelect];
            },
          }).then((result) => {
            if (result.value) {
                const [numeroo, usuario]    =   result.value;
                for (let index = 0; index < productos.length; index++) {
                    if(productos[index].producto === numeroo.value){
                        agregarDetalle(numeroo.value, productos[index].precio,productos[index].moneda, usuario.value);
                        break;
                    }
                }
            }
          });
    }
}
function agregarDetalle(precio, producto,moneda,usuario) {
    
    if (usuario === "Yerko") {
   
        aux1 = aux1+1;
        let precioProducto = precio;
        let nombreProducto = producto;
        let tipoMoneda     = moneda;
        let yerkoTable   = document.getElementById("yerkoo");
        const tbody      = yerkoTable.getElementsByTagName('tbody')[0];
        // Crear una nueva fila para agregar los detalles
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${aux1}</td><td>${precioProducto}</td><td class="valor1">${nombreProducto}</td><td>${tipoMoneda}</td>`;
        tbody.appendChild(fila);
        sumaValores1();
        
    }
    if (usuario === "Cristiano") {
        aux2 = aux2+1;
        let precioProducto = precio;
        let nombreProducto = producto;
        let tipoMoneda     = moneda;
        let cristianoTable   = document.getElementById("cristianoo");
        const tbody      = cristianoTable.getElementsByTagName('tbody')[0];
        // Crear una nueva fila para agregar los detalles
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${aux1}</td><td>${precioProducto}</td><td class="valor2">${nombreProducto}</td><td>${tipoMoneda}</td>`;
        tbody.appendChild(fila);
        sumaValores2();
    }
}

function sumaValores1(){
    let total1 = 0;
        
    let valoresYerko    =   document.querySelectorAll(".valor1");
        for (let index = 0; index < valoresYerko.length; index++) {
            const td=  parseInt (valoresYerko[index].textContent);
            total1= total1+td;
        }
        let totalYerko = document.querySelector(".totalYerko").innerHTML=total1;
}
function sumaValores2(){
    let total2 = 0;
    let valoresCristiano    =   document.querySelectorAll(".valor2");
        for (let index = 0; index < valoresCristiano.length; index++) {
            const td=  parseInt (valoresCristiano[index].textContent);
            total2= total2+td;
        }
        let totalYerko = document.querySelector(".totalCristiano").innerHTML=total2;
}
function consultar(){
    let val1 = document.querySelectorAll(".valor1");
    let val2 = document.querySelectorAll(".valor2");
    let totalc = document.querySelector(".totalCristiano");
    let totaly = document.querySelector(".totalYerko");
    console.log(totaly);
    Swal.fire({
        title: "The Internet?",
        text: `el Usuario Yerko Barriga vendio: ${totaly.textContent}. Articulos ${val1.length} /n Y el usuario Cristiano Ronaldo ${totalc.textContent}. Articulos ${val2.length}  `,
        icon: "inf"
      });

}