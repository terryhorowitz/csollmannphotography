'use strict';

app.factory('PhotoCollection', ($http, $log) => {

  const baseUrl = '/api/photoCollections/';

  function toData(response) {
    return response.data;
  }

  function logError(error) {
    $log.error(error);
    throw error;
  }

  let catcher = [ toData, logError ];

  return {
    getAll(){
      return $http.get(baseUrl)
        .then(...catcher);
    },

    create(name){
      return $http.post(baseUrl, { name })
        .then(...catcher);
    },

    addPhoto(photo, collectionId) {
      return $http.put(baseUrl + collectionId, { photo })
        .then(...catcher);
    }
  };

});
