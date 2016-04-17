'use strict';

app.factory('PhotoUpload', ($http, $log, $rootScope) => {
  const baseUrl = '/api/photoCollections/';

  function toData(response){
    return response.data;
  }

  function logError(err){
    $log.error(err);
    throw err;
  }

  let logger = [ toData, logError ];

  class PhotoUpload {
    constructor(options){
      this.fileInput = options.input;
      this.preview = options.preview;

      this.fileInput.onchange = this.load.bind(this);

    }

    load(){
      let reader = new FileReader();
      let file = this.fileInput.files[0];

      reader.onloadend = () => {
        this.file = this.preview.src = reader.result;
        $rootScope.$digest();
      };

      if(file) {
        reader.readAsDataURL(file); //reads the data as a URL
      } else {
        this.preview.src = '';
      }
    }

    upload(collectionId){
      return $http.put(baseUrl + collectionId, this.file)
        .then(...logger);
    }

    fileIsLoaded(){
      return !!this.file;
    }
  }

  return {
    create: (fileInput) => new PhotoUpload(fileInput)
  };
});
