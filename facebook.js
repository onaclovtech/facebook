  angular.module('_facebook', []).factory('facebook', ['$http',
      function($http) {
          return {
              picture: function(username) {
                  var method = 'JSONP';
                  var url = "http://graph.facebook.com/" + username + "/picture?";
                  return $http({
                      method: method,
                      url: url + "type=large" + '&callback=JSON_CALLBACK'
                  });
              }
          };
      }
  ]);
