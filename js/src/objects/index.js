Index = {
	Carousels: {
		configs: {
			'default' : {
				loop               : true,
				nav                : false,
				pagination         : false,
				items              : 1,
				dots               : false,
				autoplay           : false,
				autoplayTimeout    : 3000,
				autoplayHoverPause : true,
				singleItem         : true,
				navText            : ["<i class='nav-left'></i>", "<i class='nav-right'></i>"]
			}
		},
		init: function(){
			$('.carousel-default').owlCarousel(Index.Carousels.configs['default']);
			$('.carousel-default').on('mouseout', function(){
				$('.carousel-default').trigger('stop.owl.autoplay');
				$('.carousel-default').trigger('play.owl.autoplay', [3000]);
			});
		}
	},
    init: function(){
    	Index.Carousels.init();
    }
}

$(document).ready(function() {
    Index.init();
});