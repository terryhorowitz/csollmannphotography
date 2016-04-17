'use strict';

app.directive('photoUpload', (PhotoUpload) => {
  return {
    restrict: 'E',
    templateUrl: '/js/common/directives/photoUpload/photoUpload.directive.html',
    scope: {
      collectionId: '='
    },
    link: function(scope, element){
      let root = angular.element(element[0]);
      let input = root.find('input')[0];
      let preview = root.find('img')[0];

      scope.photoInput = PhotoUpload.create({
        input,
        preview,
        collectionId: scope.collectionId
      });

      scope.fileIsLoaded = scope.photoInput.fileIsLoaded.bind(scope.photoInput);


    }
  };
});
