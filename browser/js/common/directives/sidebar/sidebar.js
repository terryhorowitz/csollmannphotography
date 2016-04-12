app.directive('sidebar', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/sidebar/sidebar.html',
        link: function (scope) {

            scope.photoSeries = [
                { label: 'PLACES', state: 'places' },
                { label: 'FACES', state: 'faces' },
                { label: 'SHAPING SUGAR', state: 'shaping_sugar' },
                { label: 'LIGHTS AND THE BODY', state: 'lights_and_the_body' },
                { label: 'COMPOSITES', state: 'composites' }
            ];

            scope.moreDetails = [
                { label: 'ABOUT', state: 'about' },
                { label: 'CONTACT', state: 'contact' }
            ]

            scope.externalLinks = [
                { label: 'SHOP', extLink: "https://www.etsy.com/shop/chsphoto" },
                { label: 'INSTAGRAM', extLink: "https://www.instagram.com/csollmannphoto/" }
            ]


        }

    };

});
