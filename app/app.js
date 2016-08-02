angular
    .module("movieSearch", ["ui.router"])
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("search", {
            url: "results/:id",
            controller: "SearchController",
            templateUrl: "app/views/results.html"
        })
        .state("details", {
            url: "/details",
            controller: "DetailsController",
            templateUrl: "app/views/details.html"
        });
}
