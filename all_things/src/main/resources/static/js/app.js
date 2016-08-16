
var myApp = angular.module('myApp',['restangular','ui.router','myApp.controllers','myApp.parttwo','myApp.partfree','myApp.services','ngAnimate', 'ui.bootstrap','ngDragDrop']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.when('', '/home');
	$urlRouterProvider.otherwise('/home');
	/*
    $urlRouterProvider.rule(function($injector, $location) {
      return '/home';
    });
    */
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
        controller: 'HomeController'
	})
	.state('expanses', {
		url: '/expanses',
		templateUrl: 'templates/contacts.html',
        controller: 'ExpansesController'
	})
	.state('expanses.create', {
		url: '/create',
		templateUrl: 'new_expanses.html',
		controller: 'CreateExpansesController'
	})
	    .state('expanses.edit', {
		url: '/:id',
		templateUrl: 'edit_expanses.html'
                /*
                ,resolve: {
                    editTodoObj: function($stateParams, Restangular) {
                        var Todos = Restangular.all('todos');
                        
                        console.log('$stateParams.id ->'+$stateParams.id);
                        var  obj;
                        if($stateParams.id){
                           var currTodo = Todos.one($stateParams.id);
                           obj = Restangular.copy(currTodo);
                           console.log("=>"+obj);
                        }
                      return obj;
                    }
                }
                */
	})

	
	.state('todos', {
		url: '/todos',
		templateUrl: 'templates/todos.html',
        controller: 'TodoController'
	})
        
	.state('todos.create', {
		url: '/create',
		templateUrl: 'new_todo.html'
	})
        .state('todos.edit', {
		url: '/:id',
		templateUrl: 'edit_todo1.html'
                /*
                ,resolve: {
                    editTodoObj: function($stateParams, Restangular) {
                        var Todos = Restangular.all('todos');
                        
                        console.log('$stateParams.id ->'+$stateParams.id);
                        var  obj;
                        if($stateParams.id){
                           var currTodo = Todos.one($stateParams.id);
                           obj = Restangular.copy(currTodo);
                           console.log("=>"+obj);
                        }
                      return obj;
                    }
                }
                */
	})
	
	.state('parttwo', {
		url: '/parttwo',
		templateUrl: 'templates/parttwo.html',
        controller: 'ParttwoController'
	})
	
	.state('partfree', {
		url: '/partfree',
		templateUrl: 'templates/partfree.html',
        controller: 'PartfreeController'
	})
		
});

myApp.config(function($locationProvider, RestangularProvider) {
	//Restangular.setBaseUrl(location.protocol + '//' + location.hostname + (location.port && ':' + location.port) + location.pathname);
    RestangularProvider.setBaseUrl(location.pathname);
    
});

myApp.run(['$rootScope', '$location','$state', function ($rootScope, $location, $state) {
	
	$rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
		// We can prevent this state from completing
		//evt.preventDefault();
	    $rootScope.currentNavLink=$location.path();
	});
       // $state.transitionTo('/');
}]);

