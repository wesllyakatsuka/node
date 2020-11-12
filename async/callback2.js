function soma(x, callback){
    return setTimeout(()=>{
        return callback(null, x + 20); 
    //espera 3000 = 3 segundos
    },3000);   
}

//callback function
function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}

soma(30, resolveSoma);