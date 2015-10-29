(function () {
    var app = angular.module("myapp");

    var homeController = function ($scope, extractService) {
        $scope.message = "This is home view"
        var onsuccess = function (data) {
            alert('Inside success');
            alert(data);
            $scope.data = data;
            //important to parse
            var jsonObject = JSON.parse(data);
            alert(jsonObject);
            alert(jsonObject[0].Id);
            alert(data[0])
            $scope.id = jsonObject[0].Name;
        };

        var onError = function () {
            $scope.error = "something went wronge";

        };
       
        extractService.getData().then(onsuccess,onError);
        
   };
    

    app.controller("homeController", ["$scope", "extractService", homeController]);

}());