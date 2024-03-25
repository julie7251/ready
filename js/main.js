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
    anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
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
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
      console.log(`onSlideLeave!`);
    },
  });
  // 섹션 4 슬라이드 버튼
  var product_swiper = new Swiper("#section4 .product", {
    navigation: {
      nextEl: ".product .swiper-button-next",
      prevEl: ".product .swiper-button-prev",
    },
  });
  
});
