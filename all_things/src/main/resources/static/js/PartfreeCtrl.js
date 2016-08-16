angular.module('myApp.partfree',[])
.controller('PartfreeController', [ '$scope', '$state','$stateParams', 'Restangular','$timeout',
        function ($scope, $state, $stateParams,Restangular,$timeout) {
	
	   $scope.editstructproduct = 
	   {
		   items: [{	   
			   		category:'',
			   		product:'',
		   			price:0,
				    quantity:1,
				    summa:0	
		   		  }]
       };
	   
	    $scope.newMagaz = 
		{
		magaz: [{
			   supermarket:'',
			   adresssupermarket:'',
			   datepurchase:''
			   }]
		};
	
		var allproduct = Restangular.all('product').getList();
		var lne2 = Restangular.all('expanses');
		$scope.test2 = Restangular.all('expanses/listmagazine').getList().$object;
	
		allproduct.then(function(model)
		{
		  $scope.product = model;
		  for (var i = 0; i < $scope.product.length; i++)
		  {
				for (var j = 0; j < $scope.product[i].product.length; j++)
				{
					$scope.editstructproduct.items.push
					({
						category : $scope.product[i].category,
						product :  $scope.product[i].product[j].product,
						price:0,
					    quantity:1,
					    summa:0	
					});
				}
		  }
	    })
    
	$scope.total3 = function() {
		var tota = 0;
		angular.forEach($scope.userPerSystem, function(item) {
		    tota += item.price * item.quantity;
		})
		return tota;
		}
		$scope.createExpanses = function(){
		    	   var mas = [];
		    	   var i = 0;
		    	   angular.forEach($scope.userPerSystem, function(check) {
		    		  mas[i] ={check};
		    		  i++;
		           })
		    	   var expenses=$scope.newMagaz.magaz;
		           mas[i] ={expenses};
		           
		           // валидация
		           var flag = 0;
		           if(mas[0].check != undefined)
		           {
		        	   for(var ii = 0;ii < mas.length-1;ii++)
			           {
		        		   if(mas[ii].check.price != '0'){
				        	   flag = flag +1;
				           }else
				           {
				        	   flag = 0;
				        	   break;
				           }
			           }
		        	   if(flag > 0) $scope.messageMagaz = false;
		           }else
		           {
		        	   $scope.messageMagaz = true;
		           }
		           
		           if(mas[mas.length-1].expenses != undefined)
		           {
		        	   
		        	   if(mas[mas.length-1].expenses[0].supermarket != '' && mas[mas.length-1].expenses[0].adresssupermarket !='' && mas[mas.length-1].expenses[0].datepurchase != undefined){
			        		if(flag > 0)
			        		{
			        			$scope.messageMagaz2 = false;
			        			console.log('@@ '+JSON.stringify(mas));
					            $state.transitionTo('expanses'); 
			        		}
		        	   }else{
		        		   $scope.messageMagaz2 = true;
		        	   }
		           }
		           
		    	   /*lne2.post(mas).then(function(data){
		    		   $state.transitionTo('expanses');
			       },function(data){
			               alert('Failed to save Todo');
			       });*/
	       };	
    
    /*function change() {
        var appElement = document.querySelector('[ng-app=myApp]');
        var $scope = angular.element(appElement).scope();
        console.log('test0');
        $timeout(function()
        {
        	console.log('test1');
	        $scope.$apply(function() {
	        	console.log('test2');
	        	//$scope.product.category='@@@@@';
	            console.log('test3'+JSON.stringify($scope.product));
	        });
        },1000);
    }*/
		
	       $scope.today = function() {
		   	    //$scope.dt = new Date();
		   	  };
		   	  $scope.today();	       

		    	  $scope.clear = function() {
		    	    $scope.dt = null;
		    	  };

		    	  $scope.inlineOptions = {
		    	    customClass: getDayClass,
		    	    minDate: new Date(),
		    	    showWeeks: true
		    	  };

		    	  $scope.dateOptions = {
		    	    dateDisabled: disabled,
		    	    formatYear: 'yy',
		    	    maxDate: new Date(2020, 5, 22),
		    	    minDate: new Date(),
		    	    startingDay: 1
		    	  };

		    	  // Disable weekend selection
		    	  function disabled(data) {
		    	    var date = data.date,
		    	      mode = data.mode;
		    	    //return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
		    	    return mode === '';
		    	  }

		    	  $scope.toggleMin = function() {
		    	    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
		    	    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
		    	  };

		    	  $scope.toggleMin();

		    	  $scope.open1 = function() {
		    	    $scope.popup1.opened = true;
		    	  };

		    	  $scope.open2 = function() {
		    	    $scope.popup2.opened = true;
		    	  };

		    	  $scope.setDate = function(year, month, day) {
		    	    $scope.dt = new Date(year, month, day);
		    	  };

		    	  $scope.formats = ['dd.MM.yyyy'];
		    	  $scope.format = $scope.formats[0];
		    	  $scope.altInputFormats = ['dd.MM.yyyy'];

		    	  $scope.popup1 = {
		    	    opened: false
		    	  };

		    	  $scope.popup2 = {
		    	    opened: false
		    	  };

		    	  var tomorrow = new Date();
		    	  tomorrow.setDate(tomorrow.getDate() + 1);
		    	  var afterTomorrow = new Date();
		    	  afterTomorrow.setDate(tomorrow.getDate() + 1);
		    	  $scope.events = [
		    	    {
		    	      date: tomorrow,
		    	      status: 'full'
		    	    },
		    	    {
		    	      date: afterTomorrow,
		    	      status: 'partially'
		    	    }
		    	  ];
		    	  
		    	  function getDayClass(data) {
		    	    var date = data.date,
		    	      mode = data.mode;
		    	    if (mode === 'day') {
		    	      var dayToCheck = new Date(date).setHours(0,0,0,0);
		    	      console.log('dayToCheck '+dayToCheck);

		    	      for (var i = 0; i < $scope.events.length; i++) {
		    	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		    	        if (dayToCheck === currentDay) {
		    	          return $scope.events[i].status;
		    	        }
		    	      }
		    	    }

		    	    return '';
		    	  }
		    	  
		   $scope.userPerSystem= [];
}]);


