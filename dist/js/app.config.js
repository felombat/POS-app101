(function(){
    angular.
        module('spaApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/people', {
                        template: '<people-list></people-list>'
                    }).
                    when('/dashboard', {
                        template: '<dashboard-list></dashboard-list>'
                    }).
                    when('/cashier', {
                        template: '<cashier-list></cashier-list>'
                    }).
                    when('/people/:personId', {
                        template: '<person-detail></person-detail>'
                    }).
                    when('/books', {
                        template: '<book-list></book-list>'
                    }).
                    when('/news', {
                        template: '<news-list></news-list>'
                    }).
                    otherwise('/cashier');
            }
        ]);

    
}());