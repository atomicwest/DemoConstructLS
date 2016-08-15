function ForceUser(forceLvl) {
  this.meter = forceLvl;
  this.powers = [];
  this.neutral = ["push", "pull", "sight", "jump", "speed"];
};

ForceUser.prototype.train = function() {
  this.meter += 1;
  if (this.meter >= 10) {
    newNeutral = this.neutral.shift();
    this.powers.push(newNeutral);
    this.meter -= 10;
  }
}

module.exports = ForceUser;
