// arr não é um nome muito autoexplicativo por tanto sera renomeado para numeros
const numeros = [1, 2, 3, 4, 5];

// output não é um nome autoexplicativo por tanto o array foi renomeado para numerosMaioresQueQuatro
const numerosMaioresQueQuatro =
  numeros /* o array "arr" não foi declarado por tanto daria erro, portanto foi substituido por numeros */
    // metodo filter vai interar entre todos os elementos do array numeros, para cada elemento vai executar a funcao 
    // callback, funcao essa que pega o elemento da vez e verifica se ele é maior que quatro, se for o item é retornado
    // para o array numerosMaioresQueQuatro
    .filter((x) => x > 4);

// mostra o array numerosMaioresQueQuatro no console
console.log(numerosMaioresQueQuatro);
