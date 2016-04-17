'use strict';

app.config(($stateProvider) => {
  $stateProvider.state('collectionDetail', {
    url: '/collectionDetail/:collectionId',
    templateUrl: '/js/collections/collectionsDetail/collections.detail.html',
    controller: 'CollectionsDetailCtrl',
    resolve: {
      collection: (PhotoCollection, $stateParams) => {
        return PhotoCollection.getOne($stateParams.collectionId);
      }
    }
  });
});
