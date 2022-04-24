
// Register `phoneList` component, along with its associated controller and template
(function () {
    angular.
        module('spaApp').
        component('forgotpassword', {
            templateUrl: 'views/form.forgotpassword.html', // form.forgotpassword.html
            //controllerAs: "forgotpassword",
            controller: function ForgotPasswordController() {
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

                this.page = {'title':"Password recovery "}; 

                //console.log(vm.page.title);


                // this.current_selection = {};



            
        }
    });
}());