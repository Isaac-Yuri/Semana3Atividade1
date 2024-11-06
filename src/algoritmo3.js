// declaracao de um array com 5 elementos
// como o nome do array é numbers que é numeros em ingles, e realmente so tem numeros inteiros dentro dele a semantica esta ok
const numbers = [1, 2, 3, 4, 5];

const isOdd = (x) => x % 2;

const oddNumbers = // o nome "output" não dizia muita coisa, por tanto sera renomeado para oddNumbers
  numbers /* o array "arr" não foi declarado por tanto daria erro, portanto foi substituido por numbers */
    // o metodo filter sera executado e vai interar no elementos de numbers, e para cada elemento vai executar a
    // callback, callback essa que é uma arrow function que pede um numero como parametro e verifica se ele é impar ou não
    .filter((number) => {
      /* qualquer numero inteiro que dividido por 2 ter o resto da divisao inteira maior que 0 é impar */
      return number % 2 != 0;
    });

// mostra oddNumbers no console
console.log(oddNumbers);
