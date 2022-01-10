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
/* Back to top btn animated in after 400px scrolling */
/************************************/
  var scrolled = 400;
  $(window).scroll(function() {
    if ( $(window).scrollTop() > scrolled ) {
      $('a.btt').fadeIn('slow');
    } else {
      $('a.btt').fadeOut('slow');
    }
  });
  
  // Back to top btn smooth scroll animation
  $('a.btt').on('click touchstart', function(event){
  	event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 700);
    return false;
  }) 


/************************************/
/* animates in super mario as you scroll */
/************************************/

$(window).scroll(function(e){
    e.preventDefault();
    console.log($(window).scrollTop());

    // mario enters
    if($(window).scrollTop() >= 500) {
        $('.animated-mario-container.first-mario').css({'-webkit-transform':'rotate(-45deg)', 'right': '-40px', 'left': 'auto'});
    } else {
        $('.animated-mario-container.first-mario').css({'-webkit-transform':'rotate(0deg)', 'right': '-150px', 'left': 'auto'});
    }
    
    // mario leaves at 1800px
    if($(window).scrollTop() >= 1800) {
        $('.animated-mario-container.first-mario').css({'-webkit-transform':'rotate(0deg)', 'right': '-150px', 'left': 'auto'});
    } 

    if($(window).scrollTop() >= 2400) {
        $('.animated-luigi-container.babyluigi').css({'-webkit-transform':'rotate(35deg)', 'left': '-30px', 'right': 'auto'});
    } else {
        $('.animated-luigi-container.babyluigi').css({'-webkit-transform':'rotate(0deg)', 'left': '-150px', 'right': 'auto'});
    } 

    if($(window).scrollTop() >= 3700) {
        $('.animated-luigi-container.babyluigi').css({'-webkit-transform':'rotate(0deg)', 'left': '-180px', 'right': 'auto'});
    }

    if($(window).scrollTop() >= 4500) {
        $('.animated-bowser-container').css({'right': '0'});
    } else {
        $('.animated-bowser-container').css({'right': '-150px'});
    } 


    if($(window).scrollTop() >= 6100) {
        $('.animated-bowser-container').css({'right': '-150px'});
    }
});


/************************************/
/* Adds custom background for mobile when scrolling for Navigation */
/************************************/
$(window).scroll(function(){
    if($(window).scrollTop() >= 200) {
        $('.intro').addClass("customBG");
    } else {
        $('.intro').removeClass("customBG");
    };
})


/************************************/
/* Adds a custom wiggle to the phone icon in the Main Navigation on Mobile */
/************************************/

$(window).scroll(function(){
    if($(window).scrollTop() >= 200) {
        $('.fa-phone-alt').addClass("itsTimeToWiggle");
    } else {
        $('.fa-phone-alt').removeClass("itsTimeToWiggle");
    };
})

/************************************/
/* Changes some font sizes around on scroll on Main Nav*/
/************************************/

$(window).scroll(function(){
    if($(window).scrollTop() >= 200) {
        $('.intro h1').addClass("h1Small");
        $('.intro p').addClass("pSmall");
        $('.intro a').addClass("aSmall");
        $('.intro i').addClass("phoneSmall");


        $('.above-navigation-bar').addClass("aboveNavNumber");



    } else {
        $('.fa-phone-alt').removeClass("itsTimeToWiggle");

        $('.intro h1').removeClass("h1Small");
        $('.intro p').removeClass("pSmall");
        $('.intro a').removeClass("aSmall");
        $('.intro i').removeClass("phoneSmall");

        $('.above-navigation-bar').removeClass("aboveNavNumber");
    };
})


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
    if( $(window).scrollTop() >= $(".seo-section").offset().top + $(".skills").outerHeight(true) - 150 ) {
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
let contactMeForm = document.getElementById('contactMeForm')

document.getElementById('contactMeForm').addEventListener('submit', function(e){
    console.log('clicked');
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_B5reWA9h', contactMeForm)
    .then(function(response){
        alertify.success('hell yeah!');
        console.log('SUCCESS!', response.status, response.text);
    }), function (error) {
        alertify.error('failed brah');
        console.log("Error is: " + error);
    }
})


var iLoveLolaColors = ["#d63031","#e84393","#6c5ce7","#0984e3","#00cec9","#74b9ff","#55efc4","#ffeaa7", "#fdcb6e", "#e17055", "#636e72"];
var heartBeat = 0;
function sendMeDaEmail(){

    document.querySelector('.fa-heart').style.color = iLoveLolaColors[heartBeat];
    document.querySelector('a.btt').style.backgroundColor = iLoveLolaColors[heartBeat];
    heartBeat++;

    if(heartBeat == iLoveLolaColors.length) {
        heartBeat = 0;
    }

}

setInterval(function(){
    sendMeDaEmail();
}, 1000)


/************************************/
/* Grab User Info Form */
/************************************/
var telephone = $('.telephone')[0];
var fullName = $('.fullName')[0];
var emailAddress = $('.emailAddress')[0];
var grabUserPlanOption = '';
var message = $('.message')[0];
var lastBtnSubmit = $('.lastBtnSubmit')[0];


// Info from EmailJS admin
var serviceID = 'gmail';
var template_id = "portfolio";

var userInfo = {
    fullName: '',
    email: '',
    telephone: '',
    message: '',
    service: ''
};

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}    
              

document.getElementById('contactMeForm').addEventListener('submit', function(e){
    e.preventDefault();

    if(fullName.value == '' || emailAddress.value == '' || telephone.value == ''){
        alertify.error('Please check your inputs');
    } else {
        grabUserPlanOption = $('#service').find(':selected').text();

        userInfo = {
            fullName: fullName.value,
            email: emailAddress.value,
            telephone: telephone.value,
            service: grabUserPlanOption,
            message: message.value
        };

        emailjs.send('gmail', 'client_inquiry', userInfo)
        .then(function(response){
            alertify.success('Your message has been successfully. I will reply to your shortly!');
     
            console.log('SUCCESS!', response.status, response.text);
    
            fullName.value = '';
            emailAddress.value = '';
            telephone.value = '';
            message.value = '';
        }), function (error) {
            alertify.error('failed');
            console.log("Error is: " + error);
        }
    }
   
    console.log(userInfo);
 
})


