// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <bondy> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var benviuApp = angular.module('benviu', ['ionic', 'benviu.controllers', 'benviu.services'])

benviuApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

benviuApp.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.eventos', {
      url: '/eventos',
      views: {
        'tab-eventos': {
          templateUrl: 'templates/tab-eventos.html',
          controller: 'EventosCtrl',
          
          resolve: {
            eventos: function(EventosService){
                return EventosService.all();
            }
          }
        }
      }
    })
    
    .state('tab.evento-detail', {
      url: '/evento/:eventoId',
      views: {
        'tab-eventos': {
          templateUrl: 'templates/evento-detail.html',
          controller: 'EventoDetailCtrl',
          
          resolve: {
            evento: function(EventosService, $stateParams){
                return EventosService.get($stateParams.eventoId);
            }
          }
        }
      }
    })

    .state('tab.locales', {
      url: '/locales',
      views: {
        'tab-locales': {
          templateUrl: 'templates/tab-locales.html',
          controller: 'LocalesCtrl',

          resolve: {
            locales: function(LocalesService){
                return LocalesService.all();
            }
          }

        }
      }
    })
    .state('tab.local-detail', {
      url: '/local/:localId',
      views: {
        'tab-locales': {
          templateUrl: 'templates/local-detail.html',
          controller: 'LocalDetailCtrl',
          
          resolve: {
            local: function(LocalesService, $stateParams){
                return LocalesService.get($stateParams.localId);
            }
          }
        }
      }
    })
    
    .state('tab.grupos', {
      url: '/grupos',
      views: {
        'tab-grupos': {
          templateUrl: 'templates/tab-grupos.html',
          controller: 'GruposCtrl',
          
          resolve: {
            grupos: function(GruposService){
                return GruposService.all();
            }
          }
        }
      }
    })
    .state('tab.grupo-detail', {
      url: '/grupo/:grupoId',
      views: {
        'tab-grupos': {
          templateUrl: 'templates/grupo-detail.html',
          controller: 'GrupoDetailCtrl',
          
          resolve: {
            grupo: function(GruposService, $stateParams){
                return GruposService.get($stateParams.grupoId);
            }
          }
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/eventos');

});

