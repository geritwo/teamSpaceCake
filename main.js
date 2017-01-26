// Main functions

console.log('Controller initiated.');

// Init ISS marker
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);

// Handle Update Button presses
document.querySelector('button').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
});

function updateISSInfo(issPos) {
  var lat = issPos.iss_position.latitude;
  var lon = issPos.iss_position.longitude;
  display.setMarker(lat, lon);
  reqPlaceName(lat, lon);
};
