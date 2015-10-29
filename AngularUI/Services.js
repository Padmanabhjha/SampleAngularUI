(function () {

    var app = angular.module("myapp");

    var extractService = function ($http) {

        function getData() {
            return $http.get("http://localhost:58306/api/Extract")
                     .then(function (response) {
                         return response.data;
                     });
        };

        return {
            getData: getData
        };

    };

    app.factory("extractService", ["$http", extractService]);
}());