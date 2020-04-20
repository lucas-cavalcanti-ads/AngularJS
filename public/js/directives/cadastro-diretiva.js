angular.module('cadastroDiretiva', [])
.directive('cardCadastro', function(){
    var ddo = {};

    //DEFININDO AS RESTRICOES DESSA DIRETIVA
    ddo.restric = "AE" //AE(Atribute Element) > Atributo: <div meu-card> </div>   /  Elemento: <meu-card> </meu-card>

    ddo.scope = {

        titulo: '@titulo',//<meu-card titulo="Nome do Titulo"> </meu-card>, esse meu atributo titulo é a minha interface de comunicacao com a minha diretiva, é como eu passo o dado para dentro da minha diretiva;
        url: '@url'

    };

    ddo.templateUrl = 'view/card-cadastro/card-cadastro.html'; 

    return ddo;
})


