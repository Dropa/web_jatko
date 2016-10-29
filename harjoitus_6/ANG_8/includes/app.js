var myApp = angular.module("myApp", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "employees.html"
        })
        .when("/departments", {
            templateUrl: "departments.html"
        })
        .when("/projects", {
            templateUrl: "projects.html"
        })
    });

myApp.controller("appController", function($scope, $http){

    var apiUrl = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php";
    $scope.initEmployees = function () {
        $http.get(apiUrl + "/employees")
            .then(function(response) {
                $scope.employees = response.data;
            });
    };
    $scope.initDepartments = function () {
        $http.get(apiUrl + "/departments")
            .then(function(response) {
                //.data.data intentional
                $scope.departments = response.data.data;
            });
    };
    $scope.initProjects = function () {
        $http.get(apiUrl + "/projects")
            .then(function(response) {
                //.data.data intentional
                $scope.projects = response.data.data;
            });
    };

    $scope.showEmployee = function (employeeId) {
        $http.get(apiUrl + "/employees/" + employeeId)
            .then(function(response) {
                //.data.data intentional
                $scope.employee = response.data.data;
            });
    };
    $scope.showDepartment = function (departmentId) {
        $http.get(apiUrl + "/departments/" + departmentId)
            .then(function(response) {
                $scope.department = response.data; // error, not found
            });
    };
    $scope.showProject = function (projectId) {
        $http.get(apiUrl + "/projectDetails/" + projectId)
            .then(function(response) {
                $scope.project = response.data.data;
            });
    };
});
