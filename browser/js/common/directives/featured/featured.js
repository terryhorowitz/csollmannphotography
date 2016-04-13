app.directive('featured', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/featured/featured.html',
        link: function (scope){
            scope.photos = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        }
    };
});
