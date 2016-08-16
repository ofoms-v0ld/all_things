angular.module('myApp.services',[])

.factory('ExpansesService', function(Restangular){
	var Exp = Restangular.all('expanses');
	
	return {
		getAll : function(){
			return Exp.getList().$object;
		}
	};
	
})

.factory('TodoService', function(Restangular){
	var Todos = Restangular.all('todos');
	return {
		getAll : function(){
			return Todos.getList().$object;
		},
                
                create : function(todo){
                    return Todos.post(todo);
                },
                
                update : function(todo){
                    return todo.put();
                }
	}
})

;