$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    slidesNavigation: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    scrollingSpeed: 1200,
    // responsiveWidth: 920,
    // responsiveHeight:900,
    recordHistory: false,
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    menu: "#pageMenu",
    // autoScrolling: false,

    onLeave: function (index, nextIndex, direction) {
      console.log(`onleave!`);
    },
    afterLoad: function (anchorLink, index) {
      console.log(`afterLoad!`);
    },
    afterRender: function () {
      console.log(`afterRender!`);
    },
    afterResize: function () {
      console.log(`afterResize!`);
    },
    afterResponsive: function (isResponsive) {
      console.log(`afterResponsive!`);
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log(`afterSlideLoad!`);
    },
    onSlideLeave: function (
      anchorLink,
      index,
      slideIndex,
      direction,
      nextSlideIndex
    ) {
      console.log(`onSlideLeave!`);
    },
  });
  $(".singup-i").click(function () {
    $(".signup li").fadeToggle(600);
  });
  $(".language-i").click(function () {
    $(".language li").fadeToggle(600);
  });

  // 섹션 4 슬라이드 버튼
  var swiper = new Swiper("#section4 .mySwiper", {
    navigation: {
      nextEl: "#section4 .swiper-button-next",
      prevEl: "#section4 .swiper-button-prev",
    },
  });
});

