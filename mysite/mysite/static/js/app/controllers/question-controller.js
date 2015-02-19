/**
 * Created by dt105 on 2/18/2015.
 */
'use strict';

var questionController = angular.module('QuestionControllerModule', []);

questionController.controller('QuestionController', ['$scope', '$log', '$route', '$routeParams', function ($scope, $log, $route, $routeParams) {
    $scope.routeRarams = $routeParams;
    $scope.posts = $route.current.locals.posts;
    console.log($route);
    console.log($routeParams);

    //options for modals
    $scope.opts = {
        backdropFade: true,
        dialogFade: true
    };
}]);