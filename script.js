
/*Hides input text when clicked on*/

$(".text-fields input").click(function(){
   $(this).next().hide();
});

$(".text-fields input").focusin(function(){
    $(this).click();
});

$(".text-fields input").blur(function(){
    if($(this).val() == "") {
        $(this).next().show();
    }
});

