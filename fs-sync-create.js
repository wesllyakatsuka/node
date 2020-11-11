//Usando a biblioteca "fs" FileSystem
const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo")

const dados = fs.readFileSync("arquivo.txt");

console.log("Executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));


//echo "Criando txt ficticio para ler com a API nativa de FS > arquivo.txt
//for /L %i in (1,1,14) do type arquivo.txt >> arquivo.txt