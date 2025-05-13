/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/

// Función para calcular la edad en meses
function calcularEdadEnMeses() {
    let edad = document.getElementById('birthdate').value;  // Obtener el valor del input
    let edadNumerica = parseInt(edad);  // Convertir a número entero

    let resultado = document.getElementById('result');

    // Validar resultado
    if (isNaN(edadNumerica) || edadNumerica < 0) {
        resultado.textContent = "Por favor, ingresa una edad válida.";
        return;
    }

    // Calcular la edad en meses 
    resultado.textContent = `Tu edad en meses es: ${edadNumerica * 12} meses`;
}

// Agregar al botón para ejecutar la función
document.getElementById('calculate').addEventListener('click', calcularEdadEnMeses);