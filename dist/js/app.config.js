(function(){
    angular.
        module('spaApp').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                    when('/people', {
                        template: '<people-list></people-list>'
                    }).
                    when('/dummy', {
                        template: '<dummy></dummy>',
                        bindings: {
                            page: '<'
                        }
                        
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
                     when('/menu', {
                        template: '<menu></menu>',
                        bindings: {
                            page: '<'
                        }
                    }).
                     when('/dish', {
                        template: '<dish></dish>',
                        bindings: {
                            page: '<'
                        }
                    }).
                     when('/sites', {
                        template: '<sites></sites>',
                        bindings: {
                            page: '<'
                        }
                    }).
                    when('/tables', {
                        template: '<tables></tables>',
                        bindings: {
                            page: '<'
                        }
                    }).
                    when('/stats', {
                        template: '<stats></stats>',
                        bindings: {
                            page: '<'
                        }
                    }).
                    when('/employees', {
                        template: '<employees></employees>',
                        bindings: {
                            page: '<'
                        }
                    }).
                     when('/report', {
                        template: '<report></report>',
                        bindings: {
                            page: '<'
                        }
                    }).
                     when('/clients', {
                        template: '<clients></clients>',
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