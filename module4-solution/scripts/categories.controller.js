(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['catItems'];
  function CategoriesController(catItems){
    var vm = this;
    vm.catItems = catItems;
  }
})();
