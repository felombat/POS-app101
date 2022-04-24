
// Register `phoneList` component, along with its associated controller and template
(function () {
    angular.
        module('spaApp').
        component('cashierList', {
            templateUrl: 'views/cashier-list/preorder.html',
        
            controller: function CashierListController() {
                // Interface: reset 
                let _item = {
                    product_id: 0,
                    quantity: 0,
                    category_id: 0,
                    unit_price: 1,
                    title: "",
                    total_price: 0
                };
                vm = this;

                // Products

                this.products = [
                    {
                        product_id: 1,
                        category_id: 1,
                        unit_price: 500,
                        selected: false,
                        title: "Top Orange"
                             
                    },
                    {
                        product_id: 2,
                        category_id: 2,
                        unit_price: 2500,
                        selected: false,
                        title: "Tip Ponch"
                    },
                    {
                        product_id: 3,
                        category_id: 3,
                        unit_price: 3000,
                        selected: false,
                        title: "Heinecken",
                    
                    },
                    {
                        product_id: 4,
                        category_id: 3,
                        unit_price: 700,
                        selected: false,
                        title: "33 Export",
                        
                    },
                    {
                        product_id: 5,
                        category_id: 3,
                        unit_price: 1000,
                        selected: false,
                        title: "1664",
                    }
                ]

                this.order =
                {
                    date: new Date(),
                    table_id: 1,
                    site_id: 1,
                    seats: 1,
                    message: "",
                    total: null,
                    items: [
                        // {
                        //     product_id: 1,
                        //     quantity: 5, 
                        //     category_id: 1,
                        //     unit_price: 500,
                        //     title : "Top",
                        //     total_price: 500 * 5
                        // },
                        // {
                        //     product_id: 3,
                        //     quantity: 1, 
                        //     category_id: 3,
                        //     unit_price: 3000,
                        //     title : "Cocktail",
                        //     total_price: 3000
                        // },
                        // {
                        //     product_id: 2,
                        //     quantity: 1, 
                        //     category_id: 3,
                        //     unit_price: 2500,
                        //     title : "Beer",
                        //     total_price: 2500 * 1
                        // }
                    ]
                }
                    ;

                this.current_selection = {};

                this.addToOrder = function (prod) {
                    if (prod.selected) return;

                    let product = prod;
                    product.quantity = 1;
                    product.total_price = product.quantity * product.unit_price;
                    console.info(product);
                    vm.toggleSelectedStatus(prod);
                    this.order.items.push(product);
                    vm.getTotal();
                    console.info(this.order.items);
                };

                this.toggleSelectedStatus = function (prod) {

                    return prod.selected = !prod.selected;
                }

                this.getTotal = function () {
                    let total = 0;
                    vm.order.items.forEach(element => {
                        total += element.total_price
                    });
                    return vm.order.total = total;
                };
             
                // update Item qty and return objet
                this.updateItemQty = function (item, action = 'inc') {
                    item = item;
                    if (action === 'inc') {
                        item.quantity = item.quantity + 1;
                        item.total_price = item.quantity * item.unit_price
                    } else {
                        if (item.quantity > 2) {
                            item.quantity -= 1;
                        } else {
                            item.quantity = 0;

                            // uncheck the selected marker on product:
                            //  find product by ID
                                                 
                            let _prod = vm.getProductFormList(item);
                            vm.toggleSelectedStatus(_prod);
                        }
                        item.total_price = item.quantity * item.unit_price
                    }
                    vm.getTotal();
                    return item;
                
                };

                this.getProductFormList = function (item) {
                    return vm.order.items.filter(function (obj) {
                        return obj.product_id == item.product_id;
                    });
                    let temp = []; 

                    // vm.products.forEach(function (product) {
                        
                    //     if (product.product_id) {
                    //         product = result; 
                    //     } else {
                    //         product = product; 
                    //     }  
                    //     temp.push(product);
                    // });

                    //vm.products = temp; 


                    //console.log(obj);
                };
             

            

            
        }
    });
}());