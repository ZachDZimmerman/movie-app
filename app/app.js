/*eslint-disable*/
var app = angular.module("movieSearch", ["ui.router"]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("search", {
            url: "/search/:id",
            templateUrl: "/app/views/results.html",
            controller: "SearchController"
        })
        .state("detail", {
            url: "/details/:movieId",
            controller: "DetailController",
            templateUrl: "/app/views/details.html"
        });
  });
