/**
 * Created by dropa on 15.9.2016.
 */

var app = angular.module("omaAppi",[]);

app.controller("bodyController", function ($scope) {
    $scope.omaKentta = "Rock";

    $scope.lisaa = function () {
        $scope.tilanne = $scope.omaKentta2
    };

    $scope.tiedot = [
        {
            nimi: "kale",
            ika: 33
        },
        {
            nimi: "pena",
            ika: 21
        },
        {
            nimi: "rane",
            ika: 68
        }
        ];
});