angular.module('benviu.controllers', [])

.controller('EventosCtrl', function($scope, eventos) {
  
  if(angular.isString(eventos)) {
      $scope.bError = true;
      $scope.sError = eventos;
      console.log("isString:" + eventos);
  }
  
  $scope.eventos = eventos;
  
  $scope.getItemHeight = function(item, index) {
    //Make evenly indexed items be 10px taller, for the sake of example
    return (index % 2) === 0 ? 99 : 99;
  };
  
})

.controller('EventoDetailCtrl', function($scope, evento) {
  $scope.evento = evento;
  //console.log($stateParams.localId);
  
})

.controller('GruposCtrl', function($scope, grupos) {
  $scope.grupos = grupos;
})
.controller('GrupoDetailCtrl', function($scope, grupo) {
  $scope.grupo = grupo;
  //console.log($stateParams.localId);
  
})

.controller('LocalDetailCtrl', function($scope, $stateParams, local) {
  $scope.local = local;
  //console.log($stateParams.localId);
  
})

.controller('AccountCtrl', function($scope) {
});

function LocalesCtrl($scope, locales, LocalesService) {
  //$scope.friends = Friends.all();
  
  /*
  //Llamamos a api
  $scope.data = MyAPIService.data();
  console.log("Hola")
  console.log($scope.data);
  //MyAPIService.getData();
  console.log(MyAPIService.data());
  
  $scope.friends = MyAPIService.data();
  */
  
  //$scope.locales = locales;
  $scope.locales = locales
  //console.log(locales)
}

/*
FriendsCtrl.resolve = {
    Friends : function($q, $http) {
        console.log("algo")
        var deferred = $q.defer();

        $http({method: 'GET', url: 'http://127.0.0.1:8000/benviu/api/locales/'})
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
    
  
};
*/
