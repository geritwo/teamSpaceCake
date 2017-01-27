// Main functions

console.log('Controller initiated.');

// Init ISS marker, get position, set Earth view
ajax.open('GET', 'https://api.open-notify.org/iss-now.json/', '', updateISSInfo);
display.earth.setView([display.ISSMarker.W, display.ISSMarker.X]);

// Handle Button presses
document.querySelector('#path').addEventListener('click', function () {
  display.showPath();
});

document.querySelector('#position').addEventListener('click', function () {
  ajax.open('GET', 'https://api.open-notify.org/iss-now.json/', '', updateISSInfo);
});

// Update ISS info
function updateISSInfo(issPos) {
  var lat = issPos.iss_position.latitude;
  var lon = issPos.iss_position.longitude;
  display.setMarker(lat, lon);
  reqPlaceName(lat, lon);
};
