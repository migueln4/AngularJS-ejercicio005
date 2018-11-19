(function(){

var app = angular.module('ejemplosApp',[ ]);

app.config(['$sceDelegateProvider',function($sceDelegateProvider) {

	$sceDelegateProvider.resourceUrlWhitelist(['self','http://api.openweathermap.org/data/2.5/weather']);

}]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.profesores = {};
	$scope.tblProfesores = "parciales/tblProfesores.html";
	$scope.geo = new Object();

	var url = 'http://api.openweathermap.org/data/2.5/weather';

	var params = { lat:35,
					lon:139,
					appid:'9f50a805aa0089a1edd1829a5db029f0'

	};


	$http.get('profesores.json').then(function(datos) {
		//Código cuando la petición del json es correcta
		$scope.profesores = datos.data.profesores;

	});


	$http.jsonp(url,{params:params}).then(function(response) {
		$scope.geo = response.data;
	});

	$scope.kelvinCelcius = function(k) {
		return Math.round((k - 273.15)*100/100);
	}


}]);

})();
