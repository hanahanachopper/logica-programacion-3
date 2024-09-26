//Solicitar el número
function solicitarNumero() {
    let numero;
    while (true) {
        numero = prompt("Por favor, ingresa un número entero no negativo:");
        // Comprobar si el usuario ha cancelado el prompt
        if (numero === null) {
            return; // Salir de la función si el usuario cancela
        }
        // Convertir la entrada a un número
        numero = Number(numero);
        // Verificar si es un número entero no negativo
        if (Number.isInteger(numero) && numero >= 0) {
            return numero; // Devolver el número si es válido
        } else {
            alert("Error: Por favor, ingresa un número entero no negativo.");
        }
    }
}

//Calcular factorial
function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

//Mostrar el resultado en el DOM
function mostrarResultado(numero, factorial) {
    const divResultado = document.getElementById("resultado");
    divResultado.textContent = `El factorial de ${numero} es: ${factorial}`;
}

const numero = solicitarNumero(); // Pedir el número
if (numero !== undefined) { // Si se ingresó un número
    const factorial = calcularFactorial(numero); // Calcular el factorial
    mostrarResultado(numero, factorial); // Mostrar el resultado
}