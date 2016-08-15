var Sith = require("./sith.js")
var inherit = require("./inherit.js")

function Maurauder(name, rank, lsColor, prestigePwr, forceLvl) {
  ForceUser.call(this, forceLvl);
  Sith.call(this, name, rank, lsColor);
  this.prestigePwr = prestigePwr;
}

inherit(Sith, Maurauder)

// var Surrogate = function(){};
//
// Surrogate.prototype = Sith.prototype;
// Maurauder.prototype = new Surrogate();
// Maurauder.prototype.constructor = Maurauder;

Maurauder.prototype.usePwr = function() {
  console.log(`${this.name} uses ${this.prestigePwr}`)
}

module.exports = Maurauder;
