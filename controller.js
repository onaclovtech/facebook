angular.module('myapp', ['_facebook'])
    .controller('myCtrl', ['$scope','facebook',
        function($scope, facebook) {
$scope.getPicture = function() {
                var response = facebook.picture($scope.username);
                   response
                       .success(function(data, status) {
                           console.log('SUCCESS' + data);
                           $scope.imageURL = data["data"]["url"]
                       })
                       .error(function(data, status) {
                           console.log('ERROR' + status);
                       });
            };
        }
            ]);
