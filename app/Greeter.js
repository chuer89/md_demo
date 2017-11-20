//
var config = require('./config.json');

module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  // greet.textContent = "H1i there and greetings!";
  return greet;
}