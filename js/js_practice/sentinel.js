var Jedi = require("./jedi.js");
var inherit = require("./inherit.js")

function Sentinel(name,rank, lsColor, prestigeLvl, forceLvl) {
  ForceUser.call(this, forceLvl)
  Jedi.call(this, name, rank, lsColor);
  this.prestigeLvl = prestigeLvl;
}

var Surrogate = function() {};
Surrogate.prototype = Jedi.prototype;

inherit(Jedi, Sentinel)

// var newSentinel = new Surrogate();
// Sentinel.prototype = new Surrogate();
// Sentinel.prototype.constructor = Sentinel;

Sentinel.prototype.sayLvl = function() {
  console.log(`${this.rank} at ${this.prestigeLvl}`)
}

module.exports = Sentinel;
