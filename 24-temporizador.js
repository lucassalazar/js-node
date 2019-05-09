const schedule = require('node-schedule');
                                    //s min h year month day
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 2', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function() {
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1!');
}, 20000);

// setImmediate: dispara uma função imediatamente
// setInterval: dispara uma função a cada tanto tempo

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // 1-5 de Seg a Sex
regra.hour = 17; // Hora
regra.second = 30; // Segundo

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});