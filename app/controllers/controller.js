/*eslint-disable*/

app.factory("DataStored", function() {
      var savedData = [];
      return {
        setData: function (data) {
          savedData.push(data);
        },
        getData: function () {
          return savedData;
        }
      }
      console.log(savedData);
    });

app.controller("SearchController", function ($scope, $stateParams, $http, DataStored) {
  $scope.home = {};
  $scope.home.params = $stateParams;
  $scope.home.movieResults = [];

  $scope.home.searchingMovie = function(params) {
    $http.get("http://www.omdbapi.com/?s=" + params.id).then(data => {
        for (var i = 0; i < data.data.Search.length; i++) {
            $scope.home.movieResults.push(data.data.Search[i]);
        }
    });
  };
  $scope.home.searchingMovie($scope.home.params);
});

app.controller("DetailController", function ($scope, $stateParams, $http, DataStored) {
  $scope.detail = {};

  $http.get("http://www.omdbapi.com/?i=" + $stateParams.movieId).then(movieData => {
    $scope.detail = movieData.data;
    console.log($scope.detail);
  });
});
