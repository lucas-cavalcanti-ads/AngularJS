angular.module('frontend').controller('CadastroController', function($scope, $http, $routeParams, recursoFoto){//routeParams da acesso aos parametros da rota que estou tentando acessar
    
    $scope.foto = {};
    var API = 'v1/fotos'; //Declarando variável da API
    

    $scope.mensagemerro = false;
    $scope.mensagem = '';

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID: ' + $routeParams.fotoId;
        });
    
    }

    $scope.submeter = function(){
        if($scope.formularioCadastro.$valid){
            if($scope.foto._id){ //Pergunta: Se a foto Já tem ID quero alterar, se falso quero adicionar

                recursoFoto.update({fotoId : $scope.foto._id},function(){
                    //SE TUDO DER CERTO
                    $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                }, function(erro){
                    //SE TUDO DER ERRADO
                    console.log(erro)
                    $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;

                });
                
                $scope.focado = true;

            }else{
                $http.post(API, $scope.foto) //Envio do dados ($scope.foto) para a API
                .success(function(){ //Retornando uma promessa
                    $scope.foto = {}; //limpando o formulario após o envio dos dados 
                    $scope.mensagem = 'Foto incluída com sucesso!';
                
                })
                
                .error(function(error){ //Se a promessa der erro;
                    $scope.mensagem = 'Não foi possível cadastrar a imagem˜';
                    console.log(error)
                
                });

            }
        
        }
    
    }

});


/* UTILIZANDO HTTP PARA FAZER O GET

recursoFoto.query({fotoId : $routeParams.fotoId}, function(foto){
            //QUANDO A CHAMADA DER CERTO
            $scope.foto = foto;

        }, function(erro){
            //QUANDO A CHAMADA DER ERRADO
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID: ' + $routeParams.fotoId;

        });



        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto de ID: ' + $routeParams.fotoId;
        });
*/

/* UTILIZANDO HTTP PARA FAZER O PUT
        $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)//Antes da virgula: aonde no back que eu quero alterar e depois da virgula quem eu quero alterar
        .success(function(){
            $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
        })
        .error(function(erro){
            console.log(erro)
            $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
        });
*/


