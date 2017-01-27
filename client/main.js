// Main functions

console.log('Controller initiated.');

// Init ISS marker
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);

document.querySelector('#path').addEventListener('click', function () {
  display.showPath();
});

// Handle Update Button presses
document.querySelector('#position').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
});

document.querySelector('#deletePath').addEventListener('click', function () {
  display.deletePath();
});


function updateISSInfo(issPos) {
  var lat = issPos.iss_position.latitude;
  var lon = issPos.iss_position.longitude;
  display.setMarker(lat, lon);
  reqPlaceName(lat, lon);
};
