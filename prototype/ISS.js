// AJAX API Calls
var updateISSPosition = function() {

  // Internal variables
  var issCoords = [];
  var ajaxCallback = function() {
    console.log('Ajax callback done.')
  };

  // XHR block
  var ajax = function(callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true);
    xhr.send(null);

    xhr.onreadystatechange = initData;

    function initData() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        var freshCoords = JSON.parse(xhr.response);
        setISSCoords(freshCoords);
      }
    };

    function setISSCoords(data) {
      issCoords = data;
      console.log("ISS coords update ready.")
    };

    callback();
  };

  ajax(ajaxCallback);

  return issCoords;

};
