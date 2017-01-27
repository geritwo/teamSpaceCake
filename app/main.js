// Main functions

console.log('Controller initiated.');

display.dateTime();
// Init ISS marker, get position, set Earth view
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
display.earth.setView([display.ISSMarker.W, display.ISSMarker.X]);

// Handle Button presses
document.querySelector('#path').addEventListener('click', function () {
  display.showPath();
});

document.querySelector('#position').addEventListener('click', function () {
  ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo);
});

document.querySelector('#auto').addEventListener('click', autoUpdate);

// Update ISS info
function updateISSInfo(issPos) {
  var lat = issPos.iss_position.latitude;
  var lon = issPos.iss_position.longitude;
  display.setMarker(lat, lon);
  reqPlaceName(lat, lon);
};

// Auto update position
function autoUpdate() {
  if (!document.querySelector('#auto').className) {
    window.timer = setInterval(function(){
      ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo, false);}, 10000);
    document.querySelector('#auto').classList.toggle('active');
  } else {
    clearInterval(window.timer);
    document.querySelector('#auto').classList.toggle('active');
  }
}
