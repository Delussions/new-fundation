/*! ------------------------------------------------
 * Project Name: Rayo - Digital Agency & Personal Portfolio HTML Template
 * Project Description: Elevate your digital presence with Rayo - dynamic and stylish HTML template designed for creative agencies and personal brands. With modern layouts, smooth interactions and a polished aesthetic, Rayo template helps showcase projects, services and expertise with clarity and impact.
 * Tags: mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean, agency, studio
 * Version: 1.0.0
 * Build Date: July 2025
 * Last Update: January 2026
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  01. Loader & Loading Animation
 *  02. Lenis Scroll Plugin
 *  03. Typed.js Plugin
 *  04. Header Scroll Behavior
 *  05. Hero #02 Scroll Out Animation
 *  06. Hero #07 Scroll Out Animation
 *  07. Hero #08 Scroll Out Animation
 *  08. SVG Fallback
 *  09. Chrome Smooth Scroll
 *  10. Images Moving Ban
 *  11. Detecting Mobile/Desktop
 *  12. Smooth Scrolling
 *  13. Menu & Hamburger
 *  14. Menu Accordion
 *  15. Layout Masonry
 *  16. Accordion
 *  17. Magnific Popup Video
 *  18. Mailchimp Subscribe Form
 *  19. Contact Form
 *  20. Parallax - Ukiyo Images & Video
 *  21. Pinned Images
 *  22. Stacking Cards
 *  23. Animation - Buttons Common
 *  24. Animation - Text Reveal
 *  25. Animation - Scroll Universal
 *  26. Animation - Images Reveal on Hover
 *  27. Swiper Slider - Testimonials #01
 *  28. Swiper Slider - Testimonials #02
 *  29. Swiper Slider - Inner Pages Demo
 *  30. CountUp - All Counters Options
 *  31. Marquee - Two Lines
 *  32. Marquee - One Line To Right
 *  33. Marquee - One Line To Left
 *  34. SVG DOM Injection
 *  35. Color Switch
 *  36. Scroll to Top Button
 *  37. Parallax Universal
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

// --------------------------------------------- //
// Loader & Loading Animation Start
// --------------------------------------------- //
const content = document.querySelector('body');
const imgLoad = imagesLoaded(content);
const loadingWrap = document.querySelector('.loading-wrap');
const loadingItems = loadingWrap.querySelectorAll('.loading__item');
const fadeInItems = document.querySelectorAll('.loading__fade');

function startLoader() {
  let counterElement = document.querySelector(".loader__count .count__text");
  let currentValue = 0;
  function updateCounter() {
    if (currentValue < 100) {
      let increment = Math.floor(Math.random() * 10) + 1;
      currentValue = Math.min(currentValue + increment, 100);
      counterElement.textContent = currentValue;
      let delay = Math.floor(Math.random() * 120) + 25;
      setTimeout(updateCounter, delay);
    }
  }
  updateCounter();
}
startLoader();

imgLoad.on('done', instance => {
  hideLoader();
  pageAppearance();
});

function hideLoader() {
  gsap.to(".loader__count", { duration: 0.8, ease: 'power2.in', y: "100%", delay: 1.8 });
  gsap.to(".loader__wrapper", { duration: 0.8, ease: 'power4.in', y: "-100%", delay: 2.2 });
  setTimeout(() => {
    document.getElementById("loader").classList.add("loaded");
  }, 3200);
}

function pageAppearance() {
  gsap.set(loadingItems, { opacity: 0, filter: "blur(20px)", scale: 1.08, y: 54 });
  gsap.to(loadingItems, { 
    duration: 1.5,
    ease: 'expo.out',
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    delay: 0.7,
    stagger: 0.14
  }, '>-=1.1');
  if (fadeInItems.length) {
    gsap.set(fadeInItems, { opacity: 0 });
    gsap.to(fadeInItems, { duration: 0.9, ease: 'power2.out', opacity: 1, delay: 3.0 });
  }
}
// --------------------------------------------- //
// Loader & Loading Animation End
// --------------------------------------------- //

// --------------------------------------------- //
// Lenis Scroll Plugin Start
// --------------------------------------------- //
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);
// --------------------------------------------- //
// Lenis Scroll Plugin End
// --------------------------------------------- //

$(window).on("load", function() {
   
  "use strict";

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-type");
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      showCursor: true,
      cursorChar: '_',
      loop: true,
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 2500
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //
  
});

$(window).on("scroll", function() {

  // --------------------------------------------- //
  // Header Scroll Behavior Start
  // --------------------------------------------- //
  var scrollTop = $(window).scrollTop();
  var hideThreshold = 10;
  var introSection = document.getElementById("inicio");
  if (introSection) {
    hideThreshold = Math.max(10, introSection.offsetHeight - window.innerHeight * 0.35);
  }
  if (scrollTop > hideThreshold) {
    $(".mxd-header").addClass("is-hidden");
  } else {
    $(".mxd-header").removeClass("is-hidden");
  }
  // --------------------------------------------- //
  // Header Scroll Behavior End
  // --------------------------------------------- //

});

// --------------------------------------------- //
// Hero #02 Scroll Out Animation Start
// --------------------------------------------- //
// Hero #02 scroll animated elements
hero02FadeOutEl = document.querySelectorAll(".hero-02-static-anim-el"); 
hero02FadeOutEl.forEach((element) => {
  let hero02fadeOutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-02-static__tl-trigger",
      start: "top 14%",
      end: "top 0.2%",
      scrub: {
        scrub: true, 
        ease: "sine",
      },
      // markers: true
    },
  });
  hero02fadeOutTl.fromTo(element, {
    transform: "translate3d(0, 0, 0)",
    scaleY: 1,
    opacity: 1
  }, 
  {
    transform: "translate3d(0, -5rem, 0)",
    scaleY: 1.3,
    opacity: 0
  });
});
// Hero #02 pinned screen
fadeOutEl = document.querySelectorAll(".hero-02-fade-out-scroll"); 
fadeOutEl.forEach((element) => {
  let fadeOutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mxd-pinned-fullscreen__tl-trigger",
      start: "top 80%",
      end: "top 10%",
      scrub: {
        scrub: true, 
        ease: "sine",
      },
      // markers: true
    },
  });
  fadeOutTl.fromTo(element, { opacity: 1 }, { opacity: 0 });
});
// --------------------------------------------- //
// Hero #02 Scroll Out Animation End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero #07 Scroll Out Animation Start
// --------------------------------------------- //
// Hero #07 scroll animated elements
hero07FadeOutEl = document.querySelectorAll(".hero-07-slide-out-scroll"); 
hero07FadeOutEl.forEach((element) => {
  let hero07fadeOutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mxd-hero-07__tl-trigger",
      start: "top 86%",
      end: "top 10%",
      scrub: {
        scrub: true, 
        ease: "power4.out",
      },
      // markers: true
    },
  });
  hero07fadeOutTl.fromTo(element, {
    transform: "translate3d(0, 0, 0)",
    scaleY: 1,
    // opacity: 1
  }, 
  {
    transform: "translate3d(0, -26rem, 0)",
    scaleY: 0.8,
    // opacity: 0
  });
});
// Hero #07 small scroll-out elements
fadeOutEl = document.querySelectorAll(".hero-07-fade-out-scroll"); 
fadeOutEl.forEach((element) => {
  let fadeOutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mxd-hero-07__tl-trigger",
      start: "top 70%",
      end: "top 40%",
      scrub: {
        scrub: true, 
        ease: "elastic.out(1,0.3)",
      },
      // markers: true
    },
  });
  fadeOutTl.fromTo(element, { opacity: 1, transform: "translate3d(0, 0, 0)" }, { opacity: 0, transform: "translate3d(0, -10rem, 0)"});
});
// --------------------------------------------- //
// Hero #07 Scroll Out Animation End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero #08 Multi-Phase Scroll Intro & Dissolve Start
// --------------------------------------------- //
const introPinnedEl = document.querySelector(".fgyb-intro-pinned");
if (introPinnedEl) {
  const headerEl = document.querySelector(".mxd-header");
  const navContainEl = document.querySelector(".mxd-nav__contain");
  const phase2El = introPinnedEl.querySelector(".is-phase-2");
  const phase3El = introPinnedEl.querySelector(".is-phase-3");

  // Phase 1 elements
  const p1Line1 = introPinnedEl.querySelector(".is-phase-1 .fgyb-line-1");
  const p1Line2 = introPinnedEl.querySelector(".is-phase-1 .fgyb-line-2");
  const p1Sub = introPinnedEl.querySelector(".is-phase-1 .fgyb-intro-sub");
  const p1LeftImg = introPinnedEl.querySelector(".is-phase-1 .fgyb-p-img.is-left");
  const p1RightImg = introPinnedEl.querySelector(".is-phase-1 .fgyb-p-img.is-right");
  const p1Photos = introPinnedEl.querySelectorAll(".is-phase-1 .fgyb-p-photo");

  // Phase 2 elements
  const p2Line1 = introPinnedEl.querySelector(".is-phase-2 .fgyb-line-1");
  const p2Line2 = introPinnedEl.querySelector(".is-phase-2 .fgyb-line-2");
  const p2Sub = introPinnedEl.querySelector(".is-phase-2 .fgyb-intro-sub");
  const p2LeftImg = introPinnedEl.querySelector(".is-phase-2 .fgyb-p-img.is-left");
  const p2RightImg = introPinnedEl.querySelector(".is-phase-2 .fgyb-p-img.is-right");
  const p2Photos = introPinnedEl.querySelectorAll(".is-phase-2 .fgyb-p-photo");

  // Phase 3 elements
  const p3Line1 = introPinnedEl.querySelector(".is-phase-3 .fgyb-line-1");
  const p3Line2 = introPinnedEl.querySelector(".is-phase-3 .fgyb-line-2");
  const p3Sub = introPinnedEl.querySelector(".is-phase-3 .fgyb-intro-sub");
  const p3LeftImg = introPinnedEl.querySelector(".is-phase-3 .fgyb-p-img.is-left");
  const p3RightImg = introPinnedEl.querySelector(".is-phase-3 .fgyb-p-img.is-right");
  const p3Photos = introPinnedEl.querySelectorAll(".is-phase-3 .fgyb-p-photo");

  // Real Hero elements
  const realHero = introPinnedEl.querySelector(".fgyb-real-hero");
  const realLogo = introPinnedEl.querySelector(".fgyb-real-logo");
  const realLine1 = introPinnedEl.querySelector(".fgyb-real-line-1");
  const realLine2 = introPinnedEl.querySelector(".fgyb-real-line-2");
  const realBottom = introPinnedEl.querySelector(".fgyb-real-bottom");

  const setIntroHeaderVisibility = (showHeader) => {
    if (showHeader) {
      if (headerEl) headerEl.classList.remove("is-intro-hidden");
      if (navContainEl) navContainEl.classList.remove("is-intro-hidden");
      if (realHero) realHero.style.pointerEvents = "auto";
    } else {
      if (headerEl) headerEl.classList.add("is-intro-hidden");
      if (navContainEl) navContainEl.classList.add("is-intro-hidden");
      if (realHero) realHero.style.pointerEvents = "none";
    }
  };

  gsap.set([phase2El, phase3El], { opacity: 1 });

  // Initial states: Phase 1 ready on stage
  gsap.set(p1LeftImg, { opacity: 0.52, filter: "blur(0px)", yPercent: 22, scale: 0.94, rotation: -2 });
  gsap.set(p1RightImg, { opacity: 0.48, filter: "blur(0px)", yPercent: 34, scale: 0.9, rotation: 2.2 });
  gsap.set(p1Photos, { scale: 1.22, yPercent: -8 });

  // Initial states: Phase 2 & 3 waiting in deep optical blur
  gsap.set([p2Line1, p2Line2, p3Line1, p3Line2], { opacity: 0, filter: "blur(24px)", y: 48, scale: 1.1 });
  gsap.set([p2Sub, p3Sub], { opacity: 0, filter: "blur(18px)", y: 36, scale: 1.04 });

  gsap.set([p2LeftImg, p3LeftImg], { opacity: 0, filter: "blur(16px)", yPercent: 40, scale: 0.9, rotation: -2.5 });
  gsap.set([p2RightImg, p3RightImg], { opacity: 0, filter: "blur(16px)", yPercent: 54, scale: 0.88, rotation: 2.5 });
  gsap.set([p2Photos, p3Photos], { scale: 1.24, yPercent: -10 });

  // Initial states: Real Hero waiting to crystallize at exact center
  gsap.set(realHero, { pointerEvents: "none" });
  gsap.set(realLogo, { opacity: 0, filter: "blur(28px)", scale: 1.22, y: 10 });
  gsap.set(realLine1, { opacity: 0, filter: "blur(26px)", scale: 1.12, y: 18 });
  gsap.set(realLine2, { opacity: 0, filter: "blur(26px)", scale: 1.12, y: 24 });
  gsap.set(realBottom, { opacity: 0, filter: "blur(16px)", y: 42 });

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: introPinnedEl,
      start: "top top",
      end: "+=330%",
      pin: true,
      scrub: 1.1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        setIntroHeaderVisibility(self.progress >= 0.8);
      },
      onLeave: () => {
        setIntroHeaderVisibility(true);
      },
      onLeaveBack: () => {
        setIntroHeaderVisibility(false);
      }
    }
  });

  // ==========================================
  // PHASE 1: Multi-plane parallax & staggered optical dissolve
  // ==========================================
  introTl.to(p1LeftImg, { yPercent: -32, scale: 1.05, rotation: 1.2, duration: 2.9, ease: "none" }, 0);
  introTl.to(p1RightImg, { yPercent: -46, scale: 1.08, rotation: -1.5, duration: 2.9, ease: "none" }, 0);
  introTl.to(p1Photos, { scale: 1.0, yPercent: 8, duration: 2.9, ease: "none" }, 0);

  // Subtle living float while reading Phase 1
  introTl.to([p1Line1, p1Line2], { y: -8, scale: 0.985, duration: 1.5, ease: "sine.inOut" }, 0);

  // Staggered dissolve out of Phase 1
  introTl.to(p1Line1, { opacity: 0, filter: "blur(24px)", y: -38, scale: 0.92, duration: 1.15, ease: "power2.inOut" }, 1.55);
  introTl.to(p1Line2, { opacity: 0, filter: "blur(24px)", y: -34, scale: 0.92, duration: 1.15, ease: "power2.inOut" }, 1.68);
  introTl.to(p1Sub, { opacity: 0, filter: "blur(18px)", y: -26, scale: 0.95, duration: 1.1, ease: "power2.inOut" }, 1.8);
  introTl.to([p1LeftImg, p1RightImg], { opacity: 0, filter: "blur(18px)", duration: 1.1, ease: "power2.inOut" }, 1.7);

  // ==========================================
  // PHASE 2: Staggered emergence, asymmetric parallax & dissolve
  // ==========================================
  introTl.to(p2LeftImg, { opacity: 0.54, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 2.25);
  introTl.to(p2RightImg, { opacity: 0.48, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 2.4);
  introTl.to(p2LeftImg, { yPercent: -34, scale: 1.06, rotation: 1.4, duration: 3.8, ease: "none" }, 2.2);
  introTl.to(p2RightImg, { yPercent: -48, scale: 1.08, rotation: -1.6, duration: 3.8, ease: "none" }, 2.2);
  introTl.to(p2Photos, { scale: 1.0, yPercent: 10, duration: 3.8, ease: "none" }, 2.2);

  introTl.to(p2Line1, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 2.26);
  introTl.to(p2Line2, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 2.42);
  introTl.to(p2Sub, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, 2.58);

  // Subtle living float while reading Phase 2
  introTl.to([p2Line1, p2Line2], { y: -8, scale: 0.985, duration: 1.2, ease: "sine.inOut" }, 3.65);

  // Staggered dissolve out of Phase 2
  introTl.to(p2Line1, { opacity: 0, filter: "blur(24px)", y: -38, scale: 0.92, duration: 1.15, ease: "power2.inOut" }, 4.88);
  introTl.to(p2Line2, { opacity: 0, filter: "blur(24px)", y: -34, scale: 0.92, duration: 1.15, ease: "power2.inOut" }, 5.0);
  introTl.to(p2Sub, { opacity: 0, filter: "blur(18px)", y: -26, scale: 0.95, duration: 1.1, ease: "power2.inOut" }, 5.12);
  introTl.to([p2LeftImg, p2RightImg], { opacity: 0, filter: "blur(18px)", duration: 1.1, ease: "power2.inOut" }, 5.02);

  // ==========================================
  // PHASE 3: Staggered emergence & in-place morph dissolve into Real Hero
  // ==========================================
  introTl.to(p3LeftImg, { opacity: 0.54, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 5.55);
  introTl.to(p3RightImg, { opacity: 0.48, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 5.7);
  introTl.to(p3LeftImg, { yPercent: -34, scale: 1.06, rotation: 1.4, duration: 3.8, ease: "none" }, 5.5);
  introTl.to(p3RightImg, { yPercent: -48, scale: 1.08, rotation: -1.6, duration: 3.8, ease: "none" }, 5.5);
  introTl.to(p3Photos, { scale: 1.0, yPercent: 10, duration: 3.8, ease: "none" }, 5.5);

  introTl.to(p3Line1, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 5.56);
  introTl.to(p3Line2, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 5.72);
  introTl.to(p3Sub, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, 5.88);

  // Subtle living float while reading Phase 3
  introTl.to([p3Line1, p3Line2], { y: -6, scale: 0.99, duration: 1.1, ease: "sine.inOut" }, 7.0);

  // ==========================================
  // FINAL CINEMATIC MORPH-DISSOLVE INTO REAL LOGO & HERO HEADLINE
  // ==========================================
  introTl.to(p3Sub, { opacity: 0, filter: "blur(18px)", y: 16, scale: 0.96, duration: 1.1, ease: "power2.inOut" }, 8.0);
  introTl.to([p3LeftImg, p3RightImg], { opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "power2.inOut" }, 8.0);

  // Phase 3 headline lines dissolve in place at exact center (y: 0)
  introTl.to(p3Line1, { opacity: 0, filter: "blur(28px)", scale: 0.93, y: 0, duration: 1.4, ease: "power2.inOut" }, 8.15);
  introTl.to(p3Line2, { opacity: 0, filter: "blur(28px)", scale: 0.93, y: 0, duration: 1.4, ease: "power2.inOut" }, 8.28);

  // Real Foundation Emblem & Real Headline crystallize directly out of Phase 3's optical blur
  introTl.to(realLogo, { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 1.55, ease: "power3.out" }, 8.35);
  introTl.to(realLine1, { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 1.5, ease: "power3.out" }, 8.5);
  introTl.to(realLine2, { opacity: 1, filter: "blur(0px)", scale: 1, y: 0, duration: 1.5, ease: "power3.out" }, 8.66);

  introTl.to(
    realBottom,
    {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.3,
      ease: "power3.out"
    },
    9.1
  );

  // Hold on the completed interactive Hero before unpinning
  introTl.to({}, { duration: 1.3 });
}
// --------------------------------------------- //
// Hero #08 Multi-Phase Scroll Intro & Dissolve End
// --------------------------------------------- //


$(function() {

  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Detecting Mobile/Desktop Start
  // --------------------------------------------- //
  var isMobile = false;
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('touch');
    isMobile = true;
  }
  else {
    $('html').addClass('no-touch');
    isMobile = false;
  }
  //IE, Edge
  var isIE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);
  // --------------------------------------------- //
  // Detecting Mobile/Desktop End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scrolling Start
  // --------------------------------------------- //
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
  // --------------------------------------------- //
  // Smooth Scrolling End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Menu & Hamburger Start
  // --------------------------------------------- //
  $(".mxd-nav__wrap").each(function() {
    let hamburgerEl   = $(this).find(".mxd-nav__hamburger");
    let navLineEl     = $(this).find(".hamburger__line");
    let menuContainEl = $(this).find(".mxd-menu__contain");
    let flipItemEl    = $(this).find(".hamburger__base");
    let menuWrapEl    = $(this).find(".mxd-menu__wrapper");
    let menuBaseEl    = $(this).find(".mxd-menu__base");
    let menuLinkEl    = $(this).find(".mxd-menu__link");
    let menuItem      = $(this).find(".main-menu__item");
    let videoEl       = $(this).find(".menu-promo__video");
    let fadeInEl      = $(this).find(".menu-fade-in");
    let flipDuration = 0.6;

    function flip(forwards) {
      let state = Flip.getState(flipItemEl);
      if (forwards) {
        flipItemEl.appendTo(menuContainEl);
      } else {
        flipItemEl.appendTo(hamburgerEl);
      }
      Flip.from(state, { ease: "power4.inOut", duration: 0.8 });
    }

    let tl = gsap.timeline({ paused: true });
    tl.set(menuWrapEl, { display: "flex" });
    tl.from(menuBaseEl, { 
      opacity: 0,
      duration: flipDuration,
      ease: "none",
      onStart: () => {
        flip(true);
      }
    });
    tl.to(navLineEl.eq(0), { y: 5, duration: 0.16 }, "<")
    tl.to(navLineEl.eq(1), { y: -5, duration: 0.16 }, "<")
    tl.to(navLineEl.eq(0), { rotate: 45, duration: 0.16 }, 0.2)
    tl.to(navLineEl.eq(1), { rotate: -45, duration: 0.16 }, 0.2)
    tl.add("fade-in-up")
    .from(menuItem, {
      opacity: 0,
      yPercent: 50,
      duration: 0.2,
      stagger: {amount: 0.2},
      onReverseComplete: () => {
        flip(false);
      }
    }, "fade-in-up")
    .from(videoEl, {
      opacity: 0,
      yPercent: 20,
      duration: 0.2,
    }, "fade-in-up");
    tl.from(fadeInEl, { opacity: 0, duration: 0.3, });

    function openMenu(open) {
      if (!tl.isActive()) {
        if (open) {
          tl.play();
          hamburgerEl.addClass("nav-open");
        } else {
          tl.reverse();
          hamburgerEl.removeClass("nav-open");
        }
      }
    }

    hamburgerEl.on("click", function() {
      event.preventDefault();
      if ($(this).hasClass("nav-open")) {
        openMenu(false);
      } else {
        openMenu(true);
      }
    });
    menuBaseEl.on("click", function () {
      openMenu(false);
    });
    $(this).find('a[href^="#"]').not('[href="#0"]').on("click", function () {
      openMenu(false);
    });
    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        openMenu(false);
      }
    });

    window.addEventListener("beforeunload", (event) => {
      openMenu(false);
    });

  });
  // --------------------------------------------- //
  // Menu & Hamburger End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Header/Menu Z-index Change Start
  // --------------------------------------------- //
  $(".mxd-nav__hamburger").on("click", function() {
    if ($(".mxd-nav__hamburger").hasClass("nav-open")) {
      $(".mxd-header").addClass("menu-is-visible");
    } else {
      setTimeout(function() {
        $(".mxd-header").removeClass("menu-is-visible");
      }, 1100);
    }
  });
  // --------------------------------------------- //
  // Header/Menu Z-index Change End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Menu Accordion Start
  // --------------------------------------------- //
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.main-menu__toggle');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#main-menu'), false);
  // --------------------------------------------- //
  // Menu Accordion End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Layout Masonry After Each Image Loads Start
  // --------------------------------------------- //
  $('.mxd-projects-masonry__gallery').imagesLoaded().progress( function() {
    $('.mxd-projects-masonry__gallery').masonry('layout');
    ScrollTrigger.refresh();
  });
  // --------------------------------------------- //
  // Layout Masonry After Each Image Loads End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Accordion Start
  // --------------------------------------------- //
  $(".mxd-accordion__title").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".mxd-accordion__content").slideUp(400);
      $(".mxd-accordion__title").removeClass("accordion-active");
      $('.mxd-accordion__arrow').removeClass('accordion-rotate');
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.mxd-accordion__arrow',this).toggleClass('accordion-rotate');
    });
  // --------------------------------------------- //
  // Accordion End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#showreel-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); lenis.stop(); },
      close: function() { $('body').removeClass('overflow-hidden'); lenis.start(); }
    }
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Subscribe Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://club.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900&amp;f_id=00b64ae4f0'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Subscribe Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.form__reply').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.contact').find('.form__reply').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //
  
});

// --------------------------------------------- //
// Parallax - Ukiyo Images & Video Start
// --------------------------------------------- //
const images = document.querySelectorAll(".parallax-img");
const imagesSmall = document.querySelectorAll(".parallax-img-small");
const video = document.querySelectorAll(".parallax-video");
new Ukiyo(images,{
  scale: 1.5,
  speed: 1.5,
  externalRAF: false,
});
new Ukiyo(imagesSmall,{
  scale: 1.2,
  speed: 1.5,
  externalRAF: false
});
new Ukiyo(video,{
  scale: 1.5,
  speed: 1.5,
  externalRAF: false
});
// --------------------------------------------- //
// Parallax - Ukiyo Images & Video End
// --------------------------------------------- //

// --------------------------------------------- //
// Pinned Images (for Services Block) Start
// --------------------------------------------- //
$(".mxd-pinned").each(function (index) {
  let childTriggers = $(this).find(".mxd-pinned__text-item");
  let childTargets = $(this).find(".mxd-pinned__img-item");
  function makeItemActive(index) {
    childTriggers.removeClass('is-active');
    childTargets.removeClass('is-active');
    childTriggers.eq(index).addClass('is-active');
    childTargets.eq(index).addClass('is-active');
  }
  makeItemActive(0);
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      }
    })
  });
});
// --------------------------------------------- //
// Pinned Images (for Services Block) End
// --------------------------------------------- //

// --------------------------------------------- //
// Stacking Cards Start
// --------------------------------------------- //
const cards  = document.querySelectorAll('.stack-item');
const stickySpace  = document.querySelector('.stack-offset');
const animation = gsap.timeline();
let cardHeight;

if(document.querySelector(".stack-item")) {
  function initCards(){
    animation.clear();
    cardHeight = cards[0].offsetHeight;
    //console.log("initCards()", cardHeight);
    cards.forEach((card, index) => {
      if(index > 0){
        gsap.set(card, {y:index * cardHeight,});
        animation.to(card, {y:0, duration: index*0.5, ease: "none"},0);
      }
    });
  };
  initCards();
  ScrollTrigger.create({
    trigger: ".stack-wrapper",
    start: "top top",
    pin: true,
    end: ()=>`+=${(cards.length * cardHeight) + stickySpace.offsetHeight}`,
    scrub: true,
    animation: animation,
    // markers: true,
    invalidateOnRefresh: true
  });
  ScrollTrigger.addEventListener("refreshInit", initCards);
};
// --------------------------------------------- //
// Stacking Cards End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Buttons Common Start
// --------------------------------------------- //
let elements = document.querySelectorAll(".btn-anim .btn-caption");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";
  let textContainer = document.createElement("div");
  textContainer.classList.add("btn-anim__block");
  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("btn-anim__letter");
    textContainer.appendChild(span);
  }
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  })
});
// --------------------------------------------- //
// Animation - Buttons Common End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Text Reveal Start
// --------------------------------------------- //
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char,i) => {
  const text = new SplitType(char, { types: 'words, chars' });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false
    },
    opacity: 0.2,
    stagger: 0.1
  });
});

const animInUp = document.querySelectorAll(".reveal-in-up");
animInUp.forEach((char,i) => {
  const text = new SplitType(char);
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
      // markers: true
    },
    transformOrigin: "top left",
    //rotationY: 90,
    y: 10,
    stagger: 0.2,
    delay: 0.2,
    duration: 2,
    //opacity: 0.2
  });
});
// --------------------------------------------- //
// Animation - Text Reveal End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Scroll Universal Animations Start
// --------------------------------------------- //
// Scroll Rotating Animation
const animateRotation = document.querySelectorAll(".animate-rotation");
animateRotation.forEach((section) => {
  var value = $(section).data("value");
  gsap.fromTo(section, {
    ease: 'sine',
    rotate: 0,
  }, {
    rotate: value,
    scrollTrigger: {
      trigger: section,
      scrub: true,
      toggleActions: 'play none none reverse',
    }
  });
});

//Scroll Animation In Up
const animateInUp = document.querySelectorAll(".anim-uni-in-up");
animateInUp.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 0,
    y: 50,
    ease: 'sine',
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});

// Scroll Animation Scale In
const animateInUpFront = document.querySelectorAll(".anim-uni-scale-in");
animateInUpFront.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 1,
    y: 50,
    //x: 70,
    scale: 1.2,
    ease: 'sine',
  }, {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});

// Scroll Animation Scale In Right
const animateInUpRight = document.querySelectorAll(".anim-uni-scale-in-right");
animateInUpRight.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 1,
    y: 50,
    x: -70,
    scale: 1.2,
    ease: 'sine',
    duration: 5
  }, {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});

// Scroll Animation Scale In Left
const animateInUpLeft = document.querySelectorAll(".anim-uni-scale-in-left");
animateInUpLeft.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 1,
    y: 50,
    x: 70,
    scale: 1.2,
    ease: 'sine',
  }, {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});

// Grid Animation 2 cards
if(document.querySelector(".animate-card-2")) {
  gsap.set(".animate-card-2", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-2", {
    interval: 0.1,
    batchMax: 2,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 2]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", {y: 0, opacity: 1}));
};

// Grid Animation 3 cards
if(document.querySelector(".animate-card-3")) {
  gsap.set(".animate-card-3", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-3", {
    interval: 0.1,
    batchMax: 3,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 3]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", {y: 0, opacity: 1}));
};

// Grid Animation 4 cards
if(document.querySelector(".animate-card-4")) {
  gsap.set(".animate-card-4", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-4", {
    interval: 0.1,
    batchMax: 4,
    delay: 1000,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 4]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-4", {y: 0, opacity: 1}));
};

// Grid Animation 5 cards
if(document.querySelector(".animate-card-5")) {
  gsap.set(".animate-card-5", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-5", {
    interval: 0.1,
    batchMax: 5,
    delay: 1000,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 5]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-5", {y: 0, opacity: 1}));
};

// Top to Bottom Animation
toBottomEl = document.querySelectorAll(".anim-top-to-bottom"); 
toBottomEl.forEach((element) => {
  let toBottomTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".fullwidth-text__tl-trigger",
      start: "top 99%",
      end: "top 24%",
      scrub: {
        scrub: true, 
        ease: "none" 
      },
      // markers: true
    },
  });
  toBottomTl.fromTo(element, {
    transform: "translate3d(0, -100%, 0)"
  }, 
  {
    transform: "translate3d(0, 0, 0)"
  });
});

// Zoom In / Zoom Out Container Animations
const docStyle = getComputedStyle(document.documentElement);
const zoomInContainer = document.querySelectorAll(".anim-zoom-in-container");
const zoomOutContainer = document.querySelectorAll(".anim-zoom-out-container");

// Zoom In 
zoomInContainer.forEach((element) => {
  let zoomInBlockTl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 82%",
      end: "top 14%",
      scrub: {
        scrub: true, 
        ease: "power4.inOut" 
      },
      // markers: true
    },
  });
  zoomInBlockTl.fromTo(element, {
    borderRadius: '200px',
    transform: "scale3d(0.94, 1, 1)"
  }, 
  {
    borderRadius: docStyle.getPropertyValue("--_radius-l"),
    transform: "scale3d(1, 1, 1)"
  });
});

// Zoom Out
zoomOutContainer.forEach((element) => {
  let zoomOutBlockTl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 82%",
      end: "top 14%",
      scrub: {
        scrub: true, 
        ease: "power4.inOut" 
      },
      // markers: true
    },
  });
  zoomOutBlockTl.fromTo(element, {
    borderRadius: '200px',
    transform: "scale3d(1.14, 1, 1)"
  }, 
  {
    borderRadius: docStyle.getPropertyValue("--_radius-l"),
    transform: "scale3d(1, 1, 1)",
  });
});
// --------------------------------------------- //
// Animation - Scroll Universal Animations End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Images Reveal on Hover Start
// --------------------------------------------- //
const link = document.querySelectorAll('.hover-reveal__item');
const linkHoverReveal = document.querySelectorAll('.hover-reveal__content');
const linkImages = document.querySelectorAll('.hover-reveal__image');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-80%, -50% )`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-80%, -50%)`;
    linkImages[i].style.transform = 'scale(1, 1.4)';
  })
}
// --------------------------------------------- //
// Animation - Images Reveal on Hover End
// --------------------------------------------- //

// --------------------------------------------- //
// Swiper Slider - Testimonials #01 Start
// --------------------------------------------- //
const testimonialsSlider = document.querySelector("testimonials-slider");

if (!testimonialsSlider) {
  const swiper = new Swiper('.swiper-testimonials', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 30,
    autoplay: true,
    delay: 3000,
    speed: 1000,
    loop: true,
    parallax: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
// --------------------------------------------- //
// Swiper Slider - Testimonials #01 End
// --------------------------------------------- //

// --------------------------------------------- //
// Swiper Slider - Testimonials #02 Start
// --------------------------------------------- //
const testimonialsSlider2 = document.querySelector("testimonials-slider-2");

if (!testimonialsSlider2) {
  const swiper = new Swiper('.swiper-testimonials-2', {
    slidesPerView: 1,
    grabCursor: true,
    effect: 'fade',
    spaceBetween: 30,
    autoplay: true,
    delay: 3000,
    speed: 1000,
    loop: true,
    parallax: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
// --------------------------------------------- //
// Swiper Slider - Testimonials #02 End
// --------------------------------------------- //

// --------------------------------------------- //
// Swiper Slider - Inner Pages Demo Start
// --------------------------------------------- //
const innerDemoSlider = document.querySelector("mxd-demo-swiper");

if (!innerDemoSlider) {
  const swiper = new Swiper('.mxd-demo-swiper', {
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    parallax: true,
    autoplay: { disableOnInteraction: false, enabled: true },
    grabCursor: true,
    speed: 600,
    centeredSlides: true,
    keyboard: { enabled: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
// --------------------------------------------- //
// Swiper Slider - Inner Pages Demo End
// --------------------------------------------- //

// --------------------------------------------- //
// CountUp - All Counters Options Start
// --------------------------------------------- //
const optionsNormal = {
  enableScrollSpy: true
};
const optionsDecimal = {
  decimalPlaces: 1,
  enableScrollSpy: true
};
const optionsDecimalTwo = {
  decimalPlaces: 2,
  enableScrollSpy: true
};
const optionsPercent = {
  suffix: '%',
  enableScrollSpy: true
};
const optionsK = {
  suffix: 'K',
  enableScrollSpy: true
};
const optionsPlus = {
  suffix: '+',
  enableScrollSpy: true
};
// --------------------------------------------- //
// CountUp - All Counters Options End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - Two Lines Start
// --------------------------------------------- //
const initMarquees = () => {
  const items = [...document.querySelectorAll(".marquee--gsap")];
  if (items) {
    const marqueeObject = {
      top: {
        el: null,
        width: 0
      },
      bottom: {
        el: null,
        width: 0
      }
    };
    items.forEach((itemBlock) => {
      marqueeObject.top.el = itemBlock.querySelector(".marquee__top");
      marqueeObject.bottom.el = itemBlock.querySelector(".marquee__bottom");
      marqueeObject.top.width = marqueeObject.top.el.offsetWidth;
      marqueeObject.bottom.width = marqueeObject.bottom.el.offsetWidth;
      marqueeObject.top.el.innerHTML += marqueeObject.top.el.innerHTML;
      marqueeObject.bottom.el.innerHTML += marqueeObject.bottom.el.innerHTML;
      let dirFromLeft = "-=50%";
      let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        .add(marquee(marqueeObject.top.el, 30, dirFromLeft), 0)
        .add(marquee(marqueeObject.bottom.el, 30, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marquee = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarquees();
// --------------------------------------------- //
// Marquee - Two Lines End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - One Line To Right Start
// --------------------------------------------- //
const initMarquee = () => {
  const items = [...document.querySelectorAll(".marquee-right--gsap")];
  if (items) {
    const marqueeObject = {
      el: null,
      width: 0
    };
    items.forEach((itemBlock) => {
      marqueeObject.el = itemBlock.querySelector(".marquee__toright");
      marqueeObject.width = marqueeObject.el.offsetWidth;
      marqueeObject.el.innerHTML += marqueeObject.el.innerHTML;
      //let dirFromLeft = "-=50%";
      let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        //.add(marquee(marqueeObject.el, 20, dirFromLeft), 0);
        .add(marqueeRight(marqueeObject.el, 30, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marqueeRight = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarquee();
// --------------------------------------------- //
// Marquee - One Line To Right End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - One Line To Left Start
// --------------------------------------------- //
const initMarqueeLeft = () => {
  const items = [...document.querySelectorAll(".marquee-left--gsap")];
  if (items) {
    const marqueeObject = {
      el: null,
      width: 0
    };
    items.forEach((itemBlock) => {
      marqueeObject.el = itemBlock.querySelector(".marquee__toleft");
      marqueeObject.width = marqueeObject.el.offsetWidth;
      marqueeObject.el.innerHTML += marqueeObject.el.innerHTML;
      let dirFromLeft = "-=50%";
      // let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        .add(marquee(marqueeObject.el, 30, dirFromLeft), 0);
        // .add(marqueeRight(marqueeObject.el, 30, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marqueeLeft = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarqueeLeft();
// --------------------------------------------- //
// Marquee - One Line To Left End
// --------------------------------------------- //

// --------------------------------------------- //
// SVG DOM Injection Start
// --------------------------------------------- //
var mySVGsToInject = document.querySelectorAll('img.inject-me');
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png',
  each: function (svg) {
  }
};
SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});
// --------------------------------------------- //
// SVG DOM Injection End
// --------------------------------------------- //

// --------------------------------------------- //
// Permanent Light Theme Start
// --------------------------------------------- //
const rootEl = document.querySelector(':root');
if (rootEl) {
  rootEl.setAttribute('color-scheme', 'light');
}
try {
  localStorage.removeItem('template.theme');
} catch (e) {}
// --------------------------------------------- //
// Permanent Light Theme End
// --------------------------------------------- //

// --------------------------------------------- //
// Scroll to Top Button Start
// --------------------------------------------- //
const toTop = document.querySelector(".btn-to-top");

$(".btn-to-top").each(function() {
  toTop.addEventListener("click", function(event){
    event.preventDefault()
  });

  toTop.addEventListener("click", () => gsap.to(window, { 
    scrollTo: 0, 
    ease: 'power4.inOut',
    duration: 1.3,
  }));

  gsap.set(toTop, { opacity: 0 });

  gsap.to(toTop, {
    opacity: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "body",
      start: "top -20%",
      end: "top -20%",
      toggleActions: "play none reverse none"
    }
  });
});
// --------------------------------------------- //
// Scroll to Top Button End
// --------------------------------------------- //

// ------------------------------------------------------------------------------ //
// Parallax Universal (apply parallax effect to any element with a data-speed attribute) Start
// ------------------------------------------------------------------------------ //
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "max",
    invalidateOnRefresh: true,
    scrub: 0
  }
});
// --------------------------------------------- //
// Parallax Universal End
// --------------------------------------------- //