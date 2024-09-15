// Função de multiplicação que recebe dois números e retorna a multiplicação deles
const multiplicar = (a: number, b: number): number => a * b;

// Função de saudação que recebe um nome e retorna a concatenação “Olá “ + nome
const saudacao = (nome: string): string => `Olá ${nome}`;

// Exemplos de uso
const resultadoMultiplicacao = multiplicar(5, 10);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`); // Saída: 50

const mensagemSaudacao = saudacao("Maria");
console.log(mensagemSaudacao); // Saída: Olá Maria