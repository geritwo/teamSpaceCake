// Main functions

console.log('Controller initiated.');
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
    var flag = 0;
    window.timer = setInterval(function(){
      if (flag === 0 || display.positions.length < 2) {
        ajax.open('GET', 'http://api.open-notify.org/iss-now.json/', '', updateISSInfo, false);
        flag = 1;
      } else {
        var len = display.positions.length;
        var calcPosLat = (2 * display.positions[len-1][0] - display.positions[len-2][0]).toFixed(3);
        var calcPosLon = (2 * display.positions[len-1][1] - display.positions[len-2][1]).toFixed(3);
        display.setMarker(calcPosLat, calcPosLon);
        reqPlaceName(calcPosLat, calcPosLon);
        flag = 0;
      }
    }, 5000);
    document.querySelector('#auto').classList.toggle('active');
  } else {
    clearInterval(window.timer);
    document.querySelector('#auto').classList.toggle('active');
  }
}
