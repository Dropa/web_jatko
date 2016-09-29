var myApp = angular.module("tokaApp", []);

myApp.controller("appController", function($scope){
    $scope.names = [];

    $scope.addNewName = function ($newName) {
        if ($newName != null) {
            $scope.names.push({'name': $newName});
        }
    };

    $scope.removeName = function($removeName) {
        $scope.names.splice($removeName, 1);
        console.log($removeName);
    }
});