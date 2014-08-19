define(["jquery", "lodash", "calculator", "json!data/apparel.json"], function($, _, Calculator, apparel) {
	
	describe("Calculator", function() {
		
		it("can calculate total costs", function() {
			
			var order;
			
			order = {"quantity":{"36-37":10,"30-31":7,"32-33":11},"prints":{"right leg":0,"butt":2},"garment":"sweatpants","style":"unisex","color":"red"};			
			expect(Calculator.totalCost(order)).to.equal(408.24);
			
			order = {"quantity":{"47-49":10,"49-51":10,"43-45":10,"41-43":10,"39-41":10},"prints":{"front center":4,"back center":2},"garment":"tshirt","style":"vneck","color":"heather-brown"};
			expect(Calculator.totalCost(order)).to.equal(701.00);

		});
		
	});
	
	describe("Images", function(done) {
		
		it("has a photo for each garment, style and color combination", function(done) {
			
			var images_to_load = 0,
				images_loaded = 0,
				finish_loading = function() {
					images_loaded++;
					
					if(images_to_load == images_loaded) done();					
				}
			
			_.keys(apparel).forEach(function(garment) {
				
				_.keys(apparel[garment]).forEach(function(style) {
					
					apparel[garment][style].colors.forEach(function(color) {
						
						images_to_load++;
						
					    $("<img>", {
					        src: require.toUrl('.') + "img/apparel/"+garment+"/"+style+"/"+color+".jpg",
					        error: function() { 
								finish_loading();
								expect("img/apparel/"+garment+"/"+style+"/"+color+".jpg").to.be.false; 
							},
					        load: function() { 
								finish_loading();
								expect("img/apparel/"+garment+"/"+style+"/"+color+".jpg").to.not.be.false; 
							}
					    });
					
					});	
					
				});
				
			});

		});
		
	});
	
});