'use strict';

app.config(($stateProvider) => {
  $stateProvider.state('collections', {
    url: '/collections',
    templateUrl: '/js/collections/collections.html',
    controller: 'CollectionsCtrl',
    resolve: {
      allCollections: (PhotoCollection) => {
        return PhotoCollection.getAll();
      }
    }
  });
});
