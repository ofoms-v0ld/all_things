angular.module('myApp.controllers',[])

.controller('HomeController', [ '$scope', function ($scope) {
	$scope.hello = 'Im Home';
}])


// Through ExpansesService
/*.controller('ExpansesController', [ '$scope', 'ExpansesService', function ($scope, ExpansesService) {
	$scope.expans = ExpansesService.getAll();
}])*/

.controller('CreateExpansesController', [ '$scope', '$state','$stateParams', 'Restangular', 
    function ($scope, $state, $stateParams, Restangular) {
	
	var lne = Restangular.all('expanses/listmagazine');
	var lne2 = Restangular.all('expanses');
	var lne3 = Restangular.all('expanses/listproduct');
	
	$scope.test = function(){
 	   $scope.test2 = lne.getList().$object;
 	  $scope.listcategory = lne3.getList().$object;
    };
    
    $scope.newExpanses = 
	   {
	   	items: [{
	   	   category:'Укажите категорию',
		   product:'Укажите породукт',
		   price:2,
		   quantity:1,
		   summa:2}]
	       
	   };
    
    
	  
		$scope.newMagaz = 
		{
		magaz: [{
			   supermarket:'',
			   adresssupermarket:'',
			   datepurchase:''
			   }]
		};
		
		$scope.addItem = function() {
		$scope.newExpanses.items.push({
			   
			   category:'Укажите категорию',
			   product:'Укажите породукт',
			   price:2,
			   quantity:1,
			   summa:2
		});
		};
		
		$scope.total = function() {
		var total = 0;
		angular.forEach($scope.newExpanses.items, function(item) {
		    total += item.price * item.quantity;
		})
		return total;
		}
		
		
	       
	       $scope.today = function() {
	   	    $scope.dt = new Date();
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
	    
	    	  $scope.createExpanses = function(){
		    	   var mas = [];
		    	   var i = 0;
		    	   angular.forEach($scope.newExpanses.items, function(check) {
		    		  mas[i] ={check};
		    		  i++;
		           })
		    	   var expenses=$scope.newMagaz.magaz;
		           mas[i] ={expenses};
		    	   lne2.post(mas).then(function(data){
		               //alert('Saved successfully');
		               //$scope.newTodo = {};
		    		   $scope.loadTodos();
		    		   $state.transitionTo('expanses');
		       },function(data){
		               alert('Failed to save Todo');
		       });
		       };
	    	
		    $scope.test();
}])

.controller('ExpansesController', [ '$scope', '$state','$stateParams', 'Restangular', 
    function ($scope, $state, $stateParams, Restangular) {
	
       var Todos = Restangular.all('expanses');
       
     console.log('ctrl $stateParams.id ->'+$stateParams.id+":"+$state.params.id);
       if($state.params.id){
           Todos.get($state.params.id).then(function(todo){
               $scope.editExpenseObj = Restangular.copy(todo);
                console.log($scope.editExpenseObj);
           });
       }
       
       $scope.editPurchase = function(todo){
           $scope.editExpensesObj = Restangular.copy(todo);
           $state.transitionTo('expanses.edit',{id: $scope.editExpensesObj.id});
       };
       
       $scope.updateExpenses = function(todo){
           console.log('Update Todo: ');
                       todo.put().then(function(data){
                       //alert('Saved successfully');
                       $scope.editExpensesObj = {};
                       $scope.loadTodos();
               },function(data){
                       alert('Failed to save Todo');
               });
       };
       
              
       $scope.loadTodos = function(){
           $scope.expans = Todos.getList().$object;
       };
       
       
       
       $scope.loadTodos();
}])

.controller('TodoController', [ '$scope', '$state','$stateParams', 'Restangular', 
    function ($scope, $state, $stateParams, Restangular) {
       var Todos = Restangular.all('todos');
       
       //console.log('ctrl $stateParams.id ->'+$stateParams.id+":"+$state.params.id);
       if($state.params.id){
           Todos.get($state.params.id).then(function(todo){
               $scope.editTodoObj = Restangular.copy(todo);
                console.log('@@@@@@@@@@ '+$scope.editTodoObj);
           });
           
       }
       
       $scope.newTodo = {};
       $scope.loadTodos = function(){
           $scope.todos = Todos.getList().$object;
       };
       $scope.createTodo = function(todo){
                console.log('new Todo: '+todo.description);
                Todos.post(todo).then(function(data){
                        //alert('Saved successfully');
                        $scope.newTodo = {};
                        $scope.loadTodos();
                },function(data){
                        alert('Failed to save Todo');
                });
        };
        $scope.editTodo = function(todo){
            $scope.editTodoObj = Restangular.copy(todo);
            $state.transitionTo('todos.edit',{id: $scope.editTodoObj.id});
        };
        
        $scope.saveTodo = function(todo){
            console.log('Update Todo: '+todo.description);
                        todo.put().then(function(data){
                        //alert('Saved successfully');
                        $scope.editTodoObj = {};
                        $scope.loadTodos();
                },function(data){
                        alert('Failed to save Todo');
                });
        };
        $scope.deleteTodo = function(todo){
            todo.remove().then(function(){
                //$state.transitionTo('todos');
                $scope.loadTodos();
            });
            
        };
       $scope.loadTodos();
}]);
