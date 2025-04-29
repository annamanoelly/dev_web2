//let nome = prompt("Qual seu nome?");
//let idade = prompt("Qual sua idade?");
//console.log(nome, idade);

let maiorNumero = Math.max(1, 5, 2, 3);
console.log(maiorNumero); 

let menorNumero = Math.min(1, 5, 2, 3);
console.log(menorNumero); 

let arredondarParaCima = Math.ceil(3.47989898);
console.log(arredondarParaCima); 

let arredondarParaBaixo = Math.ceil(3.47989898);
console.log(arredondarParaBaixo);

//let nome = "Maria";
//let idade = "22 anos"
//console.log("Maria");
//console.log(`Meu nome é ${nome} e tenho ${idade}`); 

let idade = 19
if(idade > 18) {
    console.log('Pode entrar')
}

//let nome = 'Pedro'
//if(nome == 'João') {
//    console.log('Seu nome é João')
//} else{
//    console.log('O seu nome não é João')
//}


let velocidade = 100
if(velocidade <= 80) {
    console.log('Não foi multado')
} else{
    console.log("Foi multado")
}

//ELSE IF

let a = 5
let b = 3
if(a + b == 3) {
    console.log('O resultado é 3')
} else if (a == 4){
    console.log('O valor de a é 4')
} else if(b == 3) {
    console.log('O valor de b é 3')
} else {
    console.log('Nenhuma das condições acima"')
}

let nome = 'Miranda'
if (nome != undefined) {
    console.log('Nome esta definido')
} else if(nome == "Miranda" && nome.lenght > 5) {
    console.log('O nome é Miranda')
} else {
    console.log('Não é miranda')
}

// WHILE

//let x = 10
//while(x>0) {
  //  console.log(x)
    //x = x - 1
//} 

//let x = 10
//while (x > 0) {
//    console.log("o x é " + x)
  //  x = x -1
//}

/*let y = 0
while (y<= 10){
    console.log(y)
    y = y + 1 
}

//do while

let o = 0
do {
    console.log(o)
    o = o + 1
}while(o < 5)*/


/*let x = 100
do {
    console.log(x/2)
    x = x- 5
}while (x >= 0)*/    

for(let numero  = 2; numero < 100; numero = numero * 2){
    console.log("O numero é:" + numero)
}

for (let i = 0; i < 100; i = i + 3) {
    console.log(`A soma de i com 2 é: ${i + 2}`)
}