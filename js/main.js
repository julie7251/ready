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
// 메뉴관련
var mainMenuLi = $(".mainmenu > li");
var subMenu = $(".submenu");
//   mainMenuLi 주메뉴로 마우스 이동하는 경우 실행
$.each(mainMenuLi, function (index, item) {
  $(this).mouseenter(function () {
    allDepth3.hide();
    // 모든 포커스 해제
    subMenuLi.removeClass("submenu_focus_link");
    // 서브 메뉴가 보여준다
    $(this).find(".submenu").addClass("submenu_focus");
    $(this).css("z-index", 999);
  });
  $(this).mouseleave(function () {
    // 서브메뉴 숨김
    $(this).find(".submenu").removeClass("submenu_focus");
  });
 
});

document.addEventListener("DOMContentLoaded", function () {
  var familySiteToggle = document.querySelector('.family-site-toggle');
  var familySiteMenu = document.querySelector('.familysite');

  familySiteToggle.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 동작(링크 이동) 방지

      // 하위 메뉴의 표시 상태를 토글합니다.
      if (familySiteMenu.style.display === 'block') {
          familySiteMenu.style.display = 'none';
      } else {
          familySiteMenu.style.display = 'block';
      }
  });

});
