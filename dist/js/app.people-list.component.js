
// Register `phoneList` component, along with its associated controller and template
(function () {
angular.
    module('spaApp').
    component('peopleList', {
        templateUrl: 'views/peoplelist.html', 
        
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];

            this.people = [
                {
                    name: 'John Jones',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Marie Hella',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'Jane Doe™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        }
    });
}());