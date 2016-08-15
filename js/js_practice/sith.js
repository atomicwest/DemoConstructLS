var ForceUser = require("./forceUser.js")
var inherit = require("./inherit.js")

function Sith(name, rank, lsColor) {
  this.name = name;
  this.rank = rank;
  this.lsColor = lsColor;
  this.available = ["grip",  "drain", "lightning", "destruction"];
  this.align = "dark";
}

inherit(ForceUser, Sith)

Sith.prototype.gainPower = function () {
  this.meter += 1;
  if ((this.meter >= 20) && (this.neutral.length === 0))  {
    let newPower = this.available.shift();
    this.powers.push(newPower);
    this.meter -= 20;
  }
}

Sith.prototype.sayCrystal = function() {
  if (this.lsColor === "red") {
    console.log("Synthetic Kyber");
  } else {
    console.log("Adegan");
  }
}



module.exports = Sith;
