
// Register `phoneList` component, along with its associated controller and template
(function () {
    angular.
        module('spaApp').
        component('dashboard', {
            templateUrl: 'views/dash_widgets.html',
            controllerAs: "main",
            controller: function DashboardController() {
                // Interface: reset 
                let _user = {
                    user_id: 0,
                    fullname: 0,
                    role_id: 0,
                    session_lock:false, 
                    online_status: 'busy', // available|offline 
                    orders: []
                };
                vm = this;

                // Products

                this.page = {'title':"DashBoard"}; 

                console.log(vm.page.title);


                // this.current_selection = {};



            
        }
    });
}());