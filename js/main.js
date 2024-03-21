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
});
// window.onload =function(){
//   document.querySelector('.singup-i').addEventListener('click', function() {
//     var signupItems = document.querySelectorAll('.signup li');
//     signupItems.forEach(function(item) {
//       if (item.style.display === 'none') {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   });
// }
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
