angular.module('appAgenda')
	.service('ContatosService', function ($http) {
		return {
			listaContatos: function (sucessCallback, errorCallback) {
				$http({
					method: 'GET',
					url: 'http://www.mocky.io/v2/5982408d1100001913396549'
				})
					.then(function (response) {
						listAll = response.data;
						sucessCallback(response);
					}, function (response) {
						errorCallback(response);
						console.log('Error');
					});
			}
		};
	}
);
