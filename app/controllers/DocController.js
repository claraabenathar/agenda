(function () {
    'use strict';
    angular.module('appAgenda')
        .controller('DocController', function ($rootScope, $location) {
            $rootScope.activetab = $location.path();
        });
})();