/* jshint undef: false */

var file = (function () {
  
  function uploadJson(fileName, json, callback) {
    var body = {fileName: fileName, json: json};
    
    https.post('/api/upload/json', body, function () {
      callback(null);          
    }, 
    function (err) {
      console.error(err);
      callback(err);
    });       
  }
  
  function downloadJson(fileName, callback) {
    var body = {fileName: fileName, json: json};
    
    https.post('/api/upload/json', body, function (response) {
      callback(null, response);          
    }, 
    function (err) {
      console.error(err);
      callback(err, null);
    });
  }
  
  return {
    uploadJson: uploadJson,
    downloadJson: downloadJson
  };

})();