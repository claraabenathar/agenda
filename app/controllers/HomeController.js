(function () {
    'use strict';
    angular.module('appAgenda').controller('HomeController', HomeController);

    var $i = 0;
    
    function HomeController($rootScope, $location, $scope, ContatosService, SETTINGS) {
        $rootScope.activetab = $location.path();

        $scope.formContato = {};
        $scope.message = "";

        $scope.newContato = function () {
            console.log('new > ' + $i);
            $scope.formContato = {}
            $i = 0;
        }

        $scope.saveContato = function () {
            console.log('>' + $i);
            if ($i == 0) { //novo contato
                var newContato = angular.copy($scope.formContato);
                var datacadastro = new Date().toJSON().slice(0,10);                
                var ano = datacadastro.slice(0,4);
                var mes = datacadastro.slice(6,7);
                var data = datacadastro.slice(9,10);
                newContato.datacadastro = data+'/'+mes+'/'+ano;
                $scope.contatos.push(newContato);
                $scope.message = "Novo contato adicionado com sucesso";
            } else {
                $scope.message = "Contato editado com sucesso";
            }
            $scope.formContato = {}
        }

        $scope.openContato = function (formContato) {
            $i++;
            $scope.formContato = formContato;
            //console.log(formContato);
        }

        $scope.deleteContato = function () {
            $scope.contatos.splice($scope.contatos.indexOf($scope.formContato), 1);
            $scope.message = "Contato deletado com sucesso";
        }

        $scope.clearMessage = function () {
            $scope.message = "";
        }
    };

})();