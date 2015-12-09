$(document).ready(function () {
    $("#test").click(function () {
        console.log("clicked");
        $(".option1").animate({ left: '200px' }, 500);
        $(".option2").animate({ left: '1000px' }, 500);
        $(".option3").animate({ left: '1000px' }, 500);
        setTimeout(function () {
            //$(".option2").hide();
            //$(".option3").hide();
            $(".option1").animate({
                width: '900px',
                left: '300px'
            });
            $(".window").animate({
                "margin-left": '-300px',
            });
        }, 500)
    });

});