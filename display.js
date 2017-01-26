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
  var ISSMarker = WE.marker(
    [0, 0],
    "./assets/satellite-station.svg",
    60, 60)
    .addTo(earth);

  var setMarkerPosition = function (IssPos) {
    var arrOfPosition = [];
    arrOfPosition[0] = IssPos.iss_position.latitude;
    arrOfPosition[1] = IssPos.iss_position.longitude;
    ISSMarker.setLatLng(arrOfPosition);
    earth.setView(arrOfPosition, 2);
    ISSMarker.bindPopup('<b>ISS marker position.</b><br>latitude: '+ arrOfPosition[0] +
     ', longitude: ' +   arrOfPosition[1]);
  };

  var options = {color: '#ff0', opacity: 1, fillColor: '#f00', fillOpacity: 0.1, weight: 2};
  var polygonB = WE.polygon([[50, 3], [51, 2.5]], options).addTo(earth);

  return {
    earth : earth,
    ISSMarker: ISSMarker,
    setMarker: setMarkerPosition,
  }
})();
