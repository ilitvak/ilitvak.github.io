


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

var randomColor = Math.floor(Math.random() * 256);


$(".social-icons-container::before").css("color", randomColor); 

