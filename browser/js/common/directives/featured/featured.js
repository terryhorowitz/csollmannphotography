app.directive('featured', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/featured/featured.html',
        controller: "FeaturedCtrl"
    };
});

app.controller("FeaturedCtrl", function ($scope, Photos){

    $scope.photos = Photos.getAll().places;

});
