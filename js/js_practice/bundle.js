/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Jedi = __webpack_require__(1)
	var Sith = __webpack_require__(2)
	var Sentinel = __webpack_require__(3)
	var Maurauder = __webpack_require__(4)
	var ForceUser = __webpack_require__(6)

	window.Jedi = Jedi;
	window.Sith = Sith;
	window.Sentinel = Sentinel;
	window.Maurauder = Maurauder;
	window.ForceUser = ForceUser;

	//run webpack --watch root.js bundle.js


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ForceUser = __webpack_require__(6);
	var inherit = __webpack_require__(5)


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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ForceUser = __webpack_require__(6)
	var inherit = __webpack_require__(5)

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Jedi = __webpack_require__(1);
	var inherit = __webpack_require__(5)

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Sith = __webpack_require__(2)
	var inherit = __webpack_require__(5)

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


/***/ },
/* 5 */
/***/ function(module, exports) {

	var inherit = function (parent, child) {
	  var Surrogate = function () {};
	  Surrogate.prototype = parent.prototype;
	  child.prototype = new Surrogate();
	  child.prototype.constructor = child;
	}

	module.exports = inherit;


/***/ },
/* 6 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);