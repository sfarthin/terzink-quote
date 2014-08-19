define(["./calculator"], function(Calculator) {
	
	describe("Calculator", function() {
		
		it("can calculate total costs", function() {
			
			var order;
			
			order = {"quantity":{"36-37":10,"30-31":7,"32-33":11},"prints":{"right leg":0,"butt":2},"garment":"sweatpants","style":"unisex","color":"red"};			
			expect(Calculator.totalCost(order)).to.equal(408.24);
			
			order = {"quantity":{"47-49":10,"49-51":10,"43-45":10,"41-43":10,"39-41":10},"prints":{"front center":4,"back center":2},"garment":"tshirt","style":"vneck","color":"heather-brown"};
			expect(Calculator.totalCost(order)).to.equal(701.00);
		});
		
	});
	
});