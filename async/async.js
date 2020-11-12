function soma(x){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 20); 
       //espera 3000 = 3 segundos
       },3000);   
    })  
}
soma(30)
.then((resultado)=>{
    console.log(`Resolvido, resultado: ${resultado}`);

}); 