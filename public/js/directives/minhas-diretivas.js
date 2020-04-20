angular.module('minhasDiretivas', [])
.directive('meuCard', function(){
    var ddo = {};

    //DEFININDO AS RESTRICOES DESSA DIRETIVA
    ddo.restric = "AE"; //AE(Atribute Element) > Atributo: <div meu-card> </div>   /  Elemento: <meu-card> </meu-card>

    ddo.scope = { //@quando nao é uma expressao angular entao ele vai passar o texto que está no atributo 
                  //& quando é uma expressao angular etano vao passar o valor
                  //= quando voce quer receber o valor instantaneamente entre a diretiva e o controller

        titulo: '@titulo',//<meu-card titulo="Nome do Titulo"> </meu-card>, esse meu atributo titulo é a minha interface de comunicacao com a minha diretiva, é como eu passo o dado para dentro da minha diretiva;
        url: '@url'

    };

    ddo.templateUrl = 'view/meu-card/meu-card.html'; 

    return ddo;
})

.directive('meuFocus', function(){ //Faz com que na tela de cadastro toda vez que voce aperta o botao salvar, o botao voltar ganha foco

    var ddo = {}

    //DEFININDO AS RESTRICOES DESSA DIRETIVA
    ddo.restric = "A";

    ddo.scope = {

        focado : '='
    };
    ddo.link = function(scope, element){
        scope.$watch('focado', function(){
            if(scope.focado){
                element[0].focus();
            }
        });
    }

    return ddo;
});


