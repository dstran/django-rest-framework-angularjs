/**
 * Created by dt105 on 2/19/2015.
 */
'use strict';

var choiceController = angular.module('ChoiceControllerModule', []);

choiceController.controller('ChoiceController', ['$scope', '$log', '$route', '$routeParams', '$location', function ($scope, $log, $route, $routeParams, $location) {
    $scope.routeRarams = $routeParams;
    $scope.post = $route.current.locals.post;
    console.log($route);
    console.log($routeParams);

    //options for modals
    $scope.opts = {
        backdropFade: true,
        dialogFade: true
    };
}]);