function ejer5_1() {
    var semaforo = document.getElementById('semaforo');
    let semaforo2 = document.getElementById('semaforo2');
    // Obtener todas las luces del semáforo
    var luces = semaforo.querySelectorAll('.luz');
    let luces2 = semaforo2.querySelectorAll('.luz2');
    
    // Reiniciar todos los colores a gris
    luces.forEach(luz => luz.style.background = '#ccc');
    luces2.forEach(luz2 => luz2.style.background='#ccc');
    // Establecer los tiempos de cambio
    var tiempoRojo = 3000; // 3 segundos
    var tiempoAmarillo = 2000; // 2 segundo
    var tiempoVerde = 3000; // 2 segundos

    function cambiarColor(index, color, tiempo) {
      // Encender la luz deseada
      luces[index].style.background = color;

      // Después de un cierto tiempo, apagar la luz
      setTimeout(function() {
        luces[index].style.background = '#ccc';
      }, tiempo);
    }
    function cambiarColor2(index, color, tiempo) {
        // Encender la luz deseada
        luces2[index].style.background = color;
  
        // Después de un cierto tiempo, apagar la luz
        setTimeout(function() {
          luces2[index].style.background = '#ccc';
          
        }, tiempo);
      }

    function ejecutarSecuencia() {
      // Iniciar la secuencia
      setTimeout(function() {
        cambiarColor(0, '#ff0000', tiempoRojo);
      }, 0);   

      setTimeout(function() {
        cambiarColor(0, '#ccc', 0);
        cambiarColor(1, '#ffff00', tiempoAmarillo);
      }, tiempoRojo);

      setTimeout(function() {
        cambiarColor(1, '#ccc', 0);
        cambiarColor(2, '#00ff00', tiempoVerde);
      }, tiempoRojo + tiempoAmarillo);

      setTimeout(function() {
        cambiarColor(2, '#ccc', 0);
        // Repetir la secuencia
        ejecutarSecuencia();
      }, tiempoRojo + tiempoAmarillo + tiempoVerde);
    }
    function ejecutarSecuencia2() {
        setTimeout(function(){
            cambiarColor2(2,'#00ff00',tiempoAmarillo+tiempoRojo);
        },0);
        setTimeout(function(){
            cambiarColor2(2,'#ccc',0);
            cambiarColor2(0,'#ff0000',tiempoRojo);
        },tiempoRojo+tiempoAmarillo);
        
        setTimeout(function(){
            cambiarColor2(0,'#ccc',0);
            cambiarColor2(1,'#fff000',tiempoAmarillo);
            
        },tiempoRojo+tiempoVerde);
        
        setTimeout(function() {
            cambiarColor(1, '#ccc', 0);
            // Repetir la secuencia
            ejecutarSecuencia2();
          }, tiempoRojo + tiempoAmarillo + tiempoVerde);
        
    }
    // Iniciar la secuencia
    ejecutarSecuencia();
    ejecutarSecuencia2();
}
  
  
