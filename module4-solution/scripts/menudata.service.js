(function(){
  'use strict';
  angular.module('data')
    .factory('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = {
      getAllCategories : getAllCategories ,
      getItemsForCategory: getItemsForCategory
    }

    return service;

    function getAllCategories(){
      return $http({
        url:'https://davids-restaurant.herokuapp.com/categories.json',
        method:'GET'
      })
      .then(function(response){
        return response.data;
      })
      .catch(function(error){
        console.log('Get all categories failed');
      })
    }

    function getItemsForCategory(categoryShortName){
      return $http({
        url:' https://davids-restaurant.herokuapp.com/menu_items.json',
        method:'GET',
        params:{category: categoryShortName}
      })
      .then(function(response){
        return response.data;
      })
      .catch(function(error){
        console.log('Get item for category failed');
      })
    }
  }
})();
