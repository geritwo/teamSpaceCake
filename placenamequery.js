// Query place names based on coordinates
'use strict'

var placeName = "";

function reqPlaceName(lat, lon) {
  // http://nominatim.openstreetmap.org/reverse?format=json&lat=0&lon=12
  ajax.open('GET', 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon, '', setPlaceName);
};

function setPlaceName (data) {
  if (!data.display_name) {
    placeName = "international waters"
  } else {
    placeName = data.display_name;
  }
  display.renderPlaceName();
};

// callback: display.setPlaceName
