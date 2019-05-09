module.exports = function(...nomes) { // Parametro rest, recebe os parametros e coloca em um array
  return nomes.map(nome => `Boa semana ${nome}!`);
};