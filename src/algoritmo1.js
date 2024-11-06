// declaração de um arraylist com 5 elementos
// como o nome do array é numeros e realmente so tem numeros inteiros dentro dele a semantica esta ok
const numeros = [1, 2, 3, 4, 5];

// o metodo map vai interar no array "numeros" e para cada elemento vai executar a funcao
// de callback passada como parametro, esta funcao vai pegar o elemento da vez e retornar esse elemento 
// vezes 2 ou seja seu dobro, ao fim o map irá retornar um novo array que vai ficar armazenada
// na constante numerosDobro
const numerosDobro = numeros.map((numero) => numero * 2);

// mostra o array numerosDobro no console
console.log(numerosDobro);
