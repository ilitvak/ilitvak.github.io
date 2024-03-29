/************************************/
/*** Scrolls to Section Upon Nav Click ***/
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
/*** Fills In Skill Bar Color ***/
/************************************/

if($(window).scrollTop > 999 ){
    $(".color-in-bar").addClass(".color-in-bar-now");
    console.log("Coloring-IN");
}




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


const selectClass = document.getElementById("filter-system");


const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");

selectClass.addEventListener("click", function() {
    const category = this.value;
    console.log("Category Selected: " + category);
    images.forEach(function(image) {
      if (category === "all") {
        image.style.display = "block";
      } else if (image.classList.contains(category)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });


$(window).scroll(function(){
    var currentPos = $(window).scrollTop() + $(window).height() / 2;  
    if(currentPos >= $(document).height() / 2) {
    console.log("wow")
    };   
})

    