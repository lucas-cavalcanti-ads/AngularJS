angular.module('frontend').controller('GruposController', function($scope, $http){//routeParams da acesso aos parametros da rota que estou tentando acessar

    var API_GRUPOS = 'v1/grupos';
    $scope.grupos = [];

    //O que o $http pode te dar é uma promise, pois tem um delay de dados ate a proxima informacao, por isso ele nao garante o retorno e é chamado de promessa
    $http.get(API_GRUPOS)
    .success(function(grupo){
        $scope.grupos = grupo;
    })
    .error(function(erro){
        console.log(erro)
    });
    
});