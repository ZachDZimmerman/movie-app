angular
    .module("movieSearch")
    .controller("SearchController", SearchController);

function SearchController($scope, $stateParams, $http, DataStored) {
    $scope.home = {};
    $scope.home.params = $stateParams;
    $scope.home.movieResults = [];

    $scope.home.searchingMovie = function(params) {
        $http.get("http://www.omdbapi.com/?s=" + params.id).then(data => {
            for (let i = 0; i < data.data.Search.length; i++) {
                $scope.home.movieResults.push(data.data.Search[i]);
            }
        });
    };
    $scope.home.searchingMovie($scope.home.params);
}
