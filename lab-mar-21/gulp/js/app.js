var exports = {}; // Dummy declaration to let this file co-exist with test.js
var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');
var arg = 12;
document.addEventListener('DOMContentLoaded', function() {
  pAddFiveIn.textContent = 'Calling addFive() with an argument of ' + arg;
  pAddFiveOut.textContent = 'addFive() returned ' + addFive(arg);
  // Add more JS code here to display your other function call results.
  pAddFiveIn.textContent  = 'Calling sumArray() with an argument of ' + arg;
  pAddFiveOut.textContent = 'sumArray() returned ' + sumArray([9,1,2]);

});
