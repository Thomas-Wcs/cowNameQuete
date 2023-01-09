const nom = 'Thomas G.';
console.log(nom)
const campus = "LYON";
console.log(campus)

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Thomas.G Lyon",
    e : "oO",
    T : "U "
}));
module.exports = { 
    nom,
    campus,
    cowsay
}
