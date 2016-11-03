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
                if (response.data.length > 0) {
                    $scope.employees = response.data;
                }
                else {
                    $scope.resetEmployees();
                    $scope.initEmployees();
                }
            });
        $http.get($scope.apiUrl + "/departments")
            .then(function(response) {
                //.data.data intentional
                $scope.departments = response.data.data;
            });
    };

    $scope.resetEmployees = function() {
        $http.get("http://home.tamk.fi/~kujesa/webjatko/rest/reset.php");
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

    $scope.addEmployee = function(addemployee) {
        var year = addemployee.bdate.getFullYear();
        var month = ("0" + (addemployee.bdate.getMonth() + 1)).slice(-2);
        var day = ("0" + addemployee.bdate.getDate()).slice(-2);
        addemployee.bdate = year + "-" + month + "-" + day;
        addemployee.dep = addemployee.dep.id;

        $http.post("http://home.tamk.fi/~kujesa/webjatko/rest/index.php/createEmployee", addemployee, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }).then(function(r) {
                $scope.initEmployees();
            },
            function(r) {
                console.log("API Error");
                console.log(r);
            });
        $scope.addemployee = null;
    };

    $scope.removeEmployee = function(employee) {
        $http.post("http://home.tamk.fi/~kujesa/webjatko/rest/index.php/deleteEmployee", {"id": employee.id}, {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }).then(function(r) {
            $scope.initEmployees();
        },
        function(r) {
            console.log("API Error");
            console.log(r);
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
