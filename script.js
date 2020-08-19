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
let formFinal = $('#formFinal')[0];

formFinal.addEventListener('submit', function(e){
    console.log('clicked');
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_B5reWA9h', formFinal)
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
