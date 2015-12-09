$(document).ready(function () {
    var NUM_OPTIONS = 3;
    
    $(".option").click(function(event){
	var clickedOpt = $(event.currentTarget);
	var position = parseInt(clickedOpt.attr("position"));

	console.log("clicked " + position);

	//Move the unclicked options out of the way
	var optionList = $(".option-list > .option");
	optionList.each(function(idx, opt) {
	    var distance = idx === position ? "200px" : "1000px";
            $(opt).animate({left: distance}, 500);
	})

        setTimeout(function () {
            //$(".option2").hide();
            //$(".option3").hide();
            clickedOpt.animate({
                width: '900px',
                left: '300px'
            });
            $(".window").animate({
                "margin-left": '-300px',
            });
        }, 500)
    });

});
