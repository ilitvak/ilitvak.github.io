
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
    $.post(
        $(this).attr("action"),
        { 
            name: $("#input-name").val(),
            email: $("#email-input").val(),
            message: $("#message-input").val()
        },
        function(){
            // place modal pop up info here for css
            alert("Your message has been sent");
            window.scrollTo(0,0);
            window.location.reload();
        }
    ); 
});



$(window).scroll(function(){
    var currentPos = $(window).scrollTop() + $(window).height() / 2;  
    if(currentPos >= $(document).height() / 2) {
    console.log("wow")
    };   
})

    