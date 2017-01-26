// Find the ISS!

// AJAX API Calls


  // Internal variable
  var issCoords = [];

  // XHR
  function fetchCoords () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true);
    xhr.send(null);

    xhr.onreadystatechange = initData;

    function initData() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var freshCoords = JSON.parse(xhr.response);
      }
      setISSCoords(freshCoords);
    };
  }

  function setISSCoords(data) {
    issCoords = data;
  };

  function getISSCoords() {
    fetchCoords();
    return issCoords;
  };


var display = (function () {
  //var issCoords = nasaAPI.getISSCoords();

  var options = {
          sky: true,
          atmosphere: true,
          dragging: true,
          tilting: true,
          zooming: false,
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
    tms: true
  }).addTo(earth);

  // Add marker
  var marker = WE.marker([47.49, 19.04], "./satellite-station.svg", 60, 60).addTo(earth)
  marker.bindPopup('<b>ISS is currently here!</b>');

  return {
    marker: marker,
    earth : earth
  }
})();
