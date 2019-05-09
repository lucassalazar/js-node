const _ = require('lodash'); // Quando referenciada a pasta da biblioteca, a função require busca um arquivo chamado index.js e o carrega.

setInterval(() => console.log(_.random(50, 60)), 2000);