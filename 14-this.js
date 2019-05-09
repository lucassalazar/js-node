console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log('Dentro de uma função...');
  console.log(this === exports); // O this dentro da função é diferente do this de onde a funcão foi chamada
  console.log(this === module.exports); // O this de dentro da função é diferente do this de onde a função foi chamada
  console.log(this === global); // O this de dentro da função aponta para o escopo global
  
  // Logo
  this.perigo = '...'; // perigo estará dentro do escopo global, sendo público
};

//this.perigo = '...'; // perigo estará dentro de module.exports

logThis();
console.log(global);
//console.log(module.exports, exports, this);