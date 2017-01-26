// Display controller


var display = (function () {
  //var issCoords = nasaAPI.getISSCoords();

  var options = {
          sky: true,
          atmosphere: true,
          dragging: true,
          tilting: true,
          zooming: true,
          center: [46.8011, 8.2266],
          zoom: 2
  };

  var earth = new WE.map('earth_div', options);
  earth.setView([46.8011, 8.2266], 2);

  // Texture
  WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    bounds: [[-85, -180], [85, 180]],
    minZoom: 0,
    maxZoom: 16,
    attribution: 'WebGLEarth example',
    tms: true,
  }).addTo(earth);

  // Add marker
  var marker = WE.marker(
    [47.49, 19.04],
    "./assets/satellite-station.svg",
    60, 60)
    .addTo(earth)
  marker.bindPopup('<b>ISS marker position.</b>');

  var setMarkerPosition = function (IssPos) {
    var arrOfPosition = [];
    arrOfPosition[0] = IssPos.iss_position.latitude;
    arrOfPosition[1] = IssPos.iss_position.longitude;
    marker.setLatLng(arrOfPosition);
    earth.setView(arrOfPosition, 2);
    console.log(arrOfPosition);
  };

  return {
    marker: marker,
    earth : earth,
    setMarker: setMarkerPosition
  }
})();
