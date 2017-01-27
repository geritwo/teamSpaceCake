// Display controller


var display = (function () {
  //var issCoords = nasaAPI.getISSCoords();
  var positions = [];

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

  // Instantiate marker
  var ISSMarker = WE.marker(
    [0, 0],
    "./assets/satellite-station.svg",
    60, 60)
    .addTo(earth);

  var setMarkerPosition = function (lat, lon) {
    var arrOfPosition = [lat, lon]; // Because built-in method needs an array.
    ISSMarker.setLatLng(arrOfPosition);
    // earth.setView(arrOfPosition);
    ISSMarker.bindPopup('<b>ISS marker position.</b><br>latitude: '+ arrOfPosition[0] +
     ', longitude: ' +   arrOfPosition[1]);
    positions.push(arrOfPosition);
  };

  var getMarkerPosition = function() {

  }

  var showPath = function () {
    if (positions.length > 1) {
      for (var i = 0, l = positions.length - 1; i < l; i++) {
        var options = {color: '#f00', opacity: 1, fillColor: '#f00', fillOpacity: 1, weight: 2};
        // console.log(positions[i+1]);
        var polygonB = WE.polygon([positions[i], positions[i+1], [positions[i+1][0]+1, positions[i+1][1]+1], [positions[i][0]+1, positions[i][1]+1]], options).addTo(earth);
      }
    }
  };

  // var deletePath = function () {
  //   delete.earth.
  // }

  var renderPlaceName = function () {
    var target = document.querySelector('.iss_is_above');
    target.innerHTML = "The ISS is currently above " + placeName + ".";
  }

  return {
    earth : earth,
    ISSMarker: ISSMarker,
    setMarker: setMarkerPosition,
    showPath: showPath,
    renderPlaceName : renderPlaceName,
  }
})();
