/*eslint-disable*/

angular
  .module('movieSearch', ['ui.router'])
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/views/home.html'
  }).state('results', {
    url: 'results/:ingredients?page',
    controller: 'RecipesController',
    templateUrl: 'app/views/results.html'
  }).state('details', {
    url: '/details',
    controller: 'DetailsController',
    templateUrl: 'app/views/details.html'
  });
}
