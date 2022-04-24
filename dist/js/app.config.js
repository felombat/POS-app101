(function(){
    angular.
        module('spaApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/people', {
                        template: '<people-list></people-list>'
                    }).
                    when('/login', {
                        template: '<login></login>',
                        bindings: {
                            page: '<'
                        }
                        
                    }).
                    when('/forgotPassword', {
                        template: '<forgotPassword></forgotPassword>',
                        bindings: {
                            page: '<'
                        }
                        
                    }).
                    when('/dashboard', {
                        template: '<dashboard></dashboard>',
                        bindings: {
                            page: '<'
                        }
                        
                    }).
                    when('/cashier', {
                        template: '<cashier-list></cashier-list>',
                        bindings: {
                            page: '<'
                        }
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
                    otherwise('/dashboard');
            }
        ]);

    
}());