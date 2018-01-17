//TODO
//  Detect Zoom
//  Boolean to detect logo movement is complete, then make sure logo is still centered

const $ = require('jquery');

const logoTopOffset = 100;
const logoWidthHeight = 100;
const timeMultiplier = 400;
var logoMovementTimeStep = 0;

$(document).ready(() => {
    console.log($(window).height());
    $("#logo-p-container").css({
        "top": $(window).height()/2-logoTopOffset+"px",
        "right": logoWidthHeight*(-1)+"px"
    });

    $("#logo-l-container").css({
        "top": $(window).height()/2-logoTopOffset+"px",
        "left": logoWidthHeight*(-1)+"px"
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
        $("#logo-p-container").css("top", $(window).height()/2-logoTopOffset+"px");
        $("#logo-l-container").css("top", $(window).height()/2-logoTopOffset+"px");
    });
});