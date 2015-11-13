angular.module('starter.services', [])
.factory("CoffeeService", function(){

	var coffees=[{
		id:0,
		name:"brewed Coffee",
		standard:5,
		ml:{caffein:35.2},//per 50ml
		oz:{caffein:20.4}//per 1oz
	},
	{	
		id:1,
		name:"Latte",
		ml:{size:450,caffein:146.5},
		oz:{size:16,caffein:154}

	},
	{
		id:2,
		name:"Espresso",
		ml:{size:45,caffein:78},
		oz:{size:1.5,caffein:77}
	},
	{
		id:3,
		name:"Black Tea",
		ml:{size:250,caffein:44.4},
		oz:{size:8,caffein:42}
	},
	{
		id:4,
		name:"Nespresso Espresso",
		ml:{size:40,caffein:60},
		oz:{size:1.3,caffein:60}

	},
	{
		id:5,
		name:"Nespresso Lungo",
		ml:{size:110,caffein:83},
		oz:{size:3.7,caffein:83}
	}];


	return{
		all:function(){
			return coffees;
		}
	}

	
});