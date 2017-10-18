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
    } else if( $(window).scrollTop() <= 350 ){
        $(".color-in-bar").each(function(){
            $(this).removeClass("color-in-bar-now");
        })
    }

});


/************************************/

/* Checks if form inputs have text */

/************************************/

var form = document.querySelector("form");

var hasText = document.querySelectorAll(".text-fields");
var convertNodeToArr = Array.prototype.slice.call(hasText);

form.addEventListener("focus", function(){
    console.log("wow");
});



//var blur = document.addEventListener("blur", changeFunction);

function changeFunction(){
    var addToLabel = document.querySelector(".animated-label");
    convertNodeToArr.forEach(function(cur){
            console.log( cur );
            addToLabel.classList.add("not-empty");
    });   
}

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

    