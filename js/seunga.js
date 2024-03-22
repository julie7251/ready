$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
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
});
window.addEventListener("load", function () {
  var familySiteToggle = document.querySelector(".family-site-toggle");
  var familySiteMenu = document.querySelector(".familysite");

  familySiteToggle.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작(링크 이동) 방지

    // 하위 메뉴의 표시 상태를 토글합니다.
    if (familySiteMenu.style.display === "block") {
      familySiteMenu.style.display = "none";
    } else {
      familySiteMenu.style.display = "block";
    }
  });
  
});
