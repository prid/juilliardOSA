

function create_event(name,location,date,time,categories,description){
	var event={};
	event.name=name;
	event.location=location;
	event.date=date;
	event.time=time;
	event.categories=categories;
	event.description=description;
	return event;
}

function get_categories(events){
	var out=[];
	for(i in events){
		var event=events[i];
		outer_block:
			for(j in event.categories){
				var category=event.categories[j];
				for(k in out){
					if(category==out[k]){
						break outer_block;
				}
			}
			out.push(category);
		}
	}
	return out;	
}


function init_categories(categories){
	var out={};
	for(var i=0;i<categories.length;i++){
		out[categories[i]]=true;
	}
	return out;
	
}
var sortableApp=angular.module('sortableApp', []);

sortableApp.controller("MainController",function ($scope) {
    $scope.events = events;
	$scope.categories=get_categories(events);
	$scope.filter = init_categories($scope.categories);//model and view are unified, hence to check checkboxes initially, initialize data first
	$scope.filterByCategory = function (event) {
		var categories=event.categories;
		for(var i=0;i<categories.length;i++){
			if($scope.filter[categories[i]]==true){
				return true;
			}	
		}
		return false;
        //return $scope.filter[event.category] || noFilter($scope.filter);
    };
    $scope.uncheck_all=function(){
		$scope.filter={};
	}
	$scope.check_all=function(){
		$scope.filter=init_categories($scope.categories);
	}
    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    } 
	
	
	
	})


