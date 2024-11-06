// declaracao de um arrayList com 5 elementos
// como o nome do array é "numbers", numeros em ingles, e realmente so tem numeros inteiros dentro dele a semantica esta ok
const numbers = [1, 2, 3, 4, 5];

// obs: nome na constante alterado para ficar mais semantica
const doubleNumbers =
  numbers /* o array "arr" não foi declarado por tanto daria erro */
    .map((number) => {
      // o map vai interar em todos os elementos do array "numbers"
      return number * 2; // e para cada item ira retornar o item vezes 2
    }); // ao fim o map vai retornar um novo array com os elementos de "numbers" multiplicados por 2

// mostra o array numbers no console
console.log(numbers);
// mostra o array doubleNumbers no console
console.log(doubleNumbers);
