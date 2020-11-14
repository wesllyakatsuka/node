require('./subdirectory/sub');


console.log('---------------------------------------');
//Exibe as informações completas
console.log(`Informações completas: `, process.env);
//Exibe o nome do arquivo
console.log(`Nome do Arquivo: `, __filename );
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Diretório em que foi invocado: `, __process.cwd());
console.log(`Parâmetros de execução: `, process.argv);
console.log(`Ambiente do Servidor: `, process.plataform);
//Exibe apenas as informações do Sistema Operacional
console.log(`Sistema Operacional: `, process.env.OS);
//Exibe apenas as informações do Usuário
console.log(`Usuário no SO: `, process.env.USERNAME);
//Exibe apenas as informações do idioma
console.log(`Idioma: `, process.env.LANG);
//Exibe o nome do servidor
console.log(`Nome do Server: `, process.env.COMPUTERNAME);