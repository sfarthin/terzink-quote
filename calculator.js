define(["json!apparel.json", "json!printing.json"], function(apparel, printing) {	
	
	var Calculator = {
		totalShirts: function(order) {
			var total = 0;
			for(var i in order.quantity)
				total += (order.quantity[i] ? order.quantity[i] : 0);
			return total;
		},
		totalCost: function(order) {
			return (Calculator.pricePerShirt(order) + Calculator.printingCost(order)) * Calculator.totalShirts(order);
		},
		pricePerShirt: function(order) {
			if(order.garment && order.style)
				return apparel[order.garment][order.style].price;
		},
		pricePerItem: function(order) {
			return Calculator.totalPrice(order) / Calculator.totalShirts(order);
		},
		printingCost: function(order) {
			
			if(!order || !order.prints)
				return 0;
			
			/**
			*
			* Let's find the first print (the print with the most colors)
			*
			*/
			var first_print_id;
			for(var i in order.prints) {
				if(!first_print_id || order.prints[i] > order.prints[first_print_id])
					first_print_id = i;
			}
			
			// If there are no prints or no shirts lets not charge anything
			if(!first_print_id || Calculator.totalShirts(order) < 1)
				return 0;
			
			var num_colors = order.prints[first_print_id],
				num_shirts = Calculator.totalShirts(order),
				first_shirt_price;
			
			/**
			*
			* Let's pick the right first print price out of the hash table
			*
			*/
			var index = 0, shirt_total_catagory;
			for(var i in printing.firstPrint) {
				if(num_shirts < i)
					break;
				
				shirt_total_catagory = i;
				if(printing.firstPrint[i][num_colors])
					first_shirt_price = printing.firstPrint[i][num_colors];
			}
			
			
			/**
			*
			* Let's calculate the additional prints
			*
			*/
			var options_price = 0;
			for(var i in order.prints) {
				if(i != first_print_id && order.prints[i] > 0) {
					
					// Lets add the price for one color + the additional charge for extra colors
					options_price += printing.additional_print[shirt_total_catagory] + (printing.additional_color[shirt_total_catagory] * (order.prints[i]-1));
				}
			}
			
			return first_shirt_price+options_price;
		}
	}

	return Calculator;
});