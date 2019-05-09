// console.log(global);
global.MinhaApp = Object.freeze({ // Qualquer arquivo do projeto terá acesso o objeto MinhaApp
  saudacao() {
    return 'Estou em todos os lugares!'
  },
  nome: 'Sistema legal'
});

