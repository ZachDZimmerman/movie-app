/*eslint-disable*/

angular
    .module("movieSearch")
    .factory("DataStored", DataStored);

    function DataStored() {
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
    };
