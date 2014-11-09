angular.module('benviu.services', [])


.factory('LocalesService', function($q, $timeout, $http){
  // Might use a resource here that returns a JSON array
  console.log("Init LocalesService")

  // Some fake testing data
  var locales = [];
  //console.log(locales);
  return {
    all: function() {
      
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/locales/'})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("error value");
      });
      
      locales = deferred.promise;
      //console.log(locales);
      return locales;
      //return deferred.promise;
      //return friends;
    },
    get: function(localId) {
      // Simple index lookup
      //console.log(locales)
      //return locales[localId];
      console.log("GET local " + localId)
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/locales/' + localId})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("error value");
      });
      
      local = deferred.promise;
      //console.log(local);
      return local;
      
    }
  }
})

.factory('EventosService', function($q, $timeout, $http){
  // Might use a resource here that returns a JSON array
  console.log("Init EventosService")

  var eventos = [];
  
  return {
    all: function() {
      
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/eventos/'})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //console.error(data);
          // err.status will contain the status code
          
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("Ups!, parece que ha habido un error al recibir los datos. Disculpa las molestias");
      });
      
      eventos = deferred.promise;
      return eventos;
    },
    get: function(eventoId) {
      // Simple index lookup
      //console.log(locales)
      //return locales[localId];
      console.log("GET evento " + eventoId)
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/eventos/' + eventoId})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("error value");
      });
      
      return deferred.promise;
      
    }
  }
})

.factory('GruposService', function($q, $timeout, $http){
  // Might use a resource here that returns a JSON array
  console.log("Init EventosService")

  var grupos = [];
  
  return {
    all: function() {
      
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/grupos/'})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("error value");
      });
      
      grupos = deferred.promise;
      return grupos;
    },
    get: function(grupoId) {

      console.log("GET grupo " + grupoId)
      var deferred = $q.defer();
           
      $http({method: 'GET', url: 'http://backend-ramsys.rhcloud.com/benviu/api/grupos/' + grupoId})
      .success(function(data) {
          deferred.resolve(data)
      })
      .error(function(data){
          //actually you'd want deffered.reject(data) here
          //but to show what would happen on success..
          deferred.resolve("error value");
      });
      
      return deferred.promise;
      
    }
  }
})
