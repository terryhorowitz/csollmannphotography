app.directive('featured', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/featured/featured.html',
        link: function (scope){
            scope.photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg'];

        }
    };
});
