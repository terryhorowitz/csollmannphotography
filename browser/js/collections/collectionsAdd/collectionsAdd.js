'use strict';

app.config(($stateProvider) => {
  $stateProvider.state('addCollection', {
    url: '/addCollection',
    templateUrl: '/js/collections/collectionsAdd/collectionsAdd.html',
    controller: 'CollectionsAddCtrl'
  });
});
