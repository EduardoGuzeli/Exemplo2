// DECLARAÇÕES E VARIAVEIS
// VAR, LET E CONST

let nome = "Fiap";
console.log(nome);
let nome2 = "Dev";
console.log(nome);

if(true){
    var avatar = "Fiapinho";
    
}

console.log(avatar);

let exemplo1 = "Ola Dev-Let";
console.log(exemplo1);

const exemplo2 = "Ola Dev-Const";
console.log(typeof exemplo2);
console.log(exemplo2);

let exemplo3 = 20;
console.log(typeof exemplo3);
console.log( exemplo3);

let exemplo4 = true;
console.log(typeof exemplo4);
console.log(exemplo4);

let exemplo5 ={nome:"Fiap"};
console.log(typeof exemplo5);
console.log(exemplo5);

let exemplo6 = ["PHP", "JAVA", "HTML"];
console.log(exemplo6);

//valor undefined

let exemplo7;
console.log(exemplo7);

//valor null
let exemplo8 = null;
console.log(exemplo8)

//OPERADORES ARITIMÉTICOS

const valor1 = 10;
const valor2 = 20;
console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);
console.log(valor1 + valor2 + 20);

//OPERADORES LÓGICOS

const valor3 = 40;
const valor4 = 20;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 > 10);

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); // COMPARA
console.log(valor3 === valor4); //COMPARA E VERIFICA o tipo string int etc

//Utilizando as variáveis p (preço do produto) e 
//v(valor do desconto), crie uma nova variável 
//chamada precoFinal que subtraia o desconto do preço e exiba o resultado.		

const p = 100;
const v = 10; 
const precoFinal = (p - v)
console.log("O desconto é de :",precoFinal, "reais")


// ESTRUTURAS CONSICIONAIS

// if
if(true) {
    console.log("Verdadeiro")
}
let nome3 = "Fiap";

//if else
if(nome3 =="Fiap"){
    console.log("Nome Correto")
}else{
    console.log("Nome Errado")
}

//if, if else, else encadeado/aninhado
let idade = 13;

if(idade <= 13){
    console.log("Uma criança")
}else if(idade >13 && idade < 18){
    console.log("Um Adolecente")
}else{
    console.log("Um Adulto")
}

//switch case

let times = "Santos"

switch(times){
    case "Santos":
        console.log("Um time de tradição")
        break;
    case "São Paulo":
        console.log("Sem tradição")
        break;
    case "Palmeiras":
        console.log("Sem Mundial")
        break;
    default:
        console.log("Nenhumas das opções(corinthians")
}

// condicional ternaria 

let numero = 100;
let resultado = numero == 100? "Certo":"Errado";
console.log(resultado)

let usuario = "Fiap";
let usuariologado = usuario == "Fiap" ? "logado com sucesso":"Usuario invalido";
console.log(usuariologado);





// ( metodo)
// {objeto}
// [array]