// declaracao de um arrayList de objetos, objetos esses que são usuarios que tem como atributos o primeiro nome,
// sobrenome e idade
const users = [
  { firstName: "john", lastName: "colben", age: 26 },
  { firstName: "jimmy", lastName: "fred", age: 75 },
  { firstName: "sam", lastName: "boston", age: 50 },
  { firstName: "ronald", lastName: "bristh", age: 26 },
];

// "output" renomeado para nomesJuntos, pois sera o array que vai armazenar o primeiro e segundo nome de cada usuario
// em uma string so
const nomesJuntos = users.map(
  (user /* x renomeado para user para ficar mais semantico */) =>
    // pega o atributo firstName do usuario da vez concatena com um espaço vazio e em seguinda concatena com o sobrenome
    user.firstName + " " + user.lastName
); // ao fim tera um novo array com o mesmo numero de elementos de users, porem seus elementos vao ser o nome e sobrenome juntos

// mostra o array nomesJuntos no console
console.log(nomesJuntos);
