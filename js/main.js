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
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
      console.log(`onSlideLeave!`);
    },
  });
});

$(".ani-03").each(function () {
  let text = this;
  text.innerHTML = text.textContent.replace(/\S/g, "<i>$&</i>");
  $(this)
    .find("i")
    .each(function (index, item) {
      $(this).addClass("num" + index);
      let i = index / 14;
      $(this).css("animation-delay", i + 0.8 + "s");
    });
});
// 섹션-3 마우스 호버 이미지 교체
document.addEventListener("DOMContentLoaded", function () {
  const targetImgs = document.querySelectorAll(".target-img");
  const targetHovers = document.querySelectorAll(".target-hover");

  targetImgs.forEach((img, index) => {
    img.addEventListener("mouseover", function () {
      img.style.display = "none";
      targetHovers[index].style.display = "block";
    });

    targetHovers[index].addEventListener("mouseout", function () {
      img.style.display = "inline-block"; // or whatever the original display property was
      targetHovers[index].style.display = "none";
    });
  });
});
