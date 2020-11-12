const fs = require("fs");

//método não bloqueante, chama o callback para tratar o erro
fs.readFile("arquivo.txt",(err, data)=>{
    if(err) throw err;
    console.log(data);
});
//Leu o arquivo mas durante a sua leitura foi deletado porque o método acima
//enviava o comando para deletar
fs.unlinkSync("arquivo.txt");