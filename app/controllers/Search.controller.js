/*eslint-disable*/

angular
  .module("movieSearch")
  .controller("SearchController", SearchController);

  function SearchController($scope, $stateParams, MovieService) {
    var movieTitle = $stateParams.movieTitle;

    MovieService
      .getMovie(movieTitle)
      .then(movieTitle => {
        $scope.movieTitle = movieTitle;
      })

    $scope.getMovie = function () {
      $state.go('search', {
        movieTitle: $state.movieTitle
      });
    }
  }
