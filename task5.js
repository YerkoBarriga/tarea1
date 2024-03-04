function ejer5_1() {
    var semaforo = document.getElementById('semaforo');

    // Obtener todas las luces del semáforo
    var luces = semaforo.querySelectorAll('.luz');
    
    // Reiniciar todos los colores a gris
    luces.forEach(luz => luz.style.background = '#ccc');

    // Establecer los tiempos de cambio
    var tiempoRojo = 3000; // 3 segundos
    var tiempoAmarillo = 1000; // 1 segundo
    var tiempoVerde = 2000; // 2 segundos

    function cambiarColor(index, color, tiempo) {
      
      // Encender la luz deseada
      luces[index].style.background = color;

      // Después de un cierto tiempo, apagar la luz
      setTimeout(function() {
        luces[index].style.background = '#ccc';
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

    // Iniciar la secuencia
    ejecutarSecuencia();
}
  
  
