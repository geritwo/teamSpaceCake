// Main functions

console.log('Controller initiated.');

document.querySelector('button').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setMarker)
});
