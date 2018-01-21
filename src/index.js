const $ = require('jquery');

const isInViewport = (elem) => {
    let elemTop = elem.offsetTop;
    let elemBottom = elemTop + elem.offsetHeight;
    let viewportTop = window.scrollY;
    let viewportBottom = viewportTop + window.innerHeight;
    //console.log("elemTop: "+elemTop+"; elemBottom: "+elemBottom+"; viewPortTop: "+viewportTop+"; viewPortBottom: "+viewportBottom)
    return elemBottom > viewportTop && elemTop < viewportBottom;
};

$(document).ready(() => {
    var currentView = "resume";
    const resumeSections = $("#resume-content .section");
    const logoP = $("#logo-p");
    const logoL = $("#logo-l");
    const logoPL = $("#logo-pl");
    const logoContP = $("#logo-p-container");
    const logoContL = $("#logo-l-container");
    const logoContPL = $("#logo-container");
    const navbar = $(".navbar-block");
    const navbarText = $(".navbar-link");
    const navbarTextEven = $(".navbar-link>span:nth-child(2n)");
    const navbarTextOdd = $(".navbar-link>span:nth-child(2n+1)");
    const pulseRing = $("#pulsing-ring");
    const screenTopOffsetMultiplier = 0.05;
    const screenLogoSizeMultiplier = 1/12;
    var logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
    var logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
    var logoMovementTimeStep = 0;
    var pulseRingTimeStep = 0;
    const timeMultiplier = 300;
    var logoPulseHalt = true;
    const logoFadeOut = () => {
        if(!logoPulseHalt) {
            logoContPL.fadeTo(1000, 0.4, logoFadeIn);
        }
    };
    const logoFadeIn = () => {
        if(!logoPulseHalt) {
            logoContPL.fadeTo(1000, 1, logoFadeOut);
        }
    };

    logoP.css({
        "width": logoWidthHeight/2+"px",
        "left": logoWidthHeight/4+"px",
        "top": logoWidthHeight/4+"px"
    });

    logoL.css({
        "width": logoWidthHeight/2+"px",
        "left": logoWidthHeight/4+"px",
        "top": logoWidthHeight/4+"px"
    });

    logoPL.css({
        "width": logoWidthHeight/2+"px",
        "left": logoWidthHeight/4+"px",
        "top": logoWidthHeight/4+"px"
    });

    logoContP.css({
        "top": logoTopOffset+"px",
        "right": logoWidthHeight*(-1)+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    logoContL.css({
        "top":logoTopOffset+"px",
        "left": logoWidthHeight*(-1)+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    logoContPL.css({
        "top": logoTopOffset+"px",
        "left": $(window).width()/2-logoWidthHeight/2+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    var logoPulsingIntervalId;
    logoContPL.hover(() => {
        logoPulseHalt = false;
        logoFadeOut();
    }, () => {
        logoPulseHalt = true;
        logoContPL.fadeTo(100, 1);
    });

    pulseRing.css({
        "top": logoTopOffset+"px",
        "left": $(window).width()/2-logoWidthHeight/2+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    navbar.css({
        "margin": logoTopOffset+logoWidthHeight*(1/3)+"px"
    });

    navbarText.css({
        "font-size": logoWidthHeight*(1/5)+"px",
        "visibility": "visible"
    });

    navbarTextEven.fadeTo(0, 0);
    navbarTextOdd.fadeTo(0, 0);

    var logoMovementIntervalId = setInterval(() => {
        if(logoMovementTimeStep/timeMultiplier < 1) {
            var moveFuncValue = (-1)*Math.pow((logoMovementTimeStep/timeMultiplier-1),2)+1;
            var targetPixel = $(window).width()/2-logoWidthHeight/2;
            logoContP.css({
                "right": moveFuncValue*targetPixel+"px",
                "top": logoTopOffset+"px"
            });
            logoContL.css({
                "left": moveFuncValue*targetPixel+"px",
                "top": logoTopOffset+"px"
            });
            logoMovementTimeStep++;
        } else {
            clearInterval(logoMovementIntervalId);
            logoContP.remove();
            logoContL.remove();
            logoContPL.css("visibility", "visible");
            pulseRing.css("visibility", "visible");
            var newPulseRingWidthHeight = logoWidthHeight*(1+(pulseRingTimeStep/10));
            var newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
            var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
            var pulseRingIntervalId = setInterval(() => {
                if(pulseRingTimeStep < 90) {
                    newPulseRingWidthHeight = logoWidthHeight*(1+(pulseRingTimeStep/10));
                    newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
                    newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
                    pulseRing.css({
                        "width": newPulseRingWidthHeight+"px",
                        "height": newPulseRingWidthHeight+"px",
                        "top": newPulseRingTopOffset+"px",
                        "left": newPulseRingTargetPixel+"px",
                        "opacity": 1-pulseRingTimeStep/89
                    });
                    pulseRingTimeStep++;
                } else {
                    clearInterval(pulseRingIntervalId);
                    pulseRing.remove();
                }
            }, 1);
            navbarTextEven.fadeTo(800,1);
            var evenCharTimeoutId = setTimeout(() => {
                navbarTextOdd.fadeTo(800,1);
            }, 400);
            for(let i = 0; i < resumeSections.length; i++) {
                if(isInViewport(resumeSections[i])) {
                    $(resumeSections[i]).fadeTo(800, 1);
                }
            }
            
        }
    }, 1);

    $(window).resize(()=>{
        logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
        logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
        var targetPixel = $(window).width()/2-logoWidthHeight/2;
        //console.log("width of window is: "+$(window).width()+"; logo width is: "+logoWidthHeight+"; centering pixel is: "+targetPixel);

        logoP.css({
            "width": logoWidthHeight/2+"px",
            "left": logoWidthHeight/4+"px",
            "top": logoWidthHeight/4+"px"
        });

        logoL.css({
            "width": logoWidthHeight/2+"px",
            "left": logoWidthHeight/4+"px",
            "top": logoWidthHeight/4+"px"
        });

        logoPL.css({
            "width": logoWidthHeight/2+"px",
            "left": logoWidthHeight/4+"px",
            "top": logoWidthHeight/4+"px"
        });

        logoContP.css({
            "top": logoTopOffset+"px",
            "right": targetPixel+"px",
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });

        logoContL.css({
            "top": logoTopOffset+"px",
            "left": targetPixel+"px",
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });

        logoContPL.css({
            "top": logoTopOffset+"px",
            "left": targetPixel+"px",
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });

        pulseRing.css({
            "top": logoTopOffset+"px",
            "left": targetPixel+"px",
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });

        navbar.css({
            "margin": logoTopOffset+logoWidthHeight*(1/3)+"px"
        });

        navbarText.css({
            "font-size": logoWidthHeight*(1/5)+"px"
        });
    });

    $(window).on("resize scroll", function() {
        //console.log(resumeSections);
        for(let i = 0; i < resumeSections.length; i++) {
            if(isInViewport(resumeSections[i])) {
                $(resumeSections[i]).fadeTo(700, 1);
            }
        }
    });
});