'use strict';

app.controller('CollectionsAddCtrl', ($scope, $state, PhotoCollection) => {
  $scope.create = (name) => {
    PhotoCollection.create(name)
      .then((newCollection) => {
        $state.go('collectionDetail', { collectionId : newCollection._id });
      });
  }
});
