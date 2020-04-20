angular.module('frontend',['minhasDiretivas', 'cadastroDiretiva', 'ngRoute', 'ngAnimate', 'meusServicos']) //O que vai dentro das chaves quer dizer que é alguma dependencia para esse módulo funcionar;
.config(function($routeProvider, $locationProvider){ //o $routeProvider configura as rotas que rodam no client / O $locationProvideré um modulohtml5 de rotas 
    
    $locationProvider.html5Mode(true); //Esse cara faz com que o angular na sua url deixe de trabalhar com o # e trabalhe com html5

    $routeProvider.when('/fotos',{ //Quando enxergar o localhost:3000/#/fotos vai fazer o que tiver na chave
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/cadastro',{ //Quando enxergar o localhost:3000/#/new vai fazer o que tiver na chave
        templateUrl: 'partials/cadastro.html',
        controller: 'CadastroController',
    });
    
    
    $routeProvider.when('/fotos/editar/:fotoId',{ //Quando enxergar o localhost:3000/#/new vai fazer o que tiver na chave
        templateUrl: 'partials/cadastro.html',
        controller: 'CadastroController'
    });

    $routeProvider.otherwise({ //Vai fazer com que se exergar localhost:3000/#/url infefinida ele direcione para /fotos
        redirectTo: '/fotos'
    });



});
