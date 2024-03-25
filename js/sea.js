$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    slidesNavigation: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    scrollingSpeed: 1200,
    recordHistory: false,
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    menu: "#pageMenu",

    onLeave: function (index, nextIndex, direction) {
      if(index == 1) {
        $('.section1-bg2 img').removeClass('animate'),
      console.log(`onleave!`);
      }
      // 스크롤이 시작될 때 이미지의 애니메이션 클래스를 제거합니다.
      if (index == 2) {
        $('.section2-tit img').removeClass('animate'),
        $('.more-btn span').removeClass('animate');
        $('.section2-vd video').each(function () {
          $(this).get(0).pause();
        });
      }
      console.log(`onleave!`);
    },
    afterLoad: function (anchorLink, index) {
      // 스크롤이 완료된 후 #section2에 도달했을 때 애니메이션을 실행합니다.
      if (index == 1) {
        $('.section1-bg2 img').addClass('animate'),
      console.log(`afterLoad!`);
      }
      if (index == 2) {
        $('.section2-tit img').addClass('animate'),
        $('.more-btn span').addClass('animate');
        $('.section2-vd video').each(function () {
          $(this).get(0).play();
        });
      }
      console.log(`afterLoad!`);
    },

  });

  // 이벤트 핸들러
  $(".singup-i").click(function () {
    $(".signup li").fadeToggle(600);
  });
  $(".language-i").click(function () {
    $(".language li").fadeToggle(600);
  });
});
;