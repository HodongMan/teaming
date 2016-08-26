var change_icon_view = (function(){
	
    function changeCondIcon(){
    	$(".change_cond_icon").click(function() {
    		var _this = $(this);
   			var current = _this.attr("src");
    		var swap = _this.attr("data-swap"); 
     		_this.attr('src', swap).attr("data-swap",current);   
		});  
    }

    function initModule(){
    	changeCondIcon();
    }

    return{
    	changeCondIcon : changeCondIcon,
    	initModule : initModule
    }
})();

var job_list_change_icon_view = (function(){


	function showJobListByCond(){
		$("#all, #done, #doing, #todo").click(function(){
			var click_id_Text = $(this).attr("id");
			if(click_id_Text === "all"){
				$(".job_something").show();
			}else{
				$(".job_something").hide();
				$("." + click_id_Text).show();
				$(".create").show();
			}
		});
	}

	function initModule(){
		showJobListByCond();
	}

	return {
		showJobListByCond : showJobListByCond,
		initModule : initModule
	}


})();