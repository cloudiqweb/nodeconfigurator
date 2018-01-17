/* jshint undef: false */

var https = (function () {
  function ajaxRequest(type, url, data, next, error) {
    $.ajax(
        {
          url: url,
          type: type,
          contentType: 'application/json; charset=utf-8',
          xhrFields: {
            withCredentials: true
          },
          success: next,
          error: error || function (error) {
            console.error(error);  
          },          
          dataType: 'json',
          data: data
        }
      );
  }
  
  
  function get(url, query, next, error) {
    ajaxRequest('get', url, query, next, error);  
  }
  
  function post(url, body, next, error) {
    ajaxRequest('post', url, JSON.stringify(body), next, error);  
  }
  
  function put(url, body, next, error) {
    ajaxRequest('put', url, JSON.stringify(body), next, error);  
  }
  
  function del(url, body, next, error) {
    ajaxRequest('delete', url, JSON.stringify(body), next, error);
  }
  
  return {
    get: get,
    post: post,
    put: put,
    del: del
  };
  
})();