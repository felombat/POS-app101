(function(){
    var posMod = angular.module('posModule', []) ; 

    // Define the `PhoneListController` controller on the `phonecatApp` module
    posMod.controller('CashierListController', function CashierListController($http, $scope, appServices) {
        this.poslist = [];

        // appServices.getPos().then(function(res){
        //     this.posfeed = res.data;
        // });
        //this.posfeed = appServices.getPos();

        this.init = function(){
             
        }

        this.init(); 
        

    });

    
}());