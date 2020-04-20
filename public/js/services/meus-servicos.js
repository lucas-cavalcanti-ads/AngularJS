angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){ //ME RETORNA UM OBJETO

    return $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
})