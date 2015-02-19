/**
 * Created by dt105 on 2/18/2015.
 */
var Post = angular.module('Post', ['ngRoute', 'MainControllerModule', 'QuestionControllerModule', 'ChoiceControllerModule'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol("{[{");
    $interpolateProvider.endSymbol("}]}");
});

Post.controller('TestController', ['$http', '$log', function($http, $log) {
    this.hello = 'Hello Hello!!!';
}]);

Post.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/",
        {
            foo: 'bar',
            templateUrl: "static/js/app/views/question.html",
            controller: "QuestionController",
            resolve: {
                posts: function ($route, QuestionService) {
                    return QuestionService.list();
                }
            }
        })
        .when("/question/:id", {
            templateUrl: "static/js/app/views/choice.html",
            controller: "ChoiceController",
            resolve: {
                post: function ($route, QuestionService) {
                    var postId = $route.current.params.id
                    return QuestionService.get(postId);
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true).hashPrefix('!');
});