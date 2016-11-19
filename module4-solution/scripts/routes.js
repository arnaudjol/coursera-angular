(function(){
  'use strict';
  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'views/home.html'
      })
      .state('categories', {
        url:'/categories',
        templateUrl:'views/categories.html',
        controller:'CategoriesController as catCtrl',
        resolve:{
          catItems: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('categories.itemDetail', {
        templateUrl:'views/items.html',
        controller:'ItemsController as itemCtrl',
        params:{
          categoryShortName : null
        },
        resolve:{
          item: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }
})();
