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
    
    if($(window).scrollTop() >= $(".projects-grid").offset().top + $(".projects-grid").outerHeight(true) - 150 ){
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
/* Increase Form Size */
/************************************/
let greenIcon = document.querySelector('.green');
let redIcon = document.querySelector('.red');
let form = document.querySelector('.form-container');


$(greenIcon).click(function(e){
    e.preventDefault();
    form.classList.add('superSizeMe');
})

$(redIcon).click(function(e){
    e.preventDefault();
    form.classList.remove('superSizeMe');
})


/************************************/
/* Fills In My Typical Day Bar */
/************************************/

$(window).scroll(function(){

    // checks the scroll top against the bottom position of the skills section
    if( $(window).scrollTop() >= $(".skills").offset().top + $(".skills").outerHeight(true) - 150 ) {
        $(".about-me-grid-container").addClass("progress-bar-animation");  
        
        var a = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").addClass("active");
        }, .05) 
        
        var b = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().addClass("active");
        }, 700) 

        var c = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().addClass("active");
        },2100)

        var d = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().next().addClass("active");
        },2900)

        var e = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().next().next().addClass("active");
        },4500)
        
        var f = setTimeout(function(){
            $(".progress-bar li.grid-5:first-child").next().next().next().next().next().addClass("active");
        },5500)
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

/*$("form").submit(function(e){
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
});*/

/*var recaptchaToken = ""; 
function recaptchaCallBack(token) {
    // prints token once recaptcha challenge is completed
    // console.log(token);
    recaptchaToken = token;
}
*/
var iLoveLolaColors = ["#d63031","#e84393","#6c5ce7","#0984e3","#00cec9","#74b9ff","#55efc4","#ffeaa7", "#fdcb6e", "#e17055", "#636e72"];
var heartBeat = 0;
function iLoveYouLola(){

    document.querySelector('.fa-heart').style.color = iLoveLolaColors[heartBeat];
    heartBeat++;

    if(heartBeat == iLoveLolaColors.length) {
        heartBeat = 0;
    }

}

setInterval(function(){
    iLoveYouLola();
}, 1000)


/************************************/
/* Grab User Info Form */
/************************************/
let telephone = $('.telephone')[0];
let address = $('.address')[0];
let zipCode = $('#zip')[0];
let formOne = $('.form-1')[0];
let formTwo = $('.form-2')[0];
let formThree = $('.form-3')[0];
let getQuoteBtn = $('.get-quote')[0];
let continueBtn = $('.continueBtn')[0];
let fullName = $('.fullName')[0];
let emailAddress = $('.emailAddress')[0];
let grabUserPlanOption = '';
let lastBtnSubmit = $('.lastBtnSubmit')[0];
let formSubmitted = $('#finalForm')[0];


$(getQuoteBtn).click(function(e){
    e.preventDefault();
    if(!telephone.value || !address.value || !zipCode.value){
        alertify.error('Please check your entries');
    } else {
        telephone = telephone.value;
        address = address.value;
        zipCode = zipCode.value;

        $(formOne).hide();
        $(formTwo).show();

        $(continueBtn).click(function(e){
            e.preventDefault();
            if(!fullName.value || !emailAddress.value) {
                alertify.error('Please check your entries');
            } else {
                fullName = fullName.value;
                emailAddress = emailAddress.value;

                $(formTwo).hide();
                $(formThree).show();

                
            }
        });
    }
})

function sendEmail() {
    grabUserPlanOption = $('#plans').find(':selected').text();

    Email.send({
        SecureToken: "3976e595-4e69-4d24-b0e7-a6cc7db74767 ",
        To: "irwin.litvak@gmail.com",
        From: "ilitvak24@gmail.com",
        Subject: "Free Quote Inquiry",
        Body: "test",

    }).then(function(message){
        if(message == 'OK') {
            alertify.success('sent!')
        } else {
            alertify.error('Not sent.')
        }
    });
}