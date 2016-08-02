/*eslint-disable*/

angular
    .module("movieSearch")
    .factory("MovieService", MovieService);

    function MovieService($http) {
      var URL = "http://www.omdbapi.com/?s=";
      var savedMovies = [];

      return {
        getMovie: function (movieTitle) {
          return $http.get(URL + movieTitle)
          .then(result => {
            return result.data.results;
          })
        },
        pullSavedMovies: function () {
          return savedMovies;
        }
      }
}
