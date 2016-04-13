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

app.controller("FullImageCtrl", function ($scope, image){

    $scope.currentImage = image;

});
