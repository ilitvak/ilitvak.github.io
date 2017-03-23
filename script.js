
/*Hides input text when clicked on*/

$(".text-fields input, .text-fields textarea").click(function(){
   $(this).next().hide();
});

$(".text-fields input, .text-fields textarea").focusin(function(){
    $(this).click();
});

$(".text-fields input, .text-fields textarea").blur(function(){
    if($(this).val() == "") {
        $(this).next().show();
    }
});

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



$(window).scroll(function(){
    var currentPos = $(window).scrollTop() + $(window).height() / 2;  
    if(currentPos >= $(document).height() / 2) {
    console.log("wow")
    };   
})

    