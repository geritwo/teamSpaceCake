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
          zoom: 100,
          maxAltitude: 30000000, // meters
  };

  var earth = new WE.map('earth_div', options);
  earth.setView([46.8011, 8.2266], 2);

  // Texture
  WE.tileLayer('https://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
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
    "./assets/ISS_01b.svg",
    60, 60)
    .addTo(earth);

  var setMarkerPosition = function (lat, lon) {
    var arrOfPosition = [lat, lon]; // Because built-in method needs an array.
    ISSMarker.setLatLng(arrOfPosition);
    // earth.setView(arrOfPosition);
    ISSMarker.bindPopup('<h3>Live camera feed from the ISS:</h3><iframe width="300" height="auto" src="http://www.ustream.tv/embed/9408562?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>');
    // ISSMarker.bindPopup('<b>ISS marker position.</b><br>latitude: '+ arrOfPosition[0] + ', longitude: ' +   arrOfPosition[1]);
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

  var dateTime = function(id) {
          date = new Date;
          year = date.getFullYear();
          month = date.getMonth();
          months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
          d = date.getDate();
          day = date.getDay();
          days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
          h = date.getHours();
          if(h<10)
          {
                  h = "0"+h;
          }
          m = date.getMinutes();
          if(m<10)
          {
                  m = "0"+m;
          }
          s = date.getSeconds();
          if(s<10)
          {
                  s = "0"+s;
          }
          result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
          document.getElementById(id).innerHTML = result;
          setTimeout('date_time("'+id+'");','1000');
          return true;
  };

  // var deletePath = function () {
  //   delete.earth.
  // }

  var renderPlaceName = function () {
    var target = document.querySelector('.iss_is_above');
    target.innerHTML = "The ISS is currently above " + placeName + ".";
  };

  return {
    earth : earth,
    ISSMarker: ISSMarker,
    setMarker: setMarkerPosition,
    showPath: showPath,
    renderPlaceName : renderPlaceName,
    dateTime: dateTime,
  }
})();
