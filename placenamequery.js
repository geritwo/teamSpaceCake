// Query place names based on coordinates
'use strict'

var placeName = "";

function reqPlaceName(lat, lon) {
  // http://nominatim.openstreetmap.org/reverse?format=json&lat=0&lon=12
  ajax.open('GET', 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon, '', setPlaceName);
};

function setPlaceName (data) {
  console.log('Full object: ' + data);
  console.log('Current place name: ' + data.display_name);
  if (!data.display_name) {
    placeName = "international waters"
  } else {
    placeName = data.display_name;
  }
  console.log('Place name set: ' + placeName);
};

// callback: display.setPlaceName
