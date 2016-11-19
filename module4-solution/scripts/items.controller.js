(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['item'];
  function ItemsController(item){
    var vm = this;
    vm.item = item;
  }
})();
