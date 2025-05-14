console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
saludar("Jen");
function saludar( nombre ) {
  console.log("Qué te gustaría de regalod e cumpleaños " + nombre );
}





/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function ( nombre, regalo){
  console.log( `Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "un libro");


/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/


// Función declarada
function sumar(a, b) {
  return a + b;
}
// Ejemplo
const resultadoSuma = sumar(5, 3);
console.log("Resultado de la suma:", resultadoSuma);



// Función expresada
const restar = function(a, b) {
  return a - b;
};
// Ejemplo
const resultadoResta = restar(10, 4);
console.log("Resultado de la resta:", resultadoResta);




/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp (){
  console.log("Configurando inicial de la aplicación");
})(); 
setUp();



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.

function calcularAreaTriangulo(base, altura) {
  const area = (base * altura) / 2; 
  return area; 
}
const base = 10;
const altura = 5;
const area = calcularAreaTriangulo(base, altura);

console.log("El área del triángulo es:", area);


// Realizar una función expresada que calcule al área de un triángulo
const calcularAreaTriangulo = function(base, altura) {
  const area = (base * altura) / 2;
  return area;
};
const base = 8;
const altura = 6;
const area = calcularAreaTriangulo(base, altura);

console.log("El área del triángulo es:", area);


// Realizar una función flecha que calcule el área de un triángulo
const calculaArea3 = ( base, altura) => base * altura / 2;
console.log(`Resultado usando arrow function: ${calculaArea3(12,20)}`)

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));
imprimirArea(12, 20);





//ACTIVIDAD
// Función flecha para calcular el área del círculo







/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/





/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */


const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

  
const enviaAParrafo = ( mensaje ) => {
  const saluda ="Hola, buen dia";
   const referencia =  document.getElementById("saludo-callback");
   referencia.innerHTML = `${saluda} ${mensaje}`;   
}
imprimirMensaje( alert );