app.config(function ($stateProvider) {
    $stateProvider.state('FullImageView', {
        url: '/view/:id',
        templateUrl: 'js/full-image/full-image.html',
        scope: {},
        resolve: {
            image: function($stateParams) {
                return $stateParams.id;
            }
        },
        controller: "FullImageCtrl"
    });
});

app.controller("FullImageCtrl", function ($scope, image, Photos){

    $scope.currentImage = image;

    $scope.next = function() {
        $scope.currentImage = Photos.nextPhoto($scope.currentImage);
    }

    $scope.prev = function (){
        $scope.currentImage = Photos.prevPhoto($scope.currentImage);
    }

});
