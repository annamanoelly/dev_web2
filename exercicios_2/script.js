/*1.Armazene em valores em variáveis com cada um dos tipos de dados vistos;
String, Number e Boolean;
let nome = "Maria"
let idade = 5
let estouEstudando = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estouEstudando);
*/

/*2.Cria uma estrutura if que verifica a entrada na balada, se tiver mais de 18
anos pode entrar;
● Armazenar a idade em uma variável com let;
● Insira uma instrução console.log(“Pode entrar”), caso a pessoa tenha mais
que 18 anos; 

let idade = "16"
if (idade >= 18) {
    console.log("Pode entrar");
}
*/

/*3.Crie uma constante com o seu nome como valor;
● Depois uma estrutura if que verifica se o seu nome é o que está na
constante;
● Se estiver, emita uma mensagem de saudação com console.log(); 
const nome = "Anna"
if (nome == "Anna"){
    console.log("Seja bem vinda")
}
*/

/*4.A função Math.pow() exibe a potencia de um número;
● Teste a função com console.log() e as seguintes bases: 2, 3, 18 e o
expoente deve ser 2;
● Recebe 2 argumentos, base e expoente;
● Ex: Math.pow(5,3); 
const num = 18
console.log(Math.pow(2, 2));   
console.log(Math.pow(3, 2));   
console.log(Math.pow(num, 2));   */

/*5.Armazene a velocidade de um carro em uma variável, com o número que
desejar;
● Faça uma estrutura if/else que verifica se ele está acima da
velocidade;
● 80 é a velocidade máxima permitida;
● Se estiver acima ou abaixo exiba mensagens com console.log 
let velocidade = 55
if (velocidade > 80){
    console.log("Acima da velocidade, levou multa")
} else{
    console.log("abaixo da velocidade")
}*/

/*6.Faça uma estrutura if/else para verificar se um usuário pode dirigir;
● Armazene em variáveis algumas informações sobre o usuário: idade, se tem
CNH
● Se a idade for maior que 18 e não possuir CNH, exiba uma
mensagem;
● Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
● Se não tiver 18 nem CNH, exiba outra mensagem; 

let idade = 22
let possuiCNH = true;

// Estrutura condicional
if (idade >= 18 && possuiCNH) {
  console.log("Você pode dirigir.");
} else if (idade >= 18 && !possuiCNH) {
  console.log("Você tem idade para dirigir, mas precisa tirar a CNH.");
} else {
  console.log("Você não tem idade nem CNH para dirigir.");
}*/

/*7.Escreva um loop while que exibe números de 0 a 10 no console;
let numero = 0;

while (numero <= 10) {
  console.log(numero);
  numero++;
}*/

/*8.Escreva um loop for que exibe números de 100 a 50 no console; 
let numero = 50;

while (numero <= 100) {
  console.log(numero);
  numero++;
}*/

/*9.Escreva um loop for ou while que exiba qual número é par e qual
número é ímpar,
● O contador deve iniciar em 0 e ir até 50; 
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i + " é par");
    } else {
      console.log(i + " é ímpar");
    }  
}*/

/*10.Verifique se o número é primo!
● Um número primo, é um número natural, maior que 1 e apenas
divisível por si próprio e por 1; 

let numero = 9;
let ehPrimo = true;

if (numero <= 1) {
  ehPrimo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}*/

/* Soma de variáveis
● Crie uma variável chamada a com o valor de 10 e uma
chamada de b com o valor de 5
● Some as duas variáveis em uma nova variável chamada c
● Exiba o resultado de c no console 
let a = 10
let b = 5
let c = a + b 
console.log("A soma de a e b é: " + c)

/*Condicional if e else
● Faça uma condicional if para verificar se a é maior que b
● Se for: mude o valor de resultado para "É maior"
● Se não for: mude o valor de resultado para "É menor"
● Note que a segunda mudança precisa estar em um else
● Imprima o valor de resultado após a condicional */

let a = 10
let b = 5
if (a > b){
    console.log("é maior")
}else{
    console.log("é menor")
}

  



