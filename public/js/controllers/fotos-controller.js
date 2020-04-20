angular.module('frontend').controller('FotosController', function($scope, $resource, recursoFoto){ 
    
    $scope.filtro = ''; //Variável para filtar o que for digitado no botao de seach
    $scope.fotos = [];  
    $scope.mensagem = '';
    var API = 'v1/fotos' //Declarando variável que recebera a API
    var recursoFoto = $resource('v1/fotos/:fotoId');

    recursoFoto.query(function(fotos){
        //FUNCAO QUE RETORNA OS DADOS BEM SUCESSIDO
        $scope.fotos = fotos;


    },function(erro){
        //FUNCAO QUE RETORNA QUANDO DA ERRO
        console.log(erro)
    });

     $scope.remover = function(foto){ //Funcao que remove a foto

        recursoFoto.delete({fotoId : foto._id}, function(){
            //QUANDO A FOTO FOR EXCLUÍDA COM SUCESSO
            var indeceFoto = $scope.fotos.indexOf(foto); //Verificando a posicao da foto dentro da lista fotos
            $scope.fotos.splice(indeceFoto, 1); //Ele pergunta, a partir de qual indice voce quer remover e depois da virgula a quantidade;
            $scope.mensagem = 'A foto ' + foto.titulo + ' foi removida com sucesso';

        }, function(erro){
            //QUANDO DER ERRO PARA EXCLUIR A FOTO
            console.log(erro)
            $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;

        });
        
     };

});

/* REMOVENDO COM HTTP
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            var indeceFoto = $scope.fotos.indexOf(foto); //Verificando a posicao da foto dentro da lista fotos
            $scope.fotos.splice(indeceFoto, 1); //Ele pergunta, a partir de qual indice voce quer remover e depois da virgula a quantidade;
            $scope.mensagem = 'A foto ' + foto.titulo + ' foi removida com sucesso';

        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;

        });
        */
























    /*
    $scope.fotos = [
        {
            nome: 'HTML 5',
            descricao: 'Imagem da linguagem de marcacao HTML',
            url: 'imagens/html.png',
            texto: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
            modal: '#htmlModal'

        
        },

        {
            nome: 'CSS',
            descricao: 'Imagem da linguagem de estilizacao CSS',
            url: 'imagens/css.png',
            texto: 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.',
            modal: '#cssModal'

        },

        {
            nome: 'Java Script',
            descricao: 'Imagem da linguagem de programacao Java Script',
            url: 'imagens/js.png',
            texto: 'JavaScript é uma linguagem de programação em alto nível com tipagem dinâmica.',
            modal: '#jsModal'

        },

        {
            nome: 'Bootstrap',
            descricao: 'Imagem do framework Bootstrap',
            url: 'imagens/bootstrap.png',
            texto: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface.',
            modal: ' #bootstrapModal '

        },

        {
            nome: 'Angular JS',
            descricao: 'Imagem do framework Angular JS',
            url: 'imagens/angular.png',
            texto: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript.',
            modal: '#angularModal'

        },

        {
            nome: 'Visual Studio Code',
            descricao: 'Imagem do editor de texto Visual Studio Code',
            url: 'imagens/vscode.png',
            texto: 'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.',
            modal: '#vscodeModal'

        }

]*/