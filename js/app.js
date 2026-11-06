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
ScrollTrigger.config({ ignoreMobileResize: true });

// Force page reload to always start at the very top for the cinematic intro
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// Permanently mute all videos across the entire site (background, menu, preview & popup)
function forceMuteVideo(v) {
  if (!v || v.tagName !== "VIDEO") return;
  v.muted = true;
  v.defaultMuted = true;
  v.volume = 0;
  v.setAttribute("muted", "muted");
}
document.querySelectorAll("video").forEach(forceMuteVideo);
["play", "playing", "volumechange", "loadedmetadata", "canplay"].forEach(function (evt) {
  document.addEventListener(
    evt,
    function (e) {
      if (e.target && e.target.tagName === "VIDEO") {
        forceMuteVideo(e.target);
      }
    },
    true
  );
});

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
    window.scrollTo(0, 0);
    if (typeof lenis !== "undefined") {
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    }
    ScrollTrigger.refresh();
  }, 2200);
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
const isTouchOrMobile = window.matchMedia("(pointer: coarse), (max-width: 1199px)").matches;
const lenis = new Lenis();
lenis.scrollTo(0, { immediate: true });
lenis.stop();
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
  if (window.__fgybIntroLocked) {
    if ($(window).scrollTop() > 50) {
      $(".mxd-header").addClass("is-hidden");
    } else {
      $(".mxd-header").removeClass("is-hidden");
    }
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
  const phase1El = introPinnedEl.querySelector(".is-phase-1");
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
  const realEmblemImg = introPinnedEl.querySelector(".fgyb-hero-emblem");
  const realLine1 = introPinnedEl.querySelector(".fgyb-real-line-1");
  const realLine2 = introPinnedEl.querySelector(".fgyb-real-line-2");
  const realLine2Em = introPinnedEl.querySelector(".fgyb-real-line-2 em") || realLine2;
  const realBottom = introPinnedEl.querySelector(".fgyb-real-bottom");

  // Split "Juntos por un" and "mejor mañana" into 3D animated characters
  if (typeof SplitType !== "undefined") {
    new SplitType(realLine1, { types: "words, chars", tagName: "span" });
    new SplitType(realLine2Em, { types: "words, chars", tagName: "span" });
  }
  const line1Chars = realLine1 ? realLine1.querySelectorAll(".char") : [];
  const line2Chars = realLine2 ? realLine2.querySelectorAll(".char") : [];

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
  gsap.set(phase1El, { visibility: "visible" });
  gsap.set([phase2El, phase3El, realHero], { visibility: "hidden" });

  // Initial states: Phase 1 ready on stage
  gsap.set(p1LeftImg, {
    opacity: 0.52,
    filter: "blur(0px)",
    yPercent: isTouchOrMobile ? 14 : 22,
    scale: 0.95,
    rotation: isTouchOrMobile ? -1.2 : -2
  });
  gsap.set(p1RightImg, {
    opacity: 0.48,
    filter: "blur(0px)",
    yPercent: isTouchOrMobile ? 22 : 34,
    scale: 0.92,
    rotation: isTouchOrMobile ? 1.3 : 2.2
  });
  gsap.set(p1Photos, { scale: isTouchOrMobile ? 1.12 : 1.22, yPercent: isTouchOrMobile ? -5 : -8 });

  // Initial states: Phase 2 & 3 waiting in deep optical blur (calmed on mobile/touch)
  gsap.set([p2Line1, p2Line2, p3Line1, p3Line2], {
    opacity: 0,
    filter: isTouchOrMobile ? "blur(14px)" : "blur(24px)",
    y: isTouchOrMobile ? 28 : 48,
    scale: isTouchOrMobile ? 1.05 : 1.1
  });
  gsap.set([p2Sub, p3Sub], {
    opacity: 0,
    filter: isTouchOrMobile ? "blur(10px)" : "blur(18px)",
    y: isTouchOrMobile ? 22 : 36,
    scale: isTouchOrMobile ? 1.02 : 1.04
  });

  gsap.set([p2LeftImg, p3LeftImg], {
    opacity: 0,
    filter: isTouchOrMobile ? "blur(10px)" : "blur(16px)",
    yPercent: isTouchOrMobile ? 24 : 40,
    scale: 0.92,
    rotation: isTouchOrMobile ? -1.4 : -2.5
  });
  gsap.set([p2RightImg, p3RightImg], {
    opacity: 0,
    filter: isTouchOrMobile ? "blur(10px)" : "blur(16px)",
    yPercent: isTouchOrMobile ? 32 : 54,
    scale: 0.9,
    rotation: isTouchOrMobile ? 1.4 : 2.5
  });
  gsap.set([p2Photos, p3Photos], {
    scale: isTouchOrMobile ? 1.12 : 1.24,
    yPercent: isTouchOrMobile ? -6 : -10
  });

  // Initial states: Real Hero waiting for dramatic portal & 3D character emergence
  gsap.set(realHero, { pointerEvents: "none" });
  gsap.set(realLogo, {
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    filter: isTouchOrMobile ? "blur(18px)" : "blur(38px)",
    scale: isTouchOrMobile ? 0.55 : 0.28,
    rotation: isTouchOrMobile ? -8 : -18,
    x: 0,
    y: 0
  });
  if (realEmblemImg) {
    gsap.set(realEmblemImg, { opacity: 0.82 });
  }
  gsap.set(realLine1, {
    scale: isTouchOrMobile ? 1.22 : 1.55,
    y: isTouchOrMobile ? -36 : -72
  });
  gsap.set(realLine2, {
    scale: isTouchOrMobile ? 1.26 : 1.65,
    y: isTouchOrMobile ? 42 : 82
  });
  if (line1Chars.length) {
    gsap.set(line1Chars, {
      opacity: 0,
      yPercent: isTouchOrMobile ? -65 : -115,
      rotateX: isTouchOrMobile ? 45 : 82,
      rotateZ: isTouchOrMobile ? -3 : -6,
      scale: isTouchOrMobile ? 1.18 : 1.45,
      filter: isTouchOrMobile ? "blur(12px)" : "blur(24px)"
    });
  } else {
    gsap.set(realLine1, {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(38px)",
      scale: isTouchOrMobile ? 1.28 : 1.68,
      y: isTouchOrMobile ? -42 : -82
    });
  }
  if (line2Chars.length) {
    gsap.set(line2Chars, {
      opacity: 0,
      yPercent: isTouchOrMobile ? 65 : 115,
      rotateX: isTouchOrMobile ? -45 : -82,
      rotateZ: isTouchOrMobile ? 4 : 8,
      scale: isTouchOrMobile ? 1.22 : 1.55,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(26px)"
    });
  } else {
    gsap.set(realLine2, {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(38px)",
      scale: isTouchOrMobile ? 1.28 : 1.68,
      y: isTouchOrMobile ? 46 : 88
    });
  }
  gsap.set(realBottom, {
    opacity: 0,
    filter: isTouchOrMobile ? "blur(14px)" : "blur(26px)",
    scale: isTouchOrMobile ? 0.94 : 0.88,
    y: isTouchOrMobile ? 56 : 115
  });

  const syncIntroPhases = (t) => {
    if (window.__fgybIntroLocked) return;
    if (phase1El) phase1El.style.visibility = t <= 3.0 ? "visible" : "hidden";
    if (phase2El) phase2El.style.visibility = t >= 2.15 && t <= 6.3 ? "visible" : "hidden";
    if (phase3El) phase3El.style.visibility = t >= 5.45 && t <= 9.6 ? "visible" : "hidden";
    if (realHero) realHero.style.visibility = t >= 8.0 ? "visible" : "hidden";
    setIntroHeaderVisibility(t >= 9.3);
  };

  const activateInteractiveHeroAnimations = () => {
    if (realLogo) {
      gsap.set(realLogo, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
    }
    // 1. Subtle interactive cursor depth parallax & character wave on the live Real Hero
    if (window.matchMedia("(min-width: 992px)").matches && realHero) {
      const xLine1 = gsap.quickTo(realLine1, "x", { duration: 0.9, ease: "power3.out" });
      const yLine1 = gsap.quickTo(realLine1, "y", { duration: 0.9, ease: "power3.out" });
      const xLine2 = gsap.quickTo(realLine2, "x", { duration: 1.05, ease: "power3.out" });
      const yLine2 = gsap.quickTo(realLine2, "y", { duration: 1.05, ease: "power3.out" });
      const xLogo = gsap.quickTo(realLogo, "x", { duration: 1.25, ease: "power3.out" });
      const yLogo = gsap.quickTo(realLogo, "y", { duration: 1.25, ease: "power3.out" });

      realHero.addEventListener("mousemove", (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        xLine1(nx * -22);
        yLine1(ny * -12);
        xLine2(nx * 26);
        yLine2(ny * 14);
        xLogo(nx * 36);
        yLogo(ny * -24);
      });

      realHero.addEventListener("mouseleave", () => {
        xLine1(0);
        yLine1(0);
        xLine2(0);
        yLine2(0);
        xLogo(0);
        yLogo(0);
      });

      const titleContainer = introPinnedEl.querySelector(".fgyb-real-title");
      if (titleContainer && (line1Chars.length || line2Chars.length)) {
        let wavePlaying = false;
        titleContainer.addEventListener("mouseenter", () => {
          if (wavePlaying) return;
          wavePlaying = true;
          gsap.fromTo(
            [line1Chars, line2Chars],
            { yPercent: 0, scale: 1 },
            {
              yPercent: -14,
              scale: 1.06,
              duration: 0.34,
              ease: "sine.out",
              yoyo: true,
              repeat: 1,
              stagger: { each: 0.022, from: "start" },
              onComplete: () => {
                wavePlaying = false;
              }
            }
          );
        });
      }
    }

    // 2. Scroll-out parallax for "Juntos por un / mejor mañana" when scrolling down into #programas
    const heroHeadlineWrap = introPinnedEl.querySelector(".mxd-hero-08__headline");
    if (heroHeadlineWrap) {
      const heroScrollOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: introPinnedEl,
          start: "top top",
          end: "bottom top",
          scrub: isTouchOrMobile ? 1.0 : 0.6
        }
      });
      heroScrollOutTl.to(
        realLine1,
        {
          xPercent: isTouchOrMobile ? -4 : -8,
          y: isTouchOrMobile ? -28 : -55,
          scale: isTouchOrMobile ? 0.96 : 0.94,
          opacity: 0.25,
          ease: "none"
        },
        0
      );
      heroScrollOutTl.to(
        realLine2,
        {
          xPercent: isTouchOrMobile ? 4 : 8,
          y: isTouchOrMobile ? -18 : -35,
          scale: isTouchOrMobile ? 1.03 : 1.06,
          opacity: 0.25,
          ease: "none"
        },
        0
      );
      heroScrollOutTl.to(
        realLogo,
        {
          y: isTouchOrMobile ? -44 : -85,
          scale: isTouchOrMobile ? 1.1 : 1.22,
          ease: "none"
        },
        0
      );
    }
  };

  const completeAndLockIntro = () => {
    if (window.__fgybIntroLocked) return;
    window.__fgybIntroLocked = true;

    const st = introTl && introTl.scrollTrigger;
    const pinDistance = st ? Math.max(0, st.end - st.start) : 0;
    const currentY = window.scrollY || window.pageYOffset || 0;
    const targetY = Math.max(0, currentY - pinDistance);

    // 1. Kill ScrollTrigger & timeline synchronously before paint
    if (st) {
      st.kill(true);
    }
    if (introTl) {
      introTl.kill();
    }

    // 2. Remove the intro stage permanently
    const introStageEl = introPinnedEl.querySelector(".fgyb-intro-stage");
    if (introStageEl) {
      introStageEl.style.display = "none";
      introStageEl.remove();
    }

    // 3. Clear all inline GSAP styles so the Real Hero stays 100% visible in its native CSS state
    gsap.set(
      [introPinnedEl, realHero, realLogo, realEmblemImg, realLine1, realLine2, realBottom, line1Chars, line2Chars],
      { clearProps: "all" }
    );
    if (realLogo) {
      gsap.set(realLogo, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
    }
    if (realHero) {
      realHero.style.visibility = "visible";
      realHero.style.opacity = "1";
      realHero.style.pointerEvents = "auto";
    }
    setIntroHeaderVisibility(true);

    // 4. Offset scroll synchronously by the exact removed pin-spacer height (0.00px visual shift)
    window.scrollTo(0, targetY);
    if (typeof lenis !== "undefined") {
      lenis.scrollTo(targetY, { immediate: true });
    }

    // 5. Activate live interactive & scroll-out animations on "Juntos por un mejor mañana"
    activateInteractiveHeroAnimations();
    ScrollTrigger.refresh();
  };

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: introPinnedEl,
      start: "top top",
      end: isTouchOrMobile ? "+=410%" : "+=340%",
      pin: true,
      scrub: isTouchOrMobile ? 1.0 : 0.75,
      invalidateOnRefresh: true,
      onUpdate: () => {
        if (window.__fgybIntroLocked) return;
        syncIntroPhases(introTl.time());
      },
      onLeave: () => {
        completeAndLockIntro();
      },
      onLeaveBack: () => {
        if (!window.__fgybIntroLocked) {
          syncIntroPhases(0);
        }
      }
    }
  });

  // ==========================================
  // PHASE 1: Multi-plane parallax & staggered optical dissolve
  // ==========================================
  introTl.to(
    p1LeftImg,
    {
      yPercent: isTouchOrMobile ? -20 : -32,
      scale: 1.04,
      rotation: isTouchOrMobile ? 0.7 : 1.2,
      duration: 2.9,
      ease: "none"
    },
    0
  );
  introTl.to(
    p1RightImg,
    {
      yPercent: isTouchOrMobile ? -28 : -46,
      scale: 1.06,
      rotation: isTouchOrMobile ? -0.9 : -1.5,
      duration: 2.9,
      ease: "none"
    },
    0
  );
  introTl.to(p1Photos, { scale: 1.0, yPercent: isTouchOrMobile ? 5 : 8, duration: 2.9, ease: "none" }, 0);

  // Subtle living float while reading Phase 1
  introTl.to([p1Line1, p1Line2], { y: isTouchOrMobile ? -5 : -8, scale: 0.99, duration: 1.5, ease: "sine.inOut" }, 0);

  // Staggered dissolve out of Phase 1
  introTl.to(
    p1Line1,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(24px)",
      y: isTouchOrMobile ? -24 : -38,
      scale: isTouchOrMobile ? 0.95 : 0.92,
      duration: 1.15,
      ease: "power2.inOut"
    },
    1.55
  );
  introTl.to(
    p1Line2,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(24px)",
      y: isTouchOrMobile ? -20 : -34,
      scale: isTouchOrMobile ? 0.95 : 0.92,
      duration: 1.15,
      ease: "power2.inOut"
    },
    1.68
  );
  introTl.to(
    p1Sub,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(10px)" : "blur(18px)",
      y: isTouchOrMobile ? -16 : -26,
      scale: 0.96,
      duration: 1.1,
      ease: "power2.inOut"
    },
    1.8
  );
  introTl.to(
    [p1LeftImg, p1RightImg],
    { opacity: 0, filter: isTouchOrMobile ? "blur(12px)" : "blur(18px)", duration: 1.1, ease: "power2.inOut" },
    1.7
  );

  // ==========================================
  // PHASE 2: Staggered emergence, asymmetric parallax & dissolve
  // ==========================================
  introTl.to(p2LeftImg, { opacity: 0.54, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 2.25);
  introTl.to(p2RightImg, { opacity: 0.48, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 2.4);
  introTl.to(
    p2LeftImg,
    {
      yPercent: isTouchOrMobile ? -22 : -34,
      scale: 1.05,
      rotation: isTouchOrMobile ? 0.8 : 1.4,
      duration: 3.8,
      ease: "none"
    },
    2.2
  );
  introTl.to(
    p2RightImg,
    {
      yPercent: isTouchOrMobile ? -30 : -48,
      scale: 1.06,
      rotation: isTouchOrMobile ? -1.0 : -1.6,
      duration: 3.8,
      ease: "none"
    },
    2.2
  );
  introTl.to(p2Photos, { scale: 1.0, yPercent: isTouchOrMobile ? 6 : 10, duration: 3.8, ease: "none" }, 2.2);

  introTl.to(p2Line1, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 2.26);
  introTl.to(p2Line2, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 2.42);
  introTl.to(p2Sub, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, 2.58);

  // Subtle living float while reading Phase 2
  introTl.to([p2Line1, p2Line2], { y: isTouchOrMobile ? -5 : -8, scale: 0.99, duration: 1.2, ease: "sine.inOut" }, 3.65);

  // Staggered dissolve out of Phase 2
  introTl.to(
    p2Line1,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(24px)",
      y: isTouchOrMobile ? -24 : -38,
      scale: isTouchOrMobile ? 0.95 : 0.92,
      duration: 1.15,
      ease: "power2.inOut"
    },
    4.88
  );
  introTl.to(
    p2Line2,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(24px)",
      y: isTouchOrMobile ? -20 : -34,
      scale: isTouchOrMobile ? 0.95 : 0.92,
      duration: 1.15,
      ease: "power2.inOut"
    },
    5.0
  );
  introTl.to(
    p2Sub,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(10px)" : "blur(18px)",
      y: isTouchOrMobile ? -16 : -26,
      scale: 0.96,
      duration: 1.1,
      ease: "power2.inOut"
    },
    5.12
  );
  introTl.to(
    [p2LeftImg, p2RightImg],
    { opacity: 0, filter: isTouchOrMobile ? "blur(12px)" : "blur(18px)", duration: 1.1, ease: "power2.inOut" },
    5.02
  );

  // ==========================================
  // PHASE 3: Staggered emergence & intensified portal transition into Real Hero
  // ==========================================
  introTl.to(p3LeftImg, { opacity: 0.54, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 5.55);
  introTl.to(p3RightImg, { opacity: 0.48, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 5.7);
  introTl.to(
    p3LeftImg,
    {
      yPercent: isTouchOrMobile ? -10 : -16,
      scale: 1.02,
      rotation: isTouchOrMobile ? 0.5 : 0.8,
      duration: 2.1,
      ease: "none"
    },
    5.5
  );
  introTl.to(
    p3RightImg,
    {
      yPercent: isTouchOrMobile ? -15 : -24,
      scale: 1.03,
      rotation: isTouchOrMobile ? -0.6 : -0.9,
      duration: 2.1,
      ease: "none"
    },
    5.5
  );
  introTl.to(p3Photos, { scale: isTouchOrMobile ? 1.03 : 1.06, yPercent: 4, duration: 2.1, ease: "none" }, 5.5);

  introTl.to(p3Line1, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 5.56);
  introTl.to(p3Line2, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.25, ease: "power3.out" }, 5.72);
  introTl.to(p3Sub, { opacity: 1, filter: "blur(0px)", y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, 5.88);

  // Subtle living float while reading Phase 3
  introTl.to([p3Line1, p3Line2], { y: isTouchOrMobile ? -4 : -6, scale: 0.99, duration: 0.8, ease: "sine.inOut" }, 6.85);

  // ==========================================
  // DRAMATIC PORTAL FLY-THROUGH INTO REAL INTERACTIVE HERO
  // ==========================================
  // Stage A: Phase 3 photos & headline part and zoom past the camera lens
  introTl.to(
    p3LeftImg,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(38px)",
      xPercent: isTouchOrMobile ? -45 : -85,
      yPercent: isTouchOrMobile ? -50 : -95,
      scale: isTouchOrMobile ? 1.38 : 1.82,
      rotation: isTouchOrMobile ? -7 : -14,
      duration: 1.5,
      ease: "power2.inOut"
    },
    7.6
  );
  introTl.to(
    p3RightImg,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(38px)",
      xPercent: isTouchOrMobile ? 45 : 85,
      yPercent: isTouchOrMobile ? -50 : -95,
      scale: isTouchOrMobile ? 1.4 : 1.85,
      rotation: isTouchOrMobile ? 7 : 14,
      duration: 1.5,
      ease: "power2.inOut"
    },
    7.65
  );
  introTl.to(
    p3Photos,
    { scale: isTouchOrMobile ? 1.16 : 1.35, duration: 1.5, ease: "power2.inOut" },
    7.6
  );

  introTl.to(
    p3Sub,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(14px)" : "blur(30px)",
      y: isTouchOrMobile ? 52 : 105,
      scale: isTouchOrMobile ? 1.16 : 1.4,
      duration: 1.25,
      ease: "power2.inOut"
    },
    7.6
  );
  introTl.to(
    p3Line1,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(42px)",
      scale: isTouchOrMobile ? 1.48 : 2.25,
      y: isTouchOrMobile ? -60 : -120,
      duration: 1.45,
      ease: "power2.inOut"
    },
    7.65
  );
  introTl.to(
    p3Line2,
    {
      opacity: 0,
      filter: isTouchOrMobile ? "blur(18px)" : "blur(42px)",
      scale: isTouchOrMobile ? 1.48 : 2.25,
      y: isTouchOrMobile ? 60 : 120,
      duration: 1.45,
      ease: "power2.inOut"
    },
    7.75
  );

  // Stage B: Foundation Emblem surges forward into spotlight at center, then settles into background emblem
  introTl.to(
    realLogo,
    {
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
      filter: "blur(0px)",
      scale: isTouchOrMobile ? 1.14 : 1.34,
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    },
    8.15
  );
  introTl.to(
    realLogo,
    { xPercent: -50, yPercent: -50, scale: 1, x: 0, y: 0, duration: 1.2, ease: "power2.inOut" },
    9.45
  );
  if (realEmblemImg) {
    introTl.to(
      realEmblemImg,
      { opacity: 0.2, duration: 1.2, ease: "power2.inOut" },
      9.45
    );
  }

  // Stage C: 3D Character-by-Character Sculptural Wave Reveal of "Juntos por un / mejor mañana"
  introTl.to(
    realLine1,
    { scale: 1, y: 0, duration: 1.65, ease: isTouchOrMobile ? "power3.out" : "expo.out" },
    8.75
  );
  if (line1Chars.length) {
    introTl.to(
      line1Chars,
      {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.15,
        stagger: { each: isTouchOrMobile ? 0.032 : 0.04, from: "center" },
        ease: isTouchOrMobile ? "power3.out" : "expo.out"
      },
      8.75
    );
  }

  introTl.to(
    realLine2,
    { scale: 1, y: 0, duration: 1.75, ease: isTouchOrMobile ? "power3.out" : "expo.out" },
    9.0
  );
  if (line2Chars.length) {
    introTl.to(
      line2Chars,
      {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.25,
        stagger: { each: isTouchOrMobile ? 0.036 : 0.045, from: "edges" },
        ease: isTouchOrMobile ? "power3.out" : "expo.out"
      },
      9.0
    );
  }

  introTl.to(
    realBottom,
    {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      duration: 1.35,
      ease: isTouchOrMobile ? "power3.out" : "expo.out"
    },
    9.5
  );

  // Brief hold at 100% completion so scrub settles before onLeave unpins
  introTl.to({}, { duration: isTouchOrMobile ? 0.65 : 0.45 });
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
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<video class="mfp-iframe fgyb-muted-popup-video" autoplay loop muted playsinline></video>' +
        '</div>'
    },
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); lenis.stop(); },
      open: function() {
        var popupVid = document.querySelector('.fgyb-muted-popup-video');
        if (popupVid) {
          forceMuteVideo(popupVid);
          var playPromise = popupVid.play();
          if (playPromise && playPromise.catch) playPromise.catch(function() {});
        }
      },
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
  let innerText = element.textContent.trim();
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