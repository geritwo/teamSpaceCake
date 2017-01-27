// Main functions

console.log('Controller initiated.');

// Init ISS marker, get position, set Earth view
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
display.earth.setView([display.ISSMarker.W, display.ISSMarker.X]);

// Handle Button presses
document.querySelector('#path').addEventListener('click', function () {
  display.showPath();
});

document.querySelector('#position').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
});

<<<<<<< HEAD:client/main.js
document.querySelector('#deletePath').addEventListener('click', function () {
  display.deletePath();
});


=======
// Update ISS info
>>>>>>> 0450528fdc9a87035df0f6cc659fa0f8dc7335fa:app/main.js
function updateISSInfo(issPos) {
  var lat = issPos.iss_position.latitude;
  var lon = issPos.iss_position.longitude;
  display.setMarker(lat, lon);
  reqPlaceName(lat, lon);
};
