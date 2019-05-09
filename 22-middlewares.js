// Exemplo do funcionamento da lógica do padrão de projeto utilizado pelo framework Express
// Middleware pattern (chain of responsibility)
// O padrão de projeto é uma solução pra um problema recorrente. 
// "Cada padrão descreve um problema no nosso ambiente e o núcleo da sua solução, de tal forma que você possa usar esta solução mais de um milhão de vezes, sem nunca faze-lo da mesma maneira”- Christopher Alexander criador dos Padrões de Projeto.

// Neste exemplo o padrão de projeto middleware é utilizado, utilizando-se de varios middlewares para adicionar atributos a um mesmo objeto. 

               //(contexto, proximo)
const middleware1 = (ctx, next) => {   // O contexto é um objeto e sera passado de um middleware para o outro
  ctx.valor1 = 'mid1';
  next();
};

const middleware2 = (ctx, next) => {
  ctx.valor2 = 'mid2';
  next();
};

const middleware3 = ctx => ctx.valor3 = 'mid3';

const exec = (ctx, ...middlewares) => { // ... operador rest, coloca todos os argumentos recebidos em um array chamado middlewares
  const execMiddleware = indice => {
    middlewares && indice < middlewares.length && // Verifica se o array middleare é verdadeiro e verifica se o indice é menor que o tamanho do array
      middlewares[indice](ctx, () => execMiddleware(indice + 1)); // executa os middlewares na sequencia até que o indice seja igual ao tamanho do array
  }
  execMiddleware(0); // Inicia a funcao execMiddleware, iniciando com o indice 0
}

const ctx = {};
console.log(ctx);

exec(ctx, middleware1, middleware2, middleware3); // A função exec é a cadeia de responsabilidades

// exec(ctx, middleware2, middleware1, middleware3); // A ordem pode ser alterada entre o middleware1 e middleware 2

// exec(ctx, middleware3, middleware1, middleware2); // Apenas o middleware3 sera executado, pois este não possui a função next

console.log(ctx);