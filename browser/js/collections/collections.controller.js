'use strict';

app.controller('CollectionsCtrl', ($scope, allCollections, PhotoCollection) => {
  $scope.allCollections = allCollections;
  $scope.delete = PhotoCollection.delete;
});
