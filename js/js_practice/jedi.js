var ForceUser = require("./forceUser.js");
var inherit = require("./inherit.js")


function Jedi(name, rank, lsColor) {
  this.name = name;
  this.rank = rank;
  this.lsColor = lsColor;
  this.missions = [];
  this.available = ["heal","mind trick", "absorb", "barrier"]
  this.align = "light"
}

inherit(ForceUser, Jedi)

Jedi.prototype.gainWisdom = function () {
  this.meter += 1;
  if ((this.meter >= 20) && (this.neutral.length === 0))  {
    let newPower = this.available.shift();
    this.powers.push(newPower);
    this.meter -= 20;
  }
}

Jedi.prototype.setMissions = function () {
  var argsArray = Array.prototype.slice.call(arguments); //deep dupe of arguments object
  argsArray.forEach(function(mission) {
    // console.log(mission)
    this.missions.push(mission)
    //do something else with each mission
  })
}

Jedi.prototype.sayColor = function () {
  console.log(`${this.name} has a lightsaber color of ${this.lsColor}`)
}

Jedi.prototype.saySomething = function (something) {
  console.log(`${this.name} says ${something}`)
}

module.exports = Jedi;
