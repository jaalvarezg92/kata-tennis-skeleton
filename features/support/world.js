var {setWorldConstructor} = require('cucumber');
const Zombie = require('zombie');
Zombie.localhost('localhost', 3000);
Zombie.silent = true;
const browser = new Zombie();

// browser, visit will be available in the step definition
function World() {
  this.browser = browser;
  
  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

module.exports = function () {
  this.World = World;
};

setWorldConstructor(World)