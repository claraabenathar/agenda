(function () {
    'use strict';

    //definindo constantes
    angular.module('appAgenda').constant('SETTINGS', {
        "CONTATOS": "contatos"
    });

    //trabalha com localStorage do browser
    angular.module('appAgenda').run(function ($rootScope, ContatosService, SETTINGS) {

        var contatos = localStorage.getItem(SETTINGS.CONTATOS);

        $rootScope.contatos = [];

        if (contatos) {
            var items = angular.fromJson(contatos);
            //console.log('contatos settings');
            angular.forEach(items, function (value) {
                $rootScope.contatos.push(value);
            });
            //console.log($rootScope.contatos);
        } else {
            ContatosService.listaContatos(function (response) {
                $rootScope.contatos = response.data;
                localStorage.setItem(SETTINGS.CONTATOS, angular.toJson(response.data));
            });
        }

    });

})();