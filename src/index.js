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
    if($(window).width() <= 600) {
        // console.log($(window).width()+" is small");
        $(".button-collapse").sideNav();
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function(el) {  }, // A function to be called when sideNav is opened
            onClose: function(el) {  }, // A function to be called when sideNav is closed
        });

        const logo = $("#logo-pl-mobile");
        const pulseRing = $("#pulsing-ring-mobile");

        var pulseRingTimeStepMobile = 0;
        var pulseRingIntervalIdMobile = setInterval(() => {
            const pulseRingWidth = logo.width();
            var newPulseRingWidth = pulseRingWidth*(1+((pulseRingTimeStepMobile%301)/900));
            var newPulseRingTargetPixel = ($("#nav-row").width()-newPulseRingWidth)/2;
            pulseRing.css({
                "width": newPulseRingWidth+"px",
                "left": newPulseRingTargetPixel+"px",
                "opacity": 1-(pulseRingTimeStepMobile%301)/300
            });
            if(pulseRing.css("visibility") == "hidden") {
                pulseRing.css("visibility", "visible");
            }
            pulseRingTimeStepMobile++;
        }, 1);

        var currentViewMobile = $("#home-content-mobile");

        $("#home-link-mobile").click(() => {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#home-content-mobile");   
            currentViewMobile.show(); 
            currentViewMobile.fadeTo(300, 1);
        });
        
        $("#resume-link-mobile").click(() => {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#resume-content-mobile");
            currentViewMobile.show(); 
            currentViewMobile.fadeTo(300, 1);
        });
        
        $("#projects-link-mobile").click(() => {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#projects-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });
        
        $("#thesis-link-mobile").click(() => {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#thesis-content-mobile");
            currentViewMobile.show(); 
            currentViewMobile.fadeTo(300, 1);
        });
        
        $("#contact-link-mobile").click(() => {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#contact-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $(window).on("resize scroll", function() {
            if($(window).width() > 600) {
                // console.log($(window).width()+" is med or larger");
                var currentView = $("#home-content");
                var currentContentSections = $("#home-content .section");
                const homeLink = $("#logo-container, #logo-container-collapsed");
                const resumeLink = $("#resume-link, #resume-link-collapsed");
                const contactLink = $("#contact-link, #contact-link-collapsed");
                const projectsLink = $("#projects-link, #projects-link-collapsed");
                const thesisLink = $("#thesis-link, #thesis-link-collapsed");
                const logoPL = $("#logo-pl");
                const logoContP = $("#logo-p-container");
                const logoContL = $("#logo-l-container");
                const logoContPL = $("#logo-container");
                const logoContPLCollapsed = $("#logo-container-collapsed");
                const navbar = $(".navbar-block");
                const navbarCollapsed = $(".navbar-block-collapsed");
                const navbarText = $(".navbar-link");
                const navbarTextCollapsed = $(".navbar-link-collapsed");
                const navbarTextEven = $(".navbar-link>span:nth-child(2n)");
                const navbarTextOdd = $(".navbar-link>span:nth-child(2n+1)");
                const pulseRingCollapsed = $("#pulsing-ring-collapsed");
                const screenTopOffsetMultiplier = 0.05;
                const screenLogoSizeMultiplier = 1/12;
                const centerLine = $("#center-line");
                var logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
                var logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
                var targetPixel = $(window).width()/2-logoWidthHeight/2;
                var logoMovementTimeStep = 0;
                var pulseRingTimeStepMobile = 0;
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
                const contentFadeIn = (sectionsSelector) => {
                    for(let i = 0; i < sectionsSelector.length; i++) {
                        if(isInViewport(sectionsSelector[i])) {
                            $(sectionsSelector[i]).fadeTo(700, 1);
                        }
                    }
                };
                const contentResetFade = (sectionsSelector) => {
                    for(let i = 0; i < sectionsSelector.length; i++) {
                        $(sectionsSelector[i]).css("opacity", "0");
                    }
                };
                const recenterLogo = () => {
                    logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
                    logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
                    targetPixel = $(window).width()/2-logoWidthHeight/2;
                    //console.log("width of window is: "+$(window).width()+"; logo width is: "+logoWidthHeight+"; centering pixel is: "+targetPixel);

                    logoPL.css({
                        "width": logoWidthHeight/2+"px",
                        "left": logoWidthHeight/4+"px",
                        "top": logoWidthHeight/4+"px"
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
                };

                window.scrollTo(0,0);

                logoPL.css({
                    "width": logoWidthHeight/2+"px",
                    "left": logoWidthHeight/4+"px",
                    "top": logoWidthHeight/4+"px"
                });

                logoContPL.css({
                    "top": logoTopOffset+"px",
                    "left": $(window).width()/2-logoWidthHeight/2+"px",
                    "width": logoWidthHeight+"px",
                    "height": logoWidthHeight+"px",
                    "border-radius": logoWidthHeight/2+"px"
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

                navbarTextCollapsed.css({
                    "font-size": logoWidthHeight*(1/5)+"px",
                    "visibility": "visible"
                });

                centerLine.css({
                    "left": $(window).width()/2-2
                });

                navbarTextEven.fadeTo(0, 0);
                navbarTextOdd.fadeTo(0, 0);

                logoContP.remove();
                logoContL.remove();
                logoContPL.css("visibility", "visible");
                centerLine.css("height", $("#home-block-right").height()+"px")
                navbarTextEven.css("opacity", "1");
                navbarTextOdd.css("opacity", "1");
                contentFadeIn(currentContentSections);
                recenterLogo();

                $(window).on("resize scroll", function() {
                    //TODO Debounce
                    recenterLogo();
                });

                homeLink.click(() => {
                    resumeLink.css("text-decoration","none");
                    contactLink.css("text-decoration","none");
                    projectsLink.css("text-decoration","none");
                    thesisLink.css("text-decoration","none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#home-content");
                    currentContentSections = $("#home-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                    var centerLineStretchTimeStep = 0;
                    var centerLineStretchIntervalId = setInterval(() => {
                        if(centerLineStretchTimeStep < 201) {
                            centerLine.css("height", $("#home-block-right").height()*(centerLineStretchTimeStep/200)+"px")
                            centerLineStretchTimeStep++
                        } else {
                            clearInterval(centerLineStretchIntervalId);
                        }
                    });
                });

                resumeLink.click(() => {
                    resumeLink.css("text-decoration","underline");
                    contactLink.css("text-decoration","none");
                    projectsLink.css("text-decoration","none");
                    thesisLink.css("text-decoration","none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#resume-content");
                    currentContentSections = $("#resume-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                contactLink.click(() => {
                    resumeLink.css("text-decoration","none");
                    contactLink.css("text-decoration","underline");
                    projectsLink.css("text-decoration","none");
                    thesisLink.css("text-decoration","none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#contact-content");
                    currentContentSections = $("#contact-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                projectsLink.click(() => {
                    //TODO Fade all elements out to opacity 0 to float in once loaded
                    resumeLink.css("text-decoration","none");
                    contactLink.css("text-decoration","none");
                    projectsLink.css("text-decoration","underline");
                    thesisLink.css("text-decoration","none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#projects-content");
                    currentContentSections = $("#projects-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                thesisLink.click(() => {
                    resumeLink.css("text-decoration","none");
                    contactLink.css("text-decoration","none");
                    projectsLink.css("text-decoration","none");
                    thesisLink.css("text-decoration","underline");
                    //TODO Fade all elements out to opacity 0 to float in once loaded
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#thesis-content");
                    currentContentSections = $("#thesis-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                $("#contact-form").submit((e) => {
                    if($("form #name").val() == "" || $("form #email").val() == "" || $("form #title").val() == "" || $("form #message").val() == "") {
                        e.preventDefault();
                        $("#message-form-error").text("Oops! Looks like some of the fields below are empty!")
                    } else {
                        e.preventDefault();
                        $.ajax({
                            url: 'https://formspree.io/po.grammer.lin@gmail.com',
                            method: 'POST',
                            data: $(this).serialize(),
                            dataType: 'json',
                            beforeSend: function() {
                                $("#message-form-error").text("Sending...");
                            },
                            success: function(data) {
                                $("#message-form-error").text("Thank you! Your message is sent!");
                            },
                            error: function(err) {
                                $("#message-form-error").text("There was an error submitting the form...");
                            }
                        });
                    }
                });

                var pulseRingIntervalIdMobile;
                logoContPL.hover(() => {
                    pulseRing.show();
                    pulseRingIntervalIdMobile = setInterval(() => {
                        var newPulseRingWidthHeight = logoWidthHeight*(1+((pulseRingTimeStepMobile%251)/250));
                        var newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
                        var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
                        pulseRing.css({
                            "width": newPulseRingWidthHeight+"px",
                            "height": newPulseRingWidthHeight+"px",
                            "top": newPulseRingTopOffset+"px",
                            "left": newPulseRingTargetPixel+"px",
                            "opacity": 1-(pulseRingTimeStepMobile%251)/249
                        });
                        pulseRingTimeStepMobile++;
                    }, 1);
                }, () => {
                    clearInterval(pulseRingIntervalIdMobile);
                    pulseRing.hide();
                    pulseRingTimeStepMobile = 0;
                });

                logoContPLCollapsed.hover(() => {
                    pulseRingCollapsed.show();
                    pulseRingIntervalIdMobile = setInterval(() => {
                        const pulseRingWidth = logoContPLCollapsed.css("width").substring(0, logoContPLCollapsed.css("width").length-2);
                        var newPulseRingWidth = pulseRingWidth*(1+((pulseRingTimeStepMobile%201)/400));
                        var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidth)/2;
                        pulseRingCollapsed.css({
                            "width": newPulseRingWidth+"px",
                            "left": newPulseRingTargetPixel+"px",
                            "opacity": 1-(pulseRingTimeStepMobile%201)/200
                        });
                        pulseRingTimeStepMobile++;
                    }, 1);
                }, () => {
                    clearInterval(pulseRingIntervalIdMobile);
                    pulseRingCollapsed.hide();
                    pulseRingTimeStepMobile = 0;
                });
            }
        });
    } else {
        // console.log($(window).width()+" is med or larger");
        var currentView = $("#home-content");
        var currentContentSections = $("#home-content .section");
        const homeLink = $("#logo-container, #logo-container-collapsed");
        const resumeLink = $("#resume-link, #resume-link-collapsed");
        const contactLink = $("#contact-link, #contact-link-collapsed");
        const projectsLink = $("#projects-link, #projects-link-collapsed");
        const thesisLink = $("#thesis-link, #thesis-link-collapsed");
        const logoP = $("#logo-p");
        const logoL = $("#logo-l");
        const logoPL = $("#logo-pl");
        const logoContP = $("#logo-p-container");
        const logoContL = $("#logo-l-container");
        const logoContPL = $("#logo-container");
        const logoContPLCollapsed = $("#logo-container-collapsed");
        const navbar = $(".navbar-block");
        const navbarCollapsed = $(".navbar-block-collapsed");
        const navbarText = $(".navbar-link");
        const navbarTextCollapsed = $(".navbar-link-collapsed");
        const navbarTextEven = $(".navbar-link>span:nth-child(2n)");
        const navbarTextOdd = $(".navbar-link>span:nth-child(2n+1)");
        const pulseRing = $("#pulsing-ring");
        const pulseRingCollapsed = $("#pulsing-ring-collapsed");
        const screenTopOffsetMultiplier = 0.05;
        const screenLogoSizeMultiplier = 1/12;
        const centerLine = $("#center-line");
        var logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
        var logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
        var targetPixel = $(window).width()/2-logoWidthHeight/2;
        var logoMovementTimeStep = 0;
        var pulseRingTimeStepMobile = 0;
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
        const contentFadeIn = (sectionsSelector) => {
            for(let i = 0; i < sectionsSelector.length; i++) {
                if(isInViewport(sectionsSelector[i])) {
                    $(sectionsSelector[i]).fadeTo(700, 1);
                }
            }
        };
        const contentResetFade = (sectionsSelector) => {
            for(let i = 0; i < sectionsSelector.length; i++) {
                $(sectionsSelector[i]).css("opacity", "0");
            }
        };
        const recenterLogo = () => {
            logoTopOffset = $(window).height()*screenTopOffsetMultiplier;
            logoWidthHeight = $(window).width()*screenLogoSizeMultiplier;
            targetPixel = $(window).width()/2-logoWidthHeight/2;
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
        };

        window.scrollTo(0,0);

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

        navbarTextCollapsed.css({
            "font-size": logoWidthHeight*(1/5)+"px",
            "visibility": "visible"
        });

        centerLine.css({
            "left": $(window).width()/2-2
        });

        navbarTextEven.fadeTo(0, 0);
        navbarTextOdd.fadeTo(0, 0);

        var logoMovementIntervalId = setInterval(() => {
            if(logoMovementTimeStep/timeMultiplier < 1) {
                var moveFuncValue = (-1)*Math.pow((logoMovementTimeStep/timeMultiplier-1),2)+1;
                targetPixel = $(window).width()/2-logoWidthHeight/2;
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
                var newPulseRingWidthHeight = logoWidthHeight*(1+(pulseRingTimeStepMobile/10));
                var newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
                var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
                var pulseRingIntervalId = setInterval(() => {
                    if(pulseRingTimeStepMobile < 90) {
                        newPulseRingWidthHeight = logoWidthHeight*(1+(pulseRingTimeStepMobile/10));
                        newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
                        newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
                        pulseRing.css({
                            "width": newPulseRingWidthHeight+"px",
                            "height": newPulseRingWidthHeight+"px",
                            "top": newPulseRingTopOffset+"px",
                            "left": newPulseRingTargetPixel+"px",
                            "opacity": 1-pulseRingTimeStepMobile/89
                        });
                        pulseRingTimeStepMobile++;
                    } else {
                        clearInterval(pulseRingIntervalId);
                        pulseRing.hide();
                        pulseRingTimeStepMobile = 0;
                    }
                }, 1);
                var centerLineStretchTimeStep = 0;
                var centerLineStretchIntervalId = setInterval(() => {
                    if(centerLineStretchTimeStep < 201) {
                        centerLine.css("height", $("#home-block-right").height()*(centerLineStretchTimeStep/200)+"px")
                        centerLineStretchTimeStep++
                    } else {
                        clearInterval(centerLineStretchIntervalId);
                    }
                });
                navbarTextEven.fadeTo(800,1);
                var evenCharTimeoutId = setTimeout(() => {
                    navbarTextOdd.fadeTo(800,1);
                }, 400);
                contentFadeIn(currentContentSections);
                recenterLogo();
            }
        }, 1);

        $(window).on("resize scroll", function() {
            //TODO Debounce
            recenterLogo();
            centerLine.css({
                "left": $(window).width()/2-2
            });
            centerLine.css("height", $("#home-block-right").height()+"px");
            navbarTextCollapsed.css({
                "font-size": logoWidthHeight*(1/5)+"px",
            });
            contentFadeIn(currentContentSections);
            if(!isInViewport(navbar[0])) {
                navbarCollapsed.slideDown(50);
                var ringWidth = logoContPLCollapsed.css("width");
                ringWidth = parseInt(ringWidth.substring(0, ringWidth.length-2), 10);
                pulseRingCollapsed.css({
                    "width": ringWidth+"px",
                    "left": ($(window).width()-ringWidth)/2+"px"
                });
            } else {
                navbarCollapsed.slideUp(50);
            }

            if($(window).width() <= 600) {
                // console.log($(window).width()+" is small");
                $(".button-collapse").sideNav();
                $('.button-collapse').sideNav({
                    menuWidth: 300, // Default is 300
                    edge: 'left', // Choose the horizontal origin
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true, // Choose whether you can drag to open on touch screens,
                    onOpen: function(el) {  }, // A function to be called when sideNav is opened
                    onClose: function(el) {  }, // A function to be called when sideNav is closed
                });
        
                var currentViewMobile = $("#home-content-mobile");
        
                $("#home-link-mobile").click(() => {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#home-content-mobile");   
                    currentViewMobile.show(); 
                    currentViewMobile.fadeTo(300, 1);
                });
                
                $("#resume-link-mobile").click(() => {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#resume-content-mobile");
                    currentViewMobile.show(); 
                    currentViewMobile.fadeTo(300, 1);
                });
                
                $("#projects-link-mobile").click(() => {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#projects-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });
                
                $("#thesis-link-mobile").click(() => {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#thesis-content-mobile");
                    currentViewMobile.show(); 
                    currentViewMobile.fadeTo(300, 1);
                });
                
                $("#contact-link-mobile").click(() => {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#contact-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });
            }
        });

        homeLink.click(() => {
            resumeLink.css("text-decoration","none");
            contactLink.css("text-decoration","none");
            projectsLink.css("text-decoration","none");
            thesisLink.css("text-decoration","none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#home-content");
            currentContentSections = $("#home-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
            var centerLineStretchTimeStep = 0;
            var centerLineStretchIntervalId = setInterval(() => {
                if(centerLineStretchTimeStep < 201) {
                    centerLine.css("height", $("#home-block-right").height()*(centerLineStretchTimeStep/200)+"px")
                    centerLineStretchTimeStep++
                } else {
                    clearInterval(centerLineStretchIntervalId);
                }
            });
        });

        resumeLink.click(() => {
            resumeLink.css("text-decoration","underline");
            contactLink.css("text-decoration","none");
            projectsLink.css("text-decoration","none");
            thesisLink.css("text-decoration","none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#resume-content");
            currentContentSections = $("#resume-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        contactLink.click(() => {
            resumeLink.css("text-decoration","none");
            contactLink.css("text-decoration","underline");
            projectsLink.css("text-decoration","none");
            thesisLink.css("text-decoration","none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#contact-content");
            currentContentSections = $("#contact-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        projectsLink.click(() => {
            //TODO Fade all elements out to opacity 0 to float in once loaded
            resumeLink.css("text-decoration","none");
            contactLink.css("text-decoration","none");
            projectsLink.css("text-decoration","underline");
            thesisLink.css("text-decoration","none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#projects-content");
            currentContentSections = $("#projects-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        thesisLink.click(() => {
            resumeLink.css("text-decoration","none");
            contactLink.css("text-decoration","none");
            projectsLink.css("text-decoration","none");
            thesisLink.css("text-decoration","underline");
            //TODO Fade all elements out to opacity 0 to float in once loaded
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#thesis-content");
            currentContentSections = $("#thesis-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        $("#contact-form").submit((e) => {
            if($("form #name").val() == "" || $("form #email").val() == "" || $("form #title").val() == "" || $("form #message").val() == "") {
                e.preventDefault();
                $("#message-form-error").text("Oops! Looks like some of the fields below are empty!")
            } else {
                e.preventDefault();
                $.ajax({
                    url: 'https://formspree.io/po.grammer.lin@gmail.com',
                    method: 'POST',
                    data: $(this).serialize(),
                    dataType: 'json',
                    beforeSend: function() {
                        $("#message-form-error").text("Sending...");
                    },
                    success: function(data) {
                        $("#message-form-error").text("Thank you! Your message is sent!");
                    },
                    error: function(err) {
                        $("#message-form-error").text("There was an error submitting the form...");
                    }
                });
            }
        });

        var pulseRingIntervalIdMobile;
        logoContPL.hover(() => {
            pulseRing.show();
            pulseRingIntervalIdMobile = setInterval(() => {
                var newPulseRingWidthHeight = logoWidthHeight*(1+((pulseRingTimeStepMobile%251)/250));
                var newPulseRingTopOffset = logoTopOffset-(newPulseRingWidthHeight-logoWidthHeight)/2;
                var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidthHeight)/2;
                pulseRing.css({
                    "width": newPulseRingWidthHeight+"px",
                    "height": newPulseRingWidthHeight+"px",
                    "top": newPulseRingTopOffset+"px",
                    "left": newPulseRingTargetPixel+"px",
                    "opacity": 1-(pulseRingTimeStepMobile%251)/249
                });
                pulseRingTimeStepMobile++;
            }, 1);
        }, () => {
            clearInterval(pulseRingIntervalIdMobile);
            pulseRing.hide();
            pulseRingTimeStepMobile = 0;
        });

        logoContPLCollapsed.hover(() => {
            pulseRingCollapsed.show();
            pulseRingIntervalIdMobile = setInterval(() => {
                const pulseRingWidth = logoContPLCollapsed.css("width").substring(0, logoContPLCollapsed.css("width").length-2);
                var newPulseRingWidth = pulseRingWidth*(1+((pulseRingTimeStepMobile%201)/400));
                var newPulseRingTargetPixel = ($(window).width()-newPulseRingWidth)/2;
                pulseRingCollapsed.css({
                    "width": newPulseRingWidth+"px",
                    "left": newPulseRingTargetPixel+"px",
                    "opacity": 1-(pulseRingTimeStepMobile%201)/200
                });
                pulseRingTimeStepMobile++;
            }, 1);
        }, () => {
            clearInterval(pulseRingIntervalIdMobile);
            pulseRingCollapsed.hide();
            pulseRingTimeStepMobile = 0;
        });
    }
});