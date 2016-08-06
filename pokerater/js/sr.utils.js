$(document).ready(function(){

		if (("standalone" in window.navigator) && window.navigator.standalone) {
			// For iOS Apps
			$('body').on('click', 'a', function(e){
				// alert('hi!');
				e.preventDefault();
				var new_location = $(this).attr('href');
				if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined){
					window.location = new_location;
				}
			});
		}
		
});