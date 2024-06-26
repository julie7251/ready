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
        // $('.section2-vd video').each(function () {
        //   $(this).get(0).play();
        // });
      }
    },
  });
  // 이벤트 핸들러
  $(".singup-i").click(function () {
    $(".signup li").fadeToggle(600);
  });
  $(".language-i").click(function () {
    $(".language li").fadeToggle(600);
  });
  $(".hamberger").click(function() {
    $(".mb-nav").slideToggle(); // "mb-nav" 요소 슬라이드 토글
  });
  $(document).ready(function () {
    // 이미지 경로를 저장하는 객체
    var imagePaths = {
      "서브사진1": "images/productpage/image 53.png",
      "서브사진2": "images/productpage/image 55 (1).png",
      "서브사진3": "images/productpage/image 57 (1).png",
      "서브사진4": "images/productpage/image 58 (1).png",
      "서브사진5": "images/productpage/image 59 (1).png",
    };

  });
});
;