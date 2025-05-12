function cambiarNombre() {
  nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    document.getElementById("saludo").textContent = "Hola " + nombre;
  }
}