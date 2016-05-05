(function(){
    var app = angular.module('ProyectoAngular', []);
    app.controller('PrincipalCtrl', function($http, $scope) {
        $scope.test = 'Hola mundo';
        
        $scope.lista = [
            {nombre: "Uno"}, 
            {nombre: "Dos"}, 
            {nombre: "Tres"}
        ];
        
        $scope.tabla = [];
        
        $http({
            url: 'datos.json',
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            $scope.tabla = response.data;
        }, function(response) {
            
        });
    });
})();