(function(){
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.searchTerm = '';
    ctrl.found = [];
    ctrl.listEmpty = false;
    ctrl.getMenuItems = function(){
      ctrl.listEmpty = ctrl.searchTerm === '';
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(data){
        ctrl.found = data;
        ctrl.listEmpty = data === undefined || data.length === 0;
      });
    }

    ctrl.removeMenuItem = function(index){
      ctrl.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(response){
        var items = response.data.menu_items.filter(function(item){
          return item.description.indexOf(searchTerm) !== -1;
        });
        return items;
      }, function(error){
        console.log(error);
      });
    }
  }

  function foundItemsDirective(){
    var ddo = {
      templateUrl:'menuList.html',
      scope:{
        items:'<',
        onRemove:'&'
      },
      controller: foundItemsDirectiveController,
      controllerAs:'list',
      bindToController:true
    };
    return ddo;
  }

  function foundItemsDirectiveController(){
    var list = this;
  }
})();
