var ajax = (function () {
  var open = function (request, url, dataToSend, callback, asyncF) {
    var data;
    var xhr = new XMLHttpRequest();
    xhr.open(request, url, !asyncF);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dataToSend);
    xhr.onreadystatechange = function (rsp) {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        data = JSON.parse(xhr.response);
        callback(data);
      }
    };
  };

  return {
    open: open,
  }
})();
