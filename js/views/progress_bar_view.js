var progress_bar_view = (function(){

    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;

    function moveProgressBar(){
    	$('.progress-bar').stop().animate({
       	width: progressTotal
   		}, animationLength);
    }

    function initModule(){
    	moveProgressBar();
    }

    return {
    	moveProgressBar:moveProgressBar,
    	initModule : initModule
    }
})();

var canvas_circle_progress_view = (function(){
    var $canvas_circle_progress = $('#canvas'),
        $span_Procent = $('#procent'),
        make_circle = $canvas_circle_progress.get(0).getContext("2d");
         
    const pos_X = $canvas_circle_progress.width() / 2,
        pos_Y = $canvas_circle_progress.height() / 2,
        fps_make_circle = 1000 / 200, one_procent = 360 / 100;
            
    var procent = 0, result = one_procent * 64;
        make_circle.lineCap = 'round';

    function arcMove(){
        var deegres = 0;
        var acrInterval = setInterval (function() {
            deegres += 1;
            make_circle.clearRect( 0, 0, $canvas_circle_progress.width(), $canvas_circle_progress.height());
            procent = deegres / one_procent;
            $span_Procent.text(procent.toFixed());

            make_circle.beginPath();
            make_circle.arc( pos_X, pos_Y, 49, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
            make_circle.strokeStyle = '#e6e6e6';
            make_circle.lineWidth = '5';
            make_circle.stroke();

            make_circle.beginPath();
            make_circle.strokeStyle = '#ffc120';
            make_circle.lineWidth = '5';
            make_circle.arc( pos_X, pos_Y, 49, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
            make_circle.stroke();
            if( deegres >= result ) clearInterval(acrInterval);
        }, fps_make_circle);
    }

    function initModule(){
        arcMove();
    }

    return {
        arcMove : arcMove,
        initModule : initModule
    }
})();