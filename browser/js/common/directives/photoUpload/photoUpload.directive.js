'use strict';

app.directive('photoUpload', (PhotoUpload) => {
  return {
    restrict: 'E',
    template: `
      <input type="file"/>
      <img height="200" src="">
      <button class="btn"
              ng-disabled="!fileIsLoaded()"
              ng-click="photoInput.upload(collectionId)">
              Click to Upload
      </button>
    `,
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

// $scope.handleFileUpload = function (file) {
//   let fileName = `profile_pics/${u._id}.jpg`;
//
//   FileUpload.uploadFile(file, fileName)
//     .then(() => $http.post(`/api/users/${u._id}/photo`, { fileName: fileName }))
//     .then(res => Auth.userRefresh())
//     .then(user => u = user)
//     .then(() => growl.success('Photo uploaded'))
//     .catch(() => growl.error('There was a problem uploading the photo'));
// }


// .directive('fileUpload', function ($window) {
//   return {
//     restrict: 'E',
//     template: `
//         <input type="file" ng-click="initUpload()" id="file_upload" />
//       `,
//     scope: {
//       handler: '='
//     },
//     link: function (scope, element) {
//       function _initUpload () {
//         let file = element.find('input').get(0).files[0],
//           FileReader = $window.FileReader,
//           reader = new FileReader();
//
//         reader.readAsDataURL(file);
//         reader.onloadend = function () {
//           scope.handler(file);
//         };
//       }
//
//       element[0].onchange = _initUpload;
//
//     }
//   };
// });
