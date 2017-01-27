// Main functions

console.log('Controller initiated.');

// init
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setMarker);

document.querySelector('#position').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', display.setMarker)
});

document.querySelector('#path').addEventListener('click', function () {
  display.showPath();
});
