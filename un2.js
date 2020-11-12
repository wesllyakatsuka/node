/*Nesse arquivo o método unlink só deleta o arquivo após a leitura completa. 
Diferente do arquivo un.js no qual estávaos misturando métodos bloqueantes
com os não bloqueantes.*/

const fs = require("fs");

fs.readFile("arquivo.txt",(err, data) =>{
    if(err) throw err;
    console.log(data);

    fs.unlink("arquivo.txt", (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo Excluído com sucesso!")
    });

});