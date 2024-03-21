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
  new fullpage('#fullpage', {
    // 옵션...
    afterLoad: function(origin, destination, direction){
        var loadedSection = this;

        // section2로 스크롤 될 때
        if(destination.index == 1){
            // 애니메이션을 추가할 요소에 클래스 추가
            document.querySelector('.section2-tit img').classList.add('animate');
        }
    }
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
