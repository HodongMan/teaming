var index_view =  (function(){
	var $logo = $("#intro_logo");

	function logoEffect(){
		$logo.click(function(){
			$(this).effect("bounce", {times : 4}, 1000);
		});
	}

	function initModule(){
		$(document).ready(function(){
			logoEffect();
		})
	}

	return {
		logoEffect : logoEffect,
		initModule : initModule
	}

})();


/*	
	

	

	
*/