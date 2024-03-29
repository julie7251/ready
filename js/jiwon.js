$(document).ready(function () {
  $(".modal-wrap").fadeIn(); // 모달 창 보이기
  // 모달이 이미 열려있는지 여부를 확인하는 함수
  function isModalOpened() {
    return document.cookie.includes("modalOpened=true");
  }

  // 모달이 열려있는 경우에는 바로 반환하여 모달을 다시 열지 않도록 함
  if (!isModalOpened()) {
    $(".modal-wrap").fadeIn(); // 모달 창 보이기
  }

  $("#event").click(function () {
    $("#modal").css("display", "fixed").hide().fadeIn();
  });

  $("#close").click(function () {
    modalClose();
  });

  // 모달을 닫는 함수
  function modalClose() {
    $("#modal").fadeOut();
    $(".modal-wrap").fadeOut(); // 모달 창 숨기기
    // 모달이 닫힐 때 쿠키를 설정하여 다음에는 모달이 뜨지 않도록 함
    document.cookie = "modalOpened=true"; // 모달이 닫힌 후 쿠키 설정
  }



});
