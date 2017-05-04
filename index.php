<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css" rel="stylesheet">
        <link rel="stylesheet" href="stylesheets/font-awesome.css">
        <link rel="stylesheet" href="stylesheets/pictonic.css">
        <!--[if lt IE 8]><script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script><![endif]-->
        <link rel="stylesheet" href="stylesheets/style.css" type='text/css'>
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Irwin Litvak's Portfolio</title>
    </head>

    <body>
        
        <a></a>
        <header id="bg" class="bg<?php echo rand(1,2) ?>">
            <div class="intro">
                <h1>Hello, I'm Irwin Litvak</h1>
                <p>front end developer</p>
            </div>
        </header>

        <section class="projects-section-container">
            <h1>Projects</h1>
            <div class="project-container">
                <div class="project clearfix">
                    <div class="project-info">
                        <a href="http://bloc-jams-testss.herokuapp.com/" target="_blank">
                            <img class="bloc" src="assets/bloc-jams.jpg" alt="bloc-image">
                        </a>
                        
                        <ul class="credential-list clearfix">
                            <li class="html5">
                                <span class="icon-html5-02 icons"></span>
                            </li>
                            <li class="css3">
                                <span class="icon-css3-02 icons"></span>
                            </li>
                            <li class="sass">
                                <img src="assets/sass.png" class="icon" />
                            </li>
                            <li class="angular">
                                <span class="icon-angularjs icons"></span>
                            </li>
                        </ul>
                    </div>
  
                    <div class="title">
                        <h2>BlocJams <a href="https://github.com/ilitvak/bloc-jams" target="_blank">Github</a></h2>
                        <p>BlocJams is a music application that allows the user to play music and use interactive scroll bars and volume controls. This was the first project I had to build as part of my 12-week immersive bootcamp. 
                        </p><br>
                        <p>There is a bonus hidden feature on Bloc-Jams. All you have to do is mouse click on 'Turn the Music Up'.</p><br>
                    </div>
                </div>
                
                <div class="project clearfix">
                    <div class="project-info">
                        <a href="http://pomodoro-app-timer.herokuapp.com/" target="_blank">
                            <img class="pomodoro" src="assets/pom.png" alt="pom-image">
                        </a>
                 
                        <ul class="credential-list clearfix">
                            <li class="html5">
                                <span class="icon-html5-02 icons"></span>
                            </li>
                            <li class="css3">
                                <span class="icon-css3-02 icons"></span>
                            </li>
                            <li class="sass">
                                <img src="assets/sass.png" class="icon" />
                            </li>
                            <li class="angular">
                                <span class="icon-angularjs icons"></span>
                            </li>
                        </ul>
                    </div>

                    <div class="title pom">
                        <h2>Pomodoro <a href="https://github.com/ilitvak/Pomodoro-App" target="_blank">Github</a></h2>
                        <p>The Pomodoro Timer is a productivity application that helps users use their time efficiently. You set the time for 25 minutes and during that time you focus on one sole task.
                        </p><br>
                        <p>I have used this timer for my daily activities and can confidently say I feel more productive. Hopefully you have similar results!</p><br>
                    </div>
                </div>
                
                <div class="project clearfix">
                    <div class="project-info">
                        <a href="http://bodybyyou.herokuapp.com/" target="_blank">
                            <img class="bodybyyou" src="assets/bodybyyou.png" alt="bodybyyou-image">
                        </a>
                        
                        <ul class="credential-list clearfix">
                            <li class="html5">
                                <span class="icon-html5-02 icons"></span>
                            </li>
                            <li class="css3">
                                <span class="icon-css3-02 icons"></span>
                            </li>
                            <li class="sass">
                                <img src="assets/sass.png" class="icon" />
                            </li>
                            <li class="angular">
                                <span class="icon-angularjs icons"></span>
                            </li>
                        </ul>
                    </div>
                   
                    <div class="title">
                        <h2>BodyByYou <a href="https://github.com/ilitvak/bodybyyou" target="_blank">Github</a></h2>     
                        <p>BodyByYou is a nutrition / educational website to inform people of the various benefits of eating healthy. The website covers multiple areas from food types: fats, carbohydrates, proteins, shopping lists, to motivational quotes.</p><br>
                        <p>This website encompasses a lot of my daily life and the effort that is required to eat well.</p>
                    </div>
                </div>
            </div>
        </section> <!-- This is the main container for projects -->
       
    
        <section class="skills">
            <h2>Skills</h2>
                <ul class="credential-list clearfix">
                    <li class="html5">
                        <span class="icon-html5-02 icons"></span>
                        <p>HTML5</p>
                    </li>
                    <li class="css3">
                        <span class="icon-css3-02 icons"></span>
                        <p>CSS3</p>
                    </li>
                    <li class="js">
                        <span class="icon-prog-js02 icons"></span>
                        <p>JavaScript</p>
                    </li>
                   
                    <li class="jquery">
                        <span class="icon-prog-jquery icons"></span>
                        <p>jQuery</p>
                    </li>
                    <li class="sass">
                        <img src="assets/sass.png" class="icon" />
                        <p>Sass</p>
                    </li>
                    <li class="angular">
                        <span class="icon-angularjs icons"></span>
                        <p>AngularJS</p>
                    </li>
                </ul>
        </section>
 
        <section class="section-bg clearfix">
            <div class="form-container">
                <form action="email.php" method="post"> 
                    <div class="input-container text-fields">
                        <input id="input-name" type="text" name="name" autocomplete="false" required>
                        <label for="input-name" data-req-text="Name"></label>
                    </div>
                    <div class="email-container text-fields">
                        <input id="email-input" type="email" name="email" autocomplete="false" required>
                        <label for="email-input" data-req-text="Email"></label>
                    </div>
                    <div class="message-container text-fields" autocomplete="false">
                        <textarea id="message-input" name="message" rows="5" required></textarea>
                        <label for="message-input" data-req-text="message"></label>
                    </div>
                    <div class="g-recaptcha" data-sitekey="6LdemxkUAAAAAPEY2D8ckaczqIRex0Bo5WZre5rB" data-callback="recaptchaCallBack"></div>
                    <div class="submit-container">
                        <input type="submit" id="submit" class="submit" value="Submit">
                    </div>
                </form>
            </div>
            
            <div class="social-icons-container">
                <ul class="clearfix">
                    <li>
                        <a href="https://github.com/ilitvak" target="_blank">
                            <i class="fa fa-github-alt fa-3x github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://codepen.io/purewisdom1/" target="_blank">
                            <i class="fa fa-codepen fa-3x codepen" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ilitvak" target="_blank">
                            <i class="fa fa-linkedin fa-3x linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="script.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-98519409-1', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>