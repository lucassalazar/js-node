const anonimo = process.argv.indexOf('-a') !== -1; // Verifica de a flag -a foi adicionada pelo usuário
// console.log(anonimo);

if (anonimo) { // Passando a flag -a (anomimo), o programa retornará "Fala anônimo!"
  process.stdout.write('Fala Anônimo!\n'); 
  process.exit();
} else { // Caso a flag não seja enviada, um nome deve ser inserido
  process.stdout.write('Digite o seu nome: ');
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '');

    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit();
  });
}

// Um exemplo de programa que utiliza o process é o npm init

// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help json` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (node) 
// version: (1.0.0) 
// description: teste
// ...