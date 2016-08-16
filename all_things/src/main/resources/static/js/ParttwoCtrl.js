angular.module('myApp.parttwo',[])
.controller('ParttwoController', [ '$scope', '$state','$stateParams', 'Restangular', 
       function ($scope, $state, $stateParams, Restangular) {
	
	var allproduct = Restangular.all('product');
	console.log('allproduct '+ allproduct);
	
	$scope.loadproduct = function(){
        $scope.product = allproduct.getList().$object;
    };
    
    
    
    $scope.loadproduct();

}]);


