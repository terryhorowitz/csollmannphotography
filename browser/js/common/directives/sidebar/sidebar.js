app.directive('sidebar', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/sidebar/sidebar.html',
        link: function (scope) {

            scope.items = [
                { label: 'PLACES', state: 'places' },
                { label: 'FACES', state: 'faces' },
                { label: 'SHAPING SUGAR', state: 'shaping_sugar' },
                { label: 'LIGHTS AND THE BODY', state: 'lights_and_the_body' },
                { label: 'COMPOSITES', state: 'composites' },
                { label: 'ABOUT', state: 'about' },
                { label: 'SHOP', href: '"https://www.etsy.com/shop/chsphoto"' },
                { label: 'INSTAGRAM', href: '"https://www.instagram.com/csollmannphoto/"' },
                { label: 'CONTACT', state: 'contact' }
            ];

        }

    };

});
