angular.module('starter.services', [])
.factory("CoffeeService", function(){

	var coffees=[{
		id:0,
		name:"brewed Coffee",
		caffein:125,
	},
	{	
		id:1,
		name:"latte machiato",
		caffein:124,
	}];
	return{
		all:function(){
			return coffees;
		}
	}

	
});