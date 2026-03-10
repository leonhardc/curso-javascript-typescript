// IIFE - Immediately Invoked Function Expression (Expressão de Função Imediatamente Invocada)

(function(nome, peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`${nome} tem o IMC de ${imc.toFixed(2)}`);
})("João", 70, 1.75);

// IIFE com função anônima
(function() {
    const nome = "Maria";
    const peso = 60;
    const altura = 1.65;
    const imc = peso / (altura * altura);
    console.log(`${nome} tem o IMC de ${imc.toFixed(2)}`);
})();

// IIFE com função nomeada
(function calcularIMC(nome, peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`${nome} tem o IMC de ${imc.toFixed(2)}`);
})("Carlos", 80, 1.80);
