

(function(){
  'use strict'
  var ToBuyArray = [
    {
      item_quantity: "10",
      item_name: "Cookies"
    },
    {
      item_quantity: "4",
      item_name: "Cereal"
    },
    {
      item_quantity: "5",
      item_name: "Apple Juice"
    },
    {
      item_quantity: "2",
      item_name: "Nuggets"
    },
    {
      item_quantity: "10",
      item_name: "Chips"
    }
  ];
  angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', BuyController)
        .controller('AlreadyBoughtController', BoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  BuyController.$inject = ['$scope','ShoppingListCheckOffService'];

  function BuyController($scope, ShoppingListCheckOffService){
    $scope.BuyingList = ToBuyArray;
    var ToBuy = this;
    ToBuy.BoughtItem = function(itemIndex){

        ShoppingListCheckOffService.BoughtItem(itemIndex);
    }

  }

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService(){
      var service = this;
      var boughtItems = [];

      service.BoughtItem = function (itemIndex){
      var item = {
        item_quantity: ToBuyArray[itemIndex].item_quantity,
        item_name: ToBuyArray[itemIndex].item_name
      };
      boughtItems.push(item)
      ToBuyArray.splice(itemIndex, 1);

      };

      service.getItems = function (){
        return boughtItems;
      };
    }
})();
