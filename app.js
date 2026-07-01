// Variables iniciales del juego
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

console.log("Número Secreto generado:", numeroSecreto); // Para ayudarte a probar en la consola

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    // Si el usuario cancela el prompt o no ingresa un número
    if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    // Condición principal para verificar el número
    if (numeroUsuario == numeroSecreto) {
        // Acertó, usamos el operador ternario para definir el texto en singular o plural
        alert(`¡Acertaste! El número es: ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    } else {
        // No acertó, damos pistas
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        
        // Incrementar el contador de intentos
        intentos++;

        // Verificar si se alcanzó el máximo de intentos permitidos
        if (intentos > maximosIntentos) {
            alert(`Lo siento, agotaste el máximo de ${maximosIntentos} intentos. El número secreto era ${numeroSecreto}.`);
            break; // Rompe el bucle para terminar el juego
        }
    }
}