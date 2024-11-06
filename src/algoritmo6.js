// pede pro usuario digitar alguma coisa no prompt e armazena na constante input
const input = prompt("Digite um numero"); // mensagem colocada no prompt

// pega o numero que o usuario digitar e convente para inteiro
const inputValue = parseInt(input); // o nome esta parserInt mas a funcao que converte uma string para inteiro é parseInt

// declara um array com tamanho igual ao numero que o usuario digitar e preenche esses espaços com null   
const array = new Array(inputValue).fill(null);

let values = new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1);

console.log(array);
  