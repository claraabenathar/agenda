(function () {
	'use strict';

	angular.module('appAgenda').config(function ($routeProvider, $locationProvider) {
		// remove o # da url
   		$locationProvider.html5Mode(true);
		
		   $routeProvider
			// para a rota '/', carregaremos o template home.html e o controller 'HomeController'
			.when('/', {
				templateUrl: 'app/views/home.html',
				controller: 'HomeController',
				controllerAs: 'ca'
			})

			// para a rota '/add', carregaremos o template add.html e o controller 'AddController'
			.when('/add', {
				templateUrl: 'app/views/add.html',
				controller: 'AddController',
				controllerAs: 'ca'
			})

			// para a rota '/doc', carregaremos o template doc.html e o controller 'DocController'
			.when('/doc', {
				templateUrl: 'app/views/doc.html',
				controller: 'DocController',
				controllerAs: 'doc'
			})

			// caso não seja nenhum desses, redirecione para a rota '/'
			.otherwise({ redirectTo: '/' });

	})
})();