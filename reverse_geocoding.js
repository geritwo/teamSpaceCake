'use strict';

var geocodeLatLng = function (latitude, longitude) {
   latitude = (typeof latitude !== 'undefined') ?  latitude : 47.507335;
   longitude = (typeof longitude !== 'undefined') ?  longitude : 19.065992;
   var geocoder = new google.maps.Geocoder;
   var infowindow = new google.maps.InfoWindow;
   var latlng = {lat: latitude, lng: longitude};
   geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
         if (results[1]) {
            results.forEach(function(e){
               console.log(e.formatted_address);
            })
         } else {
            console.log('No results found');
         }
      } else {
         console.log('Geocoder failed due to: ' + status);
      }
 });
}
