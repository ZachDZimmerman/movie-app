/*eslint-disable*/

angular
  .module("movieSearch")
  .controller("DetailController", DetailController);

  function DetailController($scope, $stateParams, $http, DataStored) {
    var URL = "http://www.omdbapi.com/?i=";
    $scope.detail = {};
    $scope.detail.params = $stateParams;
    $scope.detail.movie = [];
    $http.get(URL + $scope.show.params.id).then(data => {
      $scope.detail.movie.push(data.data);
    });
}
