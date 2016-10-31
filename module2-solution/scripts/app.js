(function(){
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService){
      var toBuy = this;
      toBuy.Items = ShoppingListCheckOffService.toBuyItems;
      toBuy.buyItem = ShoppingListCheckOffService.buyItem;
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService){
      var bought = this;
      bought.Items = ShoppingListCheckOffService.boughtItems;
    }

    function ShoppingListCheckOffService(){
      var service = this;
      service.toBuyItems = [
        {
          name:'Cookies',
          quantity:10
        },
        {
          name:'Chips',
          quantity:25
        },
        {
          name:'Coca',
          quantity:5
        },
        {
          name:'Juice',
          quantity:16
        },
        {
          name:'Chicken',
          quantity:20
        },
        {
          name:'Jams',
          quantity:10
        }
      ];
      service.boughtItems = [];

      service.buyItem = function(index){
        var itemToBuy = service.toBuyItems[index];
        service.toBuyItems.splice(index, 1);
        service.boughtItems.push(itemToBuy);
      }
    }
})();
