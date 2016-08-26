var open_modal = (function(){
	var $modal = $('#myModal');
	var span = document.getElementsByClassName("close")[0];

	function openModal(){
		$("#myBtn").click(function() {
    	    $modal.css("display", "block")
  		  });

	    $(".modal_close").click(function() {
	        $modal.css("display", "none")
	    });

	   window.onclick = function(event) {
	       if (event.target == $modal) {
	          $modal.css("display", "none")
	        }
	   }
	}

	function initModule(){
		openModal();
	}

	return {
		openModal : openModal,
		initModule : initModule
	}

})();

var ajax_to_html_by_job_list = (function(){

	var $modal_close = $("#modal_close"), $modal_ajax_call = $(".modal_ajax_call");
	var $job_info = $(".job_info");

	function deleteModal(){
		$(".modal_close").click(function(){
			$modal_ajax_call.html("");
		});
	}

	function showModal(){
		$job_info.click(function(){
			$.ajax({
				type : "get",
				url : "section-detail.html",
				dataType : "html",
				success : function(data){
					$modal_ajax_call.html(data);
					deleteModal();
				}
			});
		})
	}

	function initModule(){
		showModal();
	}

	return {
		showModal : showModal,
		initModule : initModule
	}



})();