define([
	'angular', 'lodash', 'numeral', 'jade!form', 
	'json!apparel.json', 'json!hexcolor.json', 'calculator', 
	'less!style', 'angular-route', 'checklist-model'], 
function(angular, _, numeral, form, apparel, hexColor, calculator) {
	
	// Copy our template in there
	document.getElementById("app").innerHTML = form();
	
	angular.module('app', ['checklist-model'])
		
		.controller('QuoteCtrl', ['$scope', function($scope) {
			
			try {
				$scope.order = JSON.parse(window.location.hash.substring(1));

				if($scope.order && $scope.order.prints) {
					$scope.placements = {};
					$scope.placements[$scope.order.garment+$scope.order.style] = _.keys($scope.order.prints);
				}
				
				$scope.firstLoad = true;
			} catch(e) {
				$scope.order = {};
				$scope.placements = {};
			}
			
			$scope.hexColor = hexColor;
			$scope.apparel = apparel;
			$scope.calculator = calculator;
			$scope.numeral = numeral;
		
			$scope.$watch("order.garment", function() {
				
				if($scope.firstLoad) return;
			
				$scope.order.quantity = {};
				$scope.order.prints = {};
			
				delete $scope.order.style;
				delete $scope.order.color;
			});
		
			$scope.$watch("order.style", function() {
			
				if($scope.firstLoad) {
					$scope.firstLoad = false;
					return;
				}
			
				$scope.order.quantity = {};
				$scope.order.prints = {};
			
				delete $scope.order.color;
			
				// Bug fix
				if(!$scope.placements[$scope.order.garment+$scope.order.style])
					$scope.placements[$scope.order.garment+$scope.order.style] = {}
			});
			
			$scope.$watch("order", function() {
				window.location.hash = JSON.stringify($scope.order);
			}, true);
			
		}])
		
		.filter("priceFilter", function() {
			return function(price) {
				if(isNaN(price)) {
					return "Every order requires a quantity of at least 15. Prints with 5 or more colors require an order of 24 garments or more.";
				}
				
				return "Total order price: $" + numeral(price).format('0,0.00');
				
			}
		})
		
		.filter("pricePerPieceFilter", function() {
			return function(price) {
				if(isNaN(price)) {
					return "Price per piece: $0.00";
				}

				return "Price per piece: $" + numeral(price).format('0,0.00');
				
			}
			
		})
	
	angular.bootstrap(document, ['app']);
	
});