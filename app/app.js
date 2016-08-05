/*eslint-disable*/

angular
    .module("movieSearch", ["ui.router"])
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("search", {
            url: "search/:id",
            templateUrl: "app/views/results.html",
            controller: "SearchController"
        })
        .state("details", {
            url: "/details/:id",
            templateUrl: "app/views/details.html",
            controller: "DetailsController"
        });
}
