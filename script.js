/************************************/

/* Scrolls to Section Upon Nav Click */

/************************************/

if($(window).width() > 1){
    $(".scroller").click(function(e){
        e.preventDefault();
        console.log("works");
        var aSelector = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(aSelector).offset().top - 60
        }, 1200);
    })
} 

/************************************/

/* Fills In Skill Bar Color */

/************************************/

$(window).scroll(function(){
    
    if($(window).scrollTop() > 850 ){
        $(".color-in-bar").each(function(){
            $(this).addClass("color-in-bar-now");
        })
        
    } else if( $(window).scrollTop() <= 344 ){
        $(".color-in-bar").each(function(){
            $(this).removeClass("color-in-bar-now");
        })
    }
});


/************************************/

/* Fills In My Typical Day Bar */

/************************************/


$(window).scroll(function(){

    if( $(window).scrollTop() >= 1280 ) {
        $(".about-me-grid-container").addClass("progress-bar-animation");  
        
        var a = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").addClass("active");
        }, .05) 
        
        var b = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().addClass("active");
        }, 800) 

        var c = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().addClass("active");
        },1700)

        var d = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().next().addClass("active");
        },2600)

        var e = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().next().next().addClass("active");
        },3500)
        
    } else if ($(window).scrollTop() <= 966 ) {
        $(".about-me-grid-container").removeClass("progress-bar-animation");
        
        $(".progress-bar li").siblings().removeClass("active");
    }
    
});
/************************************/

/* Checks if form inputs have text */

/************************************/

$(".text-fields input, .text-fields textarea").blur(function(){
    if( $(this).val() !== "") {
        $(this).parents(".text-fields").find("label").addClass("not-empty");
    }
});


/*Hides input text when clicked on*/


$("form").submit(function(e){
    e.preventDefault();
    if(recaptchaToken == "") {
        alert("Please complete the recaptcha challenge");
        return;
    }
    $.post(
        $(this).attr("action"),
        { 
            name: $("#input-name").val(),
            email: $("#email-input").val(),
            message: $("#message-input").val(),
            token: recaptchaToken
        },
        function(response){
            // place modal pop up info here for css
            if( response == '0' )
                alert("Your message has been sent");
            else
                alert("Sorry. There was an error submitting your message. Please try again, later.");
            window.scrollTo(0,0);
            window.location.reload();
        }
    ); 
});

var recaptchaToken = ""; 
function recaptchaCallBack(token) {
    // prints token once recaptcha challenge is completed
    // console.log(token);
    recaptchaToken = token;
}

    