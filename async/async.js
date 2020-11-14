function soma(x){
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Tá de brincadeira');
        }
        setTimeout(()=>{          
            resolve(x + 10); 
       //espera 3000 = 3 segundos
       },3000);   
    })  
}
async function main(){
    try {
        const resultado = await soma(2);
        console.log(`Resultado com Async/Await: ${resultado}`);
    } catch (error) {
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME); 
    }    
}

main();