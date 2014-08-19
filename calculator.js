define(["lodash", "json!data/apparel.json", "json!data/printing.json"], function(_, apparel, printingCosts) {	
	
	var Calculator = {
		totalCost: function(order) {
			if(order.garment && order.style)
				return (apparel[order.garment][order.style].price + Calculator.printingCost(order)) * Calculator.totalPieces(order);
			else
				return NaN;
		},
		totalPieces: function(order) {
			var total = 0;
			for(var i in order.quantity)
				total += (order.quantity[i] ? order.quantity[i] : 0);
			return total;
		},
		pricePerPiece: function(order) {
			return Calculator.totalCost(order) / Calculator.totalPieces(order);
		},
		printingCost: function(order) {
			
			// If there are no prints selected, lets not give a price.
			if(!order || !order.prints || !_.size(order.prints) || !_.compact(_.values(order.prints)).length) return NaN;
			
			// Find printing cost bracket for the quantity of garments in this order
			var priceBracket = _.keys(printingCosts).reduce(function(highestBracket, bracket) {
				if(bracket > highestBracket && Calculator.totalPieces(order) >= bracket)
					return bracket;
				else
					return highestBracket;
			});
			
			// If we didn't find a bracket lets not a return a price.
			if(!priceBracket || Calculator.totalPieces(order) < priceBracket) return NaN;
			
			// Lets get a price for each print and add them together to get the total printing cost.
			var cost = 0;
			_.compact(_.values(order.prints)).forEach(function(colors) {
				if(printingCosts[priceBracket][colors - 1])
					cost += printingCosts[priceBracket][colors - 1];
				else
					cost = NaN;
			});
			
			return cost;
		}
	}

	return Calculator;
});