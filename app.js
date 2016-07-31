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
  }).state('home.recipes', {
    url: 'recipes/:ingredients?page',
    controller: 'RecipesController',
    templateUrl: 'app/views/recipes.html'
  }).state('favorites', {
    url: '/favorites',
    controller: 'FavoritesController',
    templateUrl: 'app/views/favorites.html'
  });
}
