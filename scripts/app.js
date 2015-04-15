'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router'
]).
config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('landing', {
      url: "/",
      templateUrl: 'views/landing.html'
    })
    .state('entry-bar', {
      url: "entry-bar",
      templateUrl: "views/entry-bar.html"
    })
    .state('static-content', {
      url: "static-content",
      templateUrl: "views/static-content.html"
    })
    .state('tabular-data', {
      url: "tabular-data",
      templateUrl: "views/tabular-data.html"
    });
}).
controller('LandingCtrl', ['', function(){
  
}]).
controller('EntryBarCtrl', ['', function(){
  
}]).
controller('StaticContentCtrl', ['', function(){
  
}]).
controller('TabularContentCtrl', ['', function(){
  
}]);
