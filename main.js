/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(1);

var isInViewport = function isInViewport(elem) {
    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight;
    var viewportTop = window.scrollY;
    var viewportBottom = viewportTop + window.innerHeight;
    //console.log("elemTop: "+elemTop+"; elemBottom: "+elemBottom+"; viewPortTop: "+viewportTop+"; viewPortBottom: "+viewportBottom)
    return elemBottom > viewportTop && elemTop < viewportBottom;
};

$(document).ready(function () {
    if ($(window).width() <= 600) {
        // console.log($(window).width()+" is small");
        $(".button-collapse").sideNav();
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function onOpen(el) {}, // A function to be called when sideNav is opened
            onClose: function onClose(el) {} // A function to be called when sideNav is closed
        });

        var logo = $("#logo-pl-mobile");
        var pulseRing = $("#pulsing-ring-mobile");

        var pulseRingTimeStepMobile = 0;
        var pulseRingIntervalIdMobile = setInterval(function () {
            var pulseRingWidth = logo.width();
            var newPulseRingWidth = pulseRingWidth * (1 + pulseRingTimeStepMobile % 301 / 900);
            var newPulseRingTargetPixel = ($("#nav-row").width() - newPulseRingWidth) / 2;
            pulseRing.css({
                "width": newPulseRingWidth + "px",
                "left": newPulseRingTargetPixel + "px",
                "opacity": 1 - pulseRingTimeStepMobile % 301 / 300
            });
            if (pulseRing.css("visibility") == "hidden") {
                pulseRing.css("visibility", "visible");
            }
            pulseRingTimeStepMobile++;
        }, 1);

        var currentViewMobile = $("#home-content-mobile");

        $("#home-link-mobile").click(function () {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#home-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $("#resume-link-mobile").click(function () {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#resume-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $("#projects-link-mobile").click(function () {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#projects-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $("#thesis-link-mobile").click(function () {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#thesis-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $("#contact-link-mobile").click(function () {
            currentViewMobile.css("opacity", "0");
            currentViewMobile.hide();
            currentViewMobile = $("#contact-content-mobile");
            currentViewMobile.show();
            currentViewMobile.fadeTo(300, 1);
        });

        $(window).on("resize scroll", function () {
            var _this = this;

            if ($(window).width() > 600) {
                // console.log($(window).width()+" is med or larger");
                var currentView = $("#home-content");
                var currentContentSections = $("#home-content .section");
                var homeLink = $("#logo-container, #logo-container-collapsed");
                var resumeLink = $("#resume-link, #resume-link-collapsed");
                var contactLink = $("#contact-link, #contact-link-collapsed");
                var projectsLink = $("#projects-link, #projects-link-collapsed");
                var thesisLink = $("#thesis-link, #thesis-link-collapsed");
                var logoPL = $("#logo-pl");
                var logoContP = $("#logo-p-container");
                var logoContL = $("#logo-l-container");
                var logoContPL = $("#logo-container");
                var logoContPLCollapsed = $("#logo-container-collapsed");
                var navbar = $(".navbar-block");
                var navbarCollapsed = $(".navbar-block-collapsed");
                var navbarText = $(".navbar-link");
                var navbarTextCollapsed = $(".navbar-link-collapsed");
                var navbarTextEven = $(".navbar-link>span:nth-child(2n)");
                var navbarTextOdd = $(".navbar-link>span:nth-child(2n+1)");
                var pulseRingCollapsed = $("#pulsing-ring-collapsed");
                var screenTopOffsetMultiplier = 0.05;
                var screenLogoSizeMultiplier = 1 / 12;
                var centerLine = $("#center-line");
                var logoTopOffset = $(window).height() * screenTopOffsetMultiplier;
                var logoWidthHeight = $(window).width() * screenLogoSizeMultiplier;
                var targetPixel = $(window).width() / 2 - logoWidthHeight / 2;
                var logoMovementTimeStep = 0;
                var pulseRingTimeStepMobile = 0;
                var timeMultiplier = 300;
                var logoPulseHalt = true;
                var logoFadeOut = function logoFadeOut() {
                    if (!logoPulseHalt) {
                        logoContPL.fadeTo(1000, 0.4, logoFadeIn);
                    }
                };
                var logoFadeIn = function logoFadeIn() {
                    if (!logoPulseHalt) {
                        logoContPL.fadeTo(1000, 1, logoFadeOut);
                    }
                };
                var contentFadeIn = function contentFadeIn(sectionsSelector) {
                    for (var i = 0; i < sectionsSelector.length; i++) {
                        if (isInViewport(sectionsSelector[i])) {
                            $(sectionsSelector[i]).fadeTo(700, 1);
                        }
                    }
                };
                var contentResetFade = function contentResetFade(sectionsSelector) {
                    for (var i = 0; i < sectionsSelector.length; i++) {
                        $(sectionsSelector[i]).css("opacity", "0");
                    }
                };
                var recenterLogo = function recenterLogo() {
                    logoTopOffset = $(window).height() * screenTopOffsetMultiplier;
                    logoWidthHeight = $(window).width() * screenLogoSizeMultiplier;
                    targetPixel = $(window).width() / 2 - logoWidthHeight / 2;
                    //console.log("width of window is: "+$(window).width()+"; logo width is: "+logoWidthHeight+"; centering pixel is: "+targetPixel);

                    logoPL.css({
                        "width": logoWidthHeight / 2 + "px",
                        "left": logoWidthHeight / 4 + "px",
                        "top": logoWidthHeight / 4 + "px"
                    });

                    logoContPL.css({
                        "top": logoTopOffset + "px",
                        "left": targetPixel + "px",
                        "width": logoWidthHeight + "px",
                        "height": logoWidthHeight + "px",
                        "border-radius": logoWidthHeight / 2 + "px"
                    });

                    pulseRing.css({
                        "top": logoTopOffset + "px",
                        "left": targetPixel + "px",
                        "width": logoWidthHeight + "px",
                        "height": logoWidthHeight + "px",
                        "border-radius": logoWidthHeight / 2 + "px"
                    });

                    navbar.css({
                        "margin": logoTopOffset + logoWidthHeight * (1 / 3) + "px"
                    });

                    navbarText.css({
                        "font-size": logoWidthHeight * (1 / 5) + "px"
                    });
                };

                window.scrollTo(0, 0);

                logoPL.css({
                    "width": logoWidthHeight / 2 + "px",
                    "left": logoWidthHeight / 4 + "px",
                    "top": logoWidthHeight / 4 + "px"
                });

                logoContPL.css({
                    "top": logoTopOffset + "px",
                    "left": $(window).width() / 2 - logoWidthHeight / 2 + "px",
                    "width": logoWidthHeight + "px",
                    "height": logoWidthHeight + "px",
                    "border-radius": logoWidthHeight / 2 + "px"
                });

                pulseRing.css({
                    "top": logoTopOffset + "px",
                    "left": $(window).width() / 2 - logoWidthHeight / 2 + "px",
                    "width": logoWidthHeight + "px",
                    "height": logoWidthHeight + "px",
                    "border-radius": logoWidthHeight / 2 + "px"
                });

                navbar.css({
                    "margin": logoTopOffset + logoWidthHeight * (1 / 3) + "px"
                });

                navbarText.css({
                    "font-size": logoWidthHeight * (1 / 5) + "px",
                    "visibility": "visible"
                });

                navbarTextCollapsed.css({
                    "font-size": logoWidthHeight * (1 / 5) + "px",
                    "visibility": "visible"
                });

                centerLine.css({
                    "left": $(window).width() / 2 - 2
                });

                navbarTextEven.fadeTo(0, 0);
                navbarTextOdd.fadeTo(0, 0);

                logoContP.remove();
                logoContL.remove();
                logoContPL.css("visibility", "visible");
                centerLine.css("height", $("#home-block-right").height() + "px");
                navbarTextEven.css("opacity", "1");
                navbarTextOdd.css("opacity", "1");
                contentFadeIn(currentContentSections);
                recenterLogo();

                $(window).on("resize scroll", function () {
                    //TODO Debounce
                    recenterLogo();
                });

                homeLink.click(function () {
                    resumeLink.css("text-decoration", "none");
                    contactLink.css("text-decoration", "none");
                    projectsLink.css("text-decoration", "none");
                    thesisLink.css("text-decoration", "none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#home-content");
                    currentContentSections = $("#home-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                    var centerLineStretchTimeStep = 0;
                    var centerLineStretchIntervalId = setInterval(function () {
                        if (centerLineStretchTimeStep < 201) {
                            centerLine.css("height", $("#home-block-right").height() * (centerLineStretchTimeStep / 200) + "px");
                            centerLineStretchTimeStep++;
                        } else {
                            clearInterval(centerLineStretchIntervalId);
                        }
                    });
                });

                resumeLink.click(function () {
                    resumeLink.css("text-decoration", "underline");
                    contactLink.css("text-decoration", "none");
                    projectsLink.css("text-decoration", "none");
                    thesisLink.css("text-decoration", "none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#resume-content");
                    currentContentSections = $("#resume-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                contactLink.click(function () {
                    resumeLink.css("text-decoration", "none");
                    contactLink.css("text-decoration", "underline");
                    projectsLink.css("text-decoration", "none");
                    thesisLink.css("text-decoration", "none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#contact-content");
                    currentContentSections = $("#contact-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                projectsLink.click(function () {
                    //TODO Fade all elements out to opacity 0 to float in once loaded
                    resumeLink.css("text-decoration", "none");
                    contactLink.css("text-decoration", "none");
                    projectsLink.css("text-decoration", "underline");
                    thesisLink.css("text-decoration", "none");
                    window.scrollTo(0, 0);
                    contentResetFade(currentContentSections);
                    currentView.hide();
                    currentView = $("#projects-content");
                    currentContentSections = $("#projects-content .section");
                    currentView.show();
                    contentFadeIn(currentContentSections);
                    recenterLogo();
                });

                thesisLink.click(function () {
                    resumeLink.css("text-decoration", "none");
                    contactLink.css("text-decoration", "none");
                    projectsLink.css("text-decoration", "none");
                    thesisLink.css("text-decoration", "underline");
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

                $("#contact-form").submit(function (e) {
                    if ($("form #name").val() == "" || $("form #email").val() == "" || $("form #title").val() == "" || $("form #message").val() == "") {
                        e.preventDefault();
                        $("#message-form-error").text("Oops! Looks like some of the fields below are empty!");
                    } else {
                        e.preventDefault();
                        $.ajax({
                            url: 'https://formspree.io/po.grammer.lin@gmail.com',
                            method: 'POST',
                            data: $(_this).serialize(),
                            dataType: 'json',
                            beforeSend: function beforeSend() {
                                $("#message-form-error").text("Sending...");
                            },
                            success: function success(data) {
                                $("#message-form-error").text("Thank you! Your message is sent!");
                            },
                            error: function error(err) {
                                $("#message-form-error").text("There was an error submitting the form...");
                            }
                        });
                    }
                });

                var pulseRingIntervalIdMobile;
                logoContPL.hover(function () {
                    pulseRing.show();
                    pulseRingIntervalIdMobile = setInterval(function () {
                        var newPulseRingWidthHeight = logoWidthHeight * (1 + pulseRingTimeStepMobile % 251 / 250);
                        var newPulseRingTopOffset = logoTopOffset - (newPulseRingWidthHeight - logoWidthHeight) / 2;
                        var newPulseRingTargetPixel = ($(window).width() - newPulseRingWidthHeight) / 2;
                        pulseRing.css({
                            "width": newPulseRingWidthHeight + "px",
                            "height": newPulseRingWidthHeight + "px",
                            "top": newPulseRingTopOffset + "px",
                            "left": newPulseRingTargetPixel + "px",
                            "opacity": 1 - pulseRingTimeStepMobile % 251 / 249
                        });
                        pulseRingTimeStepMobile++;
                    }, 1);
                }, function () {
                    clearInterval(pulseRingIntervalIdMobile);
                    pulseRing.hide();
                    pulseRingTimeStepMobile = 0;
                });

                logoContPLCollapsed.hover(function () {
                    pulseRingCollapsed.show();
                    pulseRingIntervalIdMobile = setInterval(function () {
                        var pulseRingWidth = logoContPLCollapsed.css("width").substring(0, logoContPLCollapsed.css("width").length - 2);
                        var newPulseRingWidth = pulseRingWidth * (1 + pulseRingTimeStepMobile % 201 / 400);
                        var newPulseRingTargetPixel = ($(window).width() - newPulseRingWidth) / 2;
                        pulseRingCollapsed.css({
                            "width": newPulseRingWidth + "px",
                            "left": newPulseRingTargetPixel + "px",
                            "opacity": 1 - pulseRingTimeStepMobile % 201 / 200
                        });
                        pulseRingTimeStepMobile++;
                    }, 1);
                }, function () {
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
        var homeLink = $("#logo-container, #logo-container-collapsed");
        var resumeLink = $("#resume-link, #resume-link-collapsed");
        var contactLink = $("#contact-link, #contact-link-collapsed");
        var projectsLink = $("#projects-link, #projects-link-collapsed");
        var thesisLink = $("#thesis-link, #thesis-link-collapsed");
        var logoP = $("#logo-p");
        var logoL = $("#logo-l");
        var logoPL = $("#logo-pl");
        var logoContP = $("#logo-p-container");
        var logoContL = $("#logo-l-container");
        var logoContPL = $("#logo-container");
        var logoContPLCollapsed = $("#logo-container-collapsed");
        var navbar = $(".navbar-block");
        var navbarCollapsed = $(".navbar-block-collapsed");
        var navbarText = $(".navbar-link");
        var navbarTextCollapsed = $(".navbar-link-collapsed");
        var navbarTextEven = $(".navbar-link>span:nth-child(2n)");
        var navbarTextOdd = $(".navbar-link>span:nth-child(2n+1)");
        var _pulseRing = $("#pulsing-ring");
        var pulseRingCollapsed = $("#pulsing-ring-collapsed");
        var screenTopOffsetMultiplier = 0.05;
        var screenLogoSizeMultiplier = 1 / 12;
        var centerLine = $("#center-line");
        var logoTopOffset = $(window).height() * screenTopOffsetMultiplier;
        var logoWidthHeight = $(window).width() * screenLogoSizeMultiplier;
        var targetPixel = $(window).width() / 2 - logoWidthHeight / 2;
        var logoMovementTimeStep = 0;
        var pulseRingTimeStepMobile = 0;
        var timeMultiplier = 300;
        var logoPulseHalt = true;
        var logoFadeOut = function logoFadeOut() {
            if (!logoPulseHalt) {
                logoContPL.fadeTo(1000, 0.4, logoFadeIn);
            }
        };
        var logoFadeIn = function logoFadeIn() {
            if (!logoPulseHalt) {
                logoContPL.fadeTo(1000, 1, logoFadeOut);
            }
        };
        var contentFadeIn = function contentFadeIn(sectionsSelector) {
            for (var i = 0; i < sectionsSelector.length; i++) {
                if (isInViewport(sectionsSelector[i])) {
                    $(sectionsSelector[i]).fadeTo(700, 1);
                }
            }
        };
        var contentResetFade = function contentResetFade(sectionsSelector) {
            for (var i = 0; i < sectionsSelector.length; i++) {
                $(sectionsSelector[i]).css("opacity", "0");
            }
        };
        var recenterLogo = function recenterLogo() {
            logoTopOffset = $(window).height() * screenTopOffsetMultiplier;
            logoWidthHeight = $(window).width() * screenLogoSizeMultiplier;
            targetPixel = $(window).width() / 2 - logoWidthHeight / 2;
            //console.log("width of window is: "+$(window).width()+"; logo width is: "+logoWidthHeight+"; centering pixel is: "+targetPixel);

            logoP.css({
                "width": logoWidthHeight / 2 + "px",
                "left": logoWidthHeight / 4 + "px",
                "top": logoWidthHeight / 4 + "px"
            });

            logoL.css({
                "width": logoWidthHeight / 2 + "px",
                "left": logoWidthHeight / 4 + "px",
                "top": logoWidthHeight / 4 + "px"
            });

            logoPL.css({
                "width": logoWidthHeight / 2 + "px",
                "left": logoWidthHeight / 4 + "px",
                "top": logoWidthHeight / 4 + "px"
            });

            logoContP.css({
                "top": logoTopOffset + "px",
                "right": targetPixel + "px",
                "width": logoWidthHeight + "px",
                "height": logoWidthHeight + "px",
                "border-radius": logoWidthHeight / 2 + "px"
            });

            logoContL.css({
                "top": logoTopOffset + "px",
                "left": targetPixel + "px",
                "width": logoWidthHeight + "px",
                "height": logoWidthHeight + "px",
                "border-radius": logoWidthHeight / 2 + "px"
            });

            logoContPL.css({
                "top": logoTopOffset + "px",
                "left": targetPixel + "px",
                "width": logoWidthHeight + "px",
                "height": logoWidthHeight + "px",
                "border-radius": logoWidthHeight / 2 + "px"
            });

            _pulseRing.css({
                "top": logoTopOffset + "px",
                "left": targetPixel + "px",
                "width": logoWidthHeight + "px",
                "height": logoWidthHeight + "px",
                "border-radius": logoWidthHeight / 2 + "px"
            });

            navbar.css({
                "margin": logoTopOffset + logoWidthHeight * (1 / 3) + "px"
            });

            navbarText.css({
                "font-size": logoWidthHeight * (1 / 5) + "px"
            });
        };

        window.scrollTo(0, 0);

        logoP.css({
            "width": logoWidthHeight / 2 + "px",
            "left": logoWidthHeight / 4 + "px",
            "top": logoWidthHeight / 4 + "px"
        });

        logoL.css({
            "width": logoWidthHeight / 2 + "px",
            "left": logoWidthHeight / 4 + "px",
            "top": logoWidthHeight / 4 + "px"
        });

        logoPL.css({
            "width": logoWidthHeight / 2 + "px",
            "left": logoWidthHeight / 4 + "px",
            "top": logoWidthHeight / 4 + "px"
        });

        logoContP.css({
            "top": logoTopOffset + "px",
            "right": logoWidthHeight * -1 + "px",
            "width": logoWidthHeight + "px",
            "height": logoWidthHeight + "px",
            "border-radius": logoWidthHeight / 2 + "px"
        });

        logoContL.css({
            "top": logoTopOffset + "px",
            "left": logoWidthHeight * -1 + "px",
            "width": logoWidthHeight + "px",
            "height": logoWidthHeight + "px",
            "border-radius": logoWidthHeight / 2 + "px"
        });

        logoContPL.css({
            "top": logoTopOffset + "px",
            "left": $(window).width() / 2 - logoWidthHeight / 2 + "px",
            "width": logoWidthHeight + "px",
            "height": logoWidthHeight + "px",
            "border-radius": logoWidthHeight / 2 + "px"
        });

        _pulseRing.css({
            "top": logoTopOffset + "px",
            "left": $(window).width() / 2 - logoWidthHeight / 2 + "px",
            "width": logoWidthHeight + "px",
            "height": logoWidthHeight + "px",
            "border-radius": logoWidthHeight / 2 + "px"
        });

        navbar.css({
            "margin": logoTopOffset + logoWidthHeight * (1 / 3) + "px"
        });

        navbarText.css({
            "font-size": logoWidthHeight * (1 / 5) + "px",
            "visibility": "visible"
        });

        navbarTextCollapsed.css({
            "font-size": logoWidthHeight * (1 / 5) + "px",
            "visibility": "visible"
        });

        centerLine.css({
            "left": $(window).width() / 2 - 2
        });

        navbarTextEven.fadeTo(0, 0);
        navbarTextOdd.fadeTo(0, 0);

        var logoMovementIntervalId = setInterval(function () {
            if (logoMovementTimeStep / timeMultiplier < 1) {
                var moveFuncValue = -1 * Math.pow(logoMovementTimeStep / timeMultiplier - 1, 2) + 1;
                targetPixel = $(window).width() / 2 - logoWidthHeight / 2;
                logoContP.css({
                    "right": moveFuncValue * targetPixel + "px",
                    "top": logoTopOffset + "px"
                });
                logoContL.css({
                    "left": moveFuncValue * targetPixel + "px",
                    "top": logoTopOffset + "px"
                });
                logoMovementTimeStep++;
            } else {
                clearInterval(logoMovementIntervalId);
                logoContP.remove();
                logoContL.remove();
                logoContPL.css("visibility", "visible");
                _pulseRing.css("visibility", "visible");
                var newPulseRingWidthHeight = logoWidthHeight * (1 + pulseRingTimeStepMobile / 10);
                var newPulseRingTopOffset = logoTopOffset - (newPulseRingWidthHeight - logoWidthHeight) / 2;
                var newPulseRingTargetPixel = ($(window).width() - newPulseRingWidthHeight) / 2;
                var pulseRingIntervalId = setInterval(function () {
                    if (pulseRingTimeStepMobile < 90) {
                        newPulseRingWidthHeight = logoWidthHeight * (1 + pulseRingTimeStepMobile / 10);
                        newPulseRingTopOffset = logoTopOffset - (newPulseRingWidthHeight - logoWidthHeight) / 2;
                        newPulseRingTargetPixel = ($(window).width() - newPulseRingWidthHeight) / 2;
                        _pulseRing.css({
                            "width": newPulseRingWidthHeight + "px",
                            "height": newPulseRingWidthHeight + "px",
                            "top": newPulseRingTopOffset + "px",
                            "left": newPulseRingTargetPixel + "px",
                            "opacity": 1 - pulseRingTimeStepMobile / 89
                        });
                        pulseRingTimeStepMobile++;
                    } else {
                        clearInterval(pulseRingIntervalId);
                        _pulseRing.hide();
                        pulseRingTimeStepMobile = 0;
                    }
                }, 1);
                var centerLineStretchTimeStep = 0;
                var centerLineStretchIntervalId = setInterval(function () {
                    if (centerLineStretchTimeStep < 201) {
                        centerLine.css("height", $("#home-block-right").height() * (centerLineStretchTimeStep / 200) + "px");
                        centerLineStretchTimeStep++;
                    } else {
                        clearInterval(centerLineStretchIntervalId);
                    }
                });
                navbarTextEven.fadeTo(800, 1);
                var evenCharTimeoutId = setTimeout(function () {
                    navbarTextOdd.fadeTo(800, 1);
                }, 400);
                contentFadeIn(currentContentSections);
                recenterLogo();
            }
        }, 1);

        $(window).on("resize scroll", function () {
            //TODO Debounce
            recenterLogo();
            centerLine.css({
                "left": $(window).width() / 2 - 2
            });
            centerLine.css("height", $("#home-block-right").height() + "px");
            navbarTextCollapsed.css({
                "font-size": logoWidthHeight * (1 / 5) + "px"
            });
            contentFadeIn(currentContentSections);
            if (!isInViewport(navbar[0])) {
                navbarCollapsed.slideDown(50);
                var ringWidth = logoContPLCollapsed.css("width");
                ringWidth = parseInt(ringWidth.substring(0, ringWidth.length - 2), 10);
                pulseRingCollapsed.css({
                    "width": ringWidth + "px",
                    "left": ($(window).width() - ringWidth) / 2 + "px"
                });
            } else {
                navbarCollapsed.slideUp(50);
            }

            if ($(window).width() <= 600) {
                // console.log($(window).width()+" is small");
                $(".button-collapse").sideNav();
                $('.button-collapse').sideNav({
                    menuWidth: 300, // Default is 300
                    edge: 'left', // Choose the horizontal origin
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    draggable: true, // Choose whether you can drag to open on touch screens,
                    onOpen: function onOpen(el) {}, // A function to be called when sideNav is opened
                    onClose: function onClose(el) {} // A function to be called when sideNav is closed
                });

                var currentViewMobile = $("#home-content-mobile");

                $("#home-link-mobile").click(function () {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#home-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });

                $("#resume-link-mobile").click(function () {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#resume-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });

                $("#projects-link-mobile").click(function () {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#projects-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });

                $("#thesis-link-mobile").click(function () {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#thesis-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });

                $("#contact-link-mobile").click(function () {
                    currentViewMobile.css("opacity", "0");
                    currentViewMobile.hide();
                    currentViewMobile = $("#contact-content-mobile");
                    currentViewMobile.show();
                    currentViewMobile.fadeTo(300, 1);
                });
            }
        });

        homeLink.click(function () {
            resumeLink.css("text-decoration", "none");
            contactLink.css("text-decoration", "none");
            projectsLink.css("text-decoration", "none");
            thesisLink.css("text-decoration", "none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#home-content");
            currentContentSections = $("#home-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
            var centerLineStretchTimeStep = 0;
            var centerLineStretchIntervalId = setInterval(function () {
                if (centerLineStretchTimeStep < 201) {
                    centerLine.css("height", $("#home-block-right").height() * (centerLineStretchTimeStep / 200) + "px");
                    centerLineStretchTimeStep++;
                } else {
                    clearInterval(centerLineStretchIntervalId);
                }
            });
        });

        resumeLink.click(function () {
            resumeLink.css("text-decoration", "underline");
            contactLink.css("text-decoration", "none");
            projectsLink.css("text-decoration", "none");
            thesisLink.css("text-decoration", "none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#resume-content");
            currentContentSections = $("#resume-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        contactLink.click(function () {
            resumeLink.css("text-decoration", "none");
            contactLink.css("text-decoration", "underline");
            projectsLink.css("text-decoration", "none");
            thesisLink.css("text-decoration", "none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#contact-content");
            currentContentSections = $("#contact-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        projectsLink.click(function () {
            //TODO Fade all elements out to opacity 0 to float in once loaded
            resumeLink.css("text-decoration", "none");
            contactLink.css("text-decoration", "none");
            projectsLink.css("text-decoration", "underline");
            thesisLink.css("text-decoration", "none");
            window.scrollTo(0, 0);
            contentResetFade(currentContentSections);
            currentView.hide();
            currentView = $("#projects-content");
            currentContentSections = $("#projects-content .section");
            currentView.show();
            contentFadeIn(currentContentSections);
            recenterLogo();
        });

        thesisLink.click(function () {
            resumeLink.css("text-decoration", "none");
            contactLink.css("text-decoration", "none");
            projectsLink.css("text-decoration", "none");
            thesisLink.css("text-decoration", "underline");
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

        $("#contact-form").submit(function (e) {
            if ($("form #name").val() == "" || $("form #email").val() == "" || $("form #title").val() == "" || $("form #message").val() == "") {
                e.preventDefault();
                $("#message-form-error").text("Oops! Looks like some of the fields below are empty!");
            } else {
                e.preventDefault();
                $.ajax({
                    url: 'https://formspree.io/po.grammer.lin@gmail.com',
                    method: 'POST',
                    data: $(undefined).serialize(),
                    dataType: 'json',
                    beforeSend: function beforeSend() {
                        $("#message-form-error").text("Sending...");
                    },
                    success: function success(data) {
                        $("#message-form-error").text("Thank you! Your message is sent!");
                    },
                    error: function error(err) {
                        $("#message-form-error").text("There was an error submitting the form...");
                    }
                });
            }
        });

        var pulseRingIntervalIdMobile;
        logoContPL.hover(function () {
            _pulseRing.show();
            pulseRingIntervalIdMobile = setInterval(function () {
                var newPulseRingWidthHeight = logoWidthHeight * (1 + pulseRingTimeStepMobile % 251 / 250);
                var newPulseRingTopOffset = logoTopOffset - (newPulseRingWidthHeight - logoWidthHeight) / 2;
                var newPulseRingTargetPixel = ($(window).width() - newPulseRingWidthHeight) / 2;
                _pulseRing.css({
                    "width": newPulseRingWidthHeight + "px",
                    "height": newPulseRingWidthHeight + "px",
                    "top": newPulseRingTopOffset + "px",
                    "left": newPulseRingTargetPixel + "px",
                    "opacity": 1 - pulseRingTimeStepMobile % 251 / 249
                });
                pulseRingTimeStepMobile++;
            }, 1);
        }, function () {
            clearInterval(pulseRingIntervalIdMobile);
            _pulseRing.hide();
            pulseRingTimeStepMobile = 0;
        });

        logoContPLCollapsed.hover(function () {
            pulseRingCollapsed.show();
            pulseRingIntervalIdMobile = setInterval(function () {
                var pulseRingWidth = logoContPLCollapsed.css("width").substring(0, logoContPLCollapsed.css("width").length - 2);
                var newPulseRingWidth = pulseRingWidth * (1 + pulseRingTimeStepMobile % 201 / 400);
                var newPulseRingTargetPixel = ($(window).width() - newPulseRingWidth) / 2;
                pulseRingCollapsed.css({
                    "width": newPulseRingWidth + "px",
                    "left": newPulseRingTargetPixel + "px",
                    "opacity": 1 - pulseRingTimeStepMobile % 201 / 200
                });
                pulseRingTimeStepMobile++;
            }, 1);
        }, function () {
            clearInterval(pulseRingIntervalIdMobile);
            pulseRingCollapsed.hide();
            pulseRingTimeStepMobile = 0;
        });
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map