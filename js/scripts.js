jQuery(document).ready(function($){
	$.fn.exists = function(){return this.length>0;}
	if ($('#slider-01').exists()) {
		$( "#slider-01" ).slider({
			range: true,
			min: 0,
			max: 100,
			values: [ 50, 94 ]
		});
	}
	if ($('#slider-02').exists()) {
		$( "#slider-02" ).slider({
			range: true,
			min: 0,
			max: 30,
			values: [ 4, 17 ]
		});
	}
});