var myApp = angular.module("myApp", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "employees.html",
            controller: "employeesController"
        })
            .when("/departments", {
                templateUrl: "departments.html",
                controller: "departmentsController"
            })
            .when("/projects", {
                templateUrl: "projects.html",
                controller: "projectsController"
            })
    });

myApp.controller("employeesController", function($scope, $http) {
    $scope.initEmployees = function () {
        $http.get($scope.apiUrl + "/employees")
            .then(function(response) {
                console.log(response.data);
                $scope.employees = response.data;
            });
    };

    $scope.showEmployee = function (employeeId) {
        $http.get($scope.apiUrl + "/employees/" + employeeId)
            .then(function(response) {
                //.data.data intentional
                $scope.employee = response.data.data;
            });
    };

    $scope.setEmployee = function(employee) {
        $scope.$parent.setEmployee(employee);
    };

    $scope.removeEmployee = function(employee) {
        $http.post($scope.apiUrl + "/deleteEmployee", employee)
            .then(
                function success(response) {
                    $scope.initEmployees();
                },
                function errorCallback(response){
                    console.log("API Error");
                    console.log(response);
                });
    };
});

myApp.controller("departmentsController", function($scope, $http) {
    $scope.initDepartments = function () {
        $http.get($scope.apiUrl + "/departments")
            .then(function(response) {
                //.data.data intentional
                $scope.departments = response.data.data;
            });
    };

    $scope.showDepartment = function (departmentId) {
        $http.get($scope.apiUrl + "/departments/" + departmentId)
            .then(function(response) {
                $scope.department = response.data; // error, not found
            });
    };
});

myApp.controller("projectsController", function($scope, $http) {
    $scope.initProjects = function () {
        $http.get($scope.apiUrl + "/projects")
            .then(function(response) {
                //.data.data intentional
                $scope.projects = response.data.data;
            });
    };

    $scope.showProject = function (projectId) {
        $http.get($scope.apiUrl + "/projectDetails/" + projectId)
            .then(function(response) {
                $scope.project = response.data.data;
            });
    };
});


myApp.controller("appController", function($scope, $http){

    $scope.setEmployee = function(employee) {
        $scope.menuEmployee = employee.fname + " " + employee.lname;
    };

    $scope.apiUrl = "http://home.tamk.fi/~kujesa/webjatko/rest/index.php";


});
