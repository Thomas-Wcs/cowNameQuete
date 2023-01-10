const myInfo = require("./information")
 
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `my name is ${myInfo.nom} i am from ${myInfo.campus}`,
    e : "oO",
    T : "U "
}));