// Main functions

console.log('Controller initiated.');


ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setupISSmarker);

document.querySelector('button').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setMarker)
});
