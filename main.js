$(document).ready(function () {
    var NUM_OPTIONS = 3;
    var inMotion = false;

    //Click event for the small, unopened option
    $(".option").click(function(event){
        var clickedOpt = $(event.currentTarget);
        var position = parseInt(clickedOpt.attr("position"));
        var optionList = $(".option-list > .option");

        console.log("clicked " + position);

        if (!inMotion) {
            clickedOpt.addClass("in-motion");
            inMotion = true;

            if (clickedOpt.attr("state") === "minimized") {
                

                //Move the unclicked options out of the way
                optionList.each(function (idx, opt) {
                    var distance = 1000;
                    if (idx !== position) {
                        //Options to the left of the clicked option should fly away to the left,
                        //options to the right should fly right.
                        //We find the difference between their indices and divide by the absolute value
                        //to get positive or negative, and multiply the distance by that. 
                        var rel_idx = (idx - position);
                        var sign = rel_idx / Math.abs(rel_idx);
                        distance *= sign;
                    }
                    else {
                        //We can get the "centered" location for the clicked option
                        //by subtracting one and multiplying by the centered left side position.
                        distance = (idx - 1) * -316;
                    }
                    distance += "px";
                    $(opt).animate({ left: distance }, 500);
                })

                setTimeout(function () {
                    var distance = (position - 1) * -316;
                    distance += "px";
                    clickedOpt.animate({
                        width: '932px',
                        left: distance
                    });
                    $(".window").animate({
                        "margin-left": '-300px',
                    },500);

                    // we have finished animating
                    // we need to updated the css and state to reflect this
                    setTimeout(function () {
                        clickedOpt.attr("state", "maximized");
                        inMotion = false;
                        clickedOpt.removeClass("in-motion");
                    }, 500);
                }, 700)

                
            }
            else {
                //Animate minimizing the clicked option
                $(".window").animate({
                    "margin-left": '',
                });
                clickedOpt.animate({
                    width: '300px',
                    left: ''
                });

                //Bring back the other options
                setTimeout(function () {
                    optionList.each(function (idx, opt) {
                        $(opt).animate({ left: "0px" }, 500);
                    });

                    // we have finished animating
                    // we need to updated the css and state to reflect this
                    setTimeout(function () {
                        clickedOpt.attr("state", "minimized");
                        inMotion = false;
                        clickedOpt.removeClass("in-motion");
                    }, 500);

                }, 500);

            }
        }
    });

});
