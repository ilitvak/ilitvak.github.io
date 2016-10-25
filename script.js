
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



$(window).scroll(function(){
    var currentPos = $(window).scrollTop();  
    if(currentPos > $(document).height() / 2) {
    console.log("wow")
    };   
})

    