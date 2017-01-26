var ajax = (function () {
  var open = function (request, url, dataToSend, callback) {
    var data;
    var xhr = new XMLHttpRequest();
    xhr.open(request, url, true);
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
