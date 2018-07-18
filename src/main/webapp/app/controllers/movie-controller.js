(function() {

    var MovieController =  function() {

    	var vm = this;

        vm.isHidden = false;

        vm.sortBy = "id";

        vm.movies=[{'id': '1', 'title': 'rambo', 'genre': 'action', 'rating' : '18'} ,
        {'id': '4', 'title': 'harry potter', 'genre': 'fantasy', 'rating' : '12'} ,
         {'id': '2', 'title': 'it', 'genre': 'horror', 'rating' : '18'} ,
         {'id': '3', 'title': 'pulp fiction', 'genre': 'action', 'rating' : '18'}]

        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };

        vm.sort = function(s){
          vm.sortBy = s;
        };

    };

    angular.module('movieApp').controller('movieController', [MovieController]);
}());
