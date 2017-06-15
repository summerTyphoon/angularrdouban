(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat' ,['ngRoute','moviecat.homepage','moviecat.movie_list','moviecat.httpService','moviecat.details','moviecat.auto-active']);

    app.controller('mainController',['$scope','myService','$location',
    function($scope,myService,$location){
        $scope.search = function(){
            if(!$scope.query){
                return;
            }
            $location.url('/search?q=' + $scope.query);
        }
    }]);
})(angular);