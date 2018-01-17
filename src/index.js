//TODO
//  Detect Zoom
//  Boolean to detect logo movement is complete, then make sure logo is still centered

const $ = require('jquery');

var logoTopOffset = 100;
var logoWidthHeight = 100;
const timeMultiplier = 400;
var logoMovementTimeStep = 0;

$(document).ready(() => {
    logoTopOffset = $(window).height()*0.2;
    logoWidthHeight = $(window).height()*0.2;

    $("#logo-p").css({
        "width": logoWidthHeight/2+"px",
        "left": logoWidthHeight/4+"px",
        "top": logoWidthHeight/4+"px"
    });

    $("#logo-l").css({
        "width": logoWidthHeight/2+"px",
        "left": logoWidthHeight/4+"px",
        "top": logoWidthHeight/4+"px"
    });

    $("#logo-p-container").css({
        "top": $(window).height()/2-logoTopOffset+"px",
        "right": logoWidthHeight*(-1)+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    $("#logo-l-container").css({
        "top": $(window).height()/2-logoTopOffset+"px",
        "left": logoWidthHeight*(-1)+"px",
        "width": logoWidthHeight+"px",
        "height": logoWidthHeight+"px",
        "border-radius": logoWidthHeight/2+"px"
    });

    var logoMovementIntervalId = setInterval(() => {
        if(logoMovementTimeStep/timeMultiplier < 1) {
            var height = $(window).height()/2-logoTopOffset+"px";
            var moveFuncValue = (-1)*Math.pow((logoMovementTimeStep/timeMultiplier-1),2)+1;
            var targetPixel = $(window).width()/2-logoWidthHeight/2+logoWidthHeight;
            $("#logo-p-container").css({
                "right": moveFuncValue*targetPixel-logoWidthHeight+"px",
                "top": height
            });
        
            $("#logo-l-container").css({
                "left": moveFuncValue*targetPixel-logoWidthHeight+"px",
                "top": height
            });
            logoMovementTimeStep++;
        } else {
            clearInterval(logoMovementIntervalId);
        }
    }, 1);

    $(window).resize(()=>{
        const targetPixel = $(window).width()/2-logoWidthHeight/2;
        logoTopOffset = $(window).height()*0.2;
        logoWidthHeight = $(window).height()*0.2;

        $("#logo-p").css({
            "width": logoWidthHeight/2+"px",
            "left": logoWidthHeight/4+"px",
            "top": logoWidthHeight/4+"px"
        });

        $("#logo-l").css({
            "width": logoWidthHeight/2+"px",
            "left": logoWidthHeight/4+"px",
            "top": logoWidthHeight/4+"px"
        });

        $("#logo-p-container").css({
            "top": $(window).height()/2-logoTopOffset+"px",
            "right": targetPixel,
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });
        $("#logo-l-container").css({
            "top": $(window).height()/2-logoTopOffset+"px",
            "left": targetPixel,
            "width": logoWidthHeight+"px",
            "height": logoWidthHeight+"px",
            "border-radius": logoWidthHeight/2+"px"
        });
    });
});