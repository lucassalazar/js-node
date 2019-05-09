const contadorA = require('./9-instanciaUnica'); // Ambos os contadores utilizarão a mesma instancia de objeto criada
const contadorB = require('./9-instanciaUnica');

const contadorC = require('./10-instanciaNova')(); // () invoca a função factory
const contadorD = require('./10-instanciaNova')(); // Uma nova instancia de objeto é criada

contadorA.inc(); // Incrementa o atributo valor do objeto retornado \\ 2
contadorA.inc(); // Incrementa mais uma vez o valor do objeto retornado \\ 3
console.log(contadorA.valor, contadorB.valor); // Embora o ContadorB não tenha sido incrementado, o atributo valor recebera 3, pois o node faz cache dos módulos retornados

contadorC.inc(); 
contadorC.inc();
console.log(contadorD.valor, contadorC.valor); // O valor do ContadorD permanece pois nesse caso o modulo exportado utiliza uma função factory, logo o valor não é cacheado