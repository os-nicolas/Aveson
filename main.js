$(document).ready(function () {
    $("#test").click(function () {
        console.log("clicked");
        $(".option1").animate({ left: '200px' }, 500);
        $(".option2").animate({ left: '1000px' }, 500);
        $(".option3").animate({ left: '1000px' }, 500);
        setTimeout(function () {
            $(".option1").animate({
                width: '900px',
            });
            $(".window").animate({
                "margin-left": '-300px',
            });
        }, 500)
    });

});