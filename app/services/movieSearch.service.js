// /*eslint-disable*/
//
// angular
//     .module("movieSearch")
//     .factory("MovieService", MovieService);
//
//     function MovieService($http) {
//       var URL = "http://www.omdbapi.com/?s=";
//       var savedMovies = [];
//
//       return {
//         getMovie: function (movieTitle) {
//           return $http.get(URL + movieTitle)
//           .then(result => {
//             console.log(result.data);
//             return result.data;
//           })
//         },
//         pullSavedMovies: function () {
//           return savedMovies;
//         }
//       }
// }
