const crypto = require("crypto");
const start = Date.now();

function logHasTime(){
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", ()=>{
    console.log(`Hash: ${Date.now() - start}`);
})
}

//utilizando o recurso de Threading pool do Node
logHasTime();
logHasTime();
logHasTime();
logHasTime();
