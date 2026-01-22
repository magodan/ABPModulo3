// Autor: @DanielGodoy - 2026
// Proyecto ABP - Módulo 3: Fundamentos de Programación en JavaScript

// ============================================
// LECCIÓN 1: Introducción al Lenguaje JavaScript
// ============================================
console.log('='.repeat(50));
console.log('Modulo 3 - ABP');
console.log('Calculadora Interactiva');
console.log('='.repeat(50));

// Usar prompt() para recibir datos
let nombre = prompt('Ingresa tu nombre:');

// Usar alert() para mensajes
if (nombre && nombre.trim() !== '') {
    alert(`¡Hola ${nombre}! Bienvenido a la calculadora.`);
} else {
    alert('Bienvenido usuario anónimo');
    nombre = 'Usuario';
}

console.log(`Usuario: ${nombre}`);
console.log('');

// ============================================
// LECCIÓN 2: Variables, Expresiones y Sentencias Condicionales
// ============================================

/** @param {*} valor @returns {boolean} */
function validarNumero(valor) {
    return !isNaN(valor) && valor !== null && valor !== '' && !isNaN(Number(valor));
}

// Solicitar números con validación
let numero1, numero2;
let intentos = 0;

do {
    numero1 = Number(prompt('Ingresa el primer número:'));
    if (!validarNumero(numero1)) {
        alert('Por favor ingresa un número válido');
        intentos++;
    } else {
        break;
    }
} while (intentos < 3);

if (!validarNumero(numero1)) {
    numero1 = 10; // Valor por defecto
    alert('Usando valor por defecto: 10');
}

intentos = 0;
do {
    numero2 = Number(prompt('Ingresa el segundo número:'));
    if (!validarNumero(numero2)) {
        alert('Por favor ingresa un número válido');
        intentos++;
    } else {
        break;
    }
} while (intentos < 3);

if (!validarNumero(numero2)) {
    numero2 = 5; // Valor por defecto
    alert('Usando valor por defecto: 5');
}

console.log(`Números ingresados: ${numero1} y ${numero2}`);
console.log('');

// ============================================
// LECCIÓN 3: Arreglos y Ciclos
// ============================================

// Crear arreglo con elementos
const numeros = [numero1, numero2, 15, 20, 30, 45];
console.log('Arreglo de números:', numeros);

/** @param {Array<number>} arreglo @param {number} minimo @returns {Array<number>} */
function filtrarMayores(arreglo, minimo) {
    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > minimo) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

/** @param {Array<number>} arreglo @returns {Array<number>} */
function filtrarPares(arreglo) {
    const resultado = [];
    let i = 0;
    while (i < arreglo.length) {
        if (arreglo[i] % 2 === 0) {
            resultado.push(arreglo[i]);
        }
        i++;
    }
    return resultado;
}

console.log('Números mayores que 10 (for):', filtrarMayores(numeros, 10));
console.log('Números pares (while):', filtrarPares(numeros));
console.log('');

// ============================================
// LECCIÓN 4: Funciones en JavaScript
// ============================================

/** @param {number} a @param {number} b @returns {number} */
function sumar(a, b) { return a + b; }

/** @param {number} a @param {number} b @returns {number} */
function restar(a, b) { return a - b; }

/** @param {number} a @param {number} b @returns {number} */
function multiplicar(a, b) { return a * b; }

/** @param {number} a @param {number} b @returns {number} @throws {Error} */
function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

/** @param {number} a @param {number} b @returns {Object} */
function calcularTodo(a, b) {
    const resultado = {
        suma: sumar(a, b),
        resta: restar(a, b),
        multiplicacion: multiplicar(a, b),
        division: null
    };
    
    try {
        resultado.division = dividir(a, b);
    } catch (error) {
        resultado.division = `Error: ${error.message}`;
    }
    
    return resultado;
}

console.log('=== Operaciones con Funciones ===');
console.log(`Suma: ${sumar(numero1, numero2)}`);
console.log(`Resta: ${restar(numero1, numero2)}`);
console.log(`Multiplicación: ${multiplicar(numero1, numero2)}`);

try {
    console.log(`División: ${dividir(numero1, numero2)}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

const resultados = calcularTodo(numero1, numero2);
console.log('Todos los resultados:', resultados);
console.log('');

// ============================================
// LECCIÓN 5: Conceptos Básicos de Objetos
// ============================================

class Calculadora {
    /** @param {number} num1 @param {number} num2 */
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.resultado = 0;
        this.operacion = '';
    }
    
    sumar() {
        this.resultado = this.num1 + this.num2;
        this.operacion = 'suma';
    }
    
    restar() {
        this.resultado = this.num1 - this.num2;
        this.operacion = 'resta';
    }
    
    multiplicar() {
        this.resultado = this.num1 * this.num2;
        this.operacion = 'multiplicación';
    }
    
    dividir() {
        if (this.num2 === 0) {
            throw new Error('No se puede dividir por cero');
        }
        this.resultado = this.num1 / this.num2;
        this.operacion = 'división';
    }
    
    mostrarResultado() {
        console.log(`${this.operacion}: ${this.num1} y ${this.num2} = ${this.resultado}`);
    }
}

// Crear arreglo de objetos (múltiples calculadoras)
const calculadoras = [
    new Calculadora(numero1, numero2),
    new Calculadora(10, 5),
    new Calculadora(20, 4),
    new Calculadora(100, 10)
];

console.log('=== Operaciones con Objetos ===');

// Usar forEach() para recorrer arreglo de objetos
calculadoras.forEach((calc, index) => {
    console.log(`\nCalculadora ${index + 1}:`);
    calc.sumar();
    calc.mostrarResultado();
    calc.restar();
    calc.mostrarResultado();
    calc.multiplicar();
    calc.mostrarResultado();
    try {
        calc.dividir();
        calc.mostrarResultado();
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
});

// Usar map() para transformar el arreglo
const resultadosCalculadoras = calculadoras.map((calc, index) => {
    calc.multiplicar();
    return {
        id: index + 1,
        num1: calc.num1,
        num2: calc.num2,
        resultado: calc.resultado,
        operacion: calc.operacion
    };
});

console.log('\n=== Resultados con map() ===');
console.table(resultadosCalculadoras);

// Calculadora principal
console.log('\n=== Calculadora Principal ===');
const calculadora = new Calculadora(numero1, numero2);

calculadora.sumar();
calculadora.mostrarResultado();

calculadora.restar();
calculadora.mostrarResultado();

calculadora.multiplicar();
calculadora.mostrarResultado();

try {
    calculadora.dividir();
    calculadora.mostrarResultado();
} catch (error) {
    console.log(`Error: ${error.message}`);
    alert(`Error: ${error.message}`);
}

// ============================================
// Resumen Final
// ============================================
console.log('\n' + '='.repeat(50));
console.log('RESUMEN');
console.log('='.repeat(50));
console.log(`Usuario: ${nombre}`);
console.log(`Números: ${numero1} y ${numero2}`);
console.log(`Calculadoras creadas: ${calculadoras.length}`);
console.log('='.repeat(50));

alert(`¡Gracias ${nombre}! Revisa la consola para ver los resultados.`);
