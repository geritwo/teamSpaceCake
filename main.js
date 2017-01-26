// Main functions

console.log('Controller initiated.');


var x = await ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.getPosArr);
console.log(x);

document.querySelector('button').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setMarker)
});
