$(document).ready(function () {
  $("#start-rotate").click(function () {
    var prize;
    // 1부터 5까지의 랜덤한 정수 생성
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    // randomNumber에 따라 prize 값 설정
    switch (randomNumber) {
      case 1:
        prize = "product01";
        break;
      case 2:
        prize = "product02";
        break;
      case 3:
        prize = "product03";
        break;
      case 4:
        prize = "product04";
        break;
      case 5:
        prize = "product05";
        break;
      default:
        // 예외 처리 등을 추가할 수 있음
        break;
    }
    var degrees;
    var resultImage;
    switch (prize) {
      case "product01":
        degrees = 0;
        resultImage = "images/result-1.png";
        break;
      case "product02":
        degrees = 72;
        resultImage = "images/result-2.png";
        break;
      case "product03":
        degrees = 144;
        resultImage = "images/result-3.png";
        break;
      case "product04":
        degrees = 216;
        resultImage = "images/result-4.png";
        break;
      case "product05":
        degrees = 288;
        resultImage = "images/result-5.png";
        break;
      default:
        // 예외 처리 등을 추가할 수 있음
        break;
    }
    rotate(degrees);
    $("#resultImg").attr("src", resultImage);
    window.setTimeout(resultLayer, 5400);
  });

  function rotate(degrees) {
    $("#roulette-gift").rotate({
      angle: 0,
      animateTo: 360 * 5 + degrees,
      easing: $.easing.easeInOutElastic,
      duration: 5000,
    });
  }

  function resultLayer() {
    $(".resultLayer").css("display", "block");
  }

  $("#closeLayer").click(function () {
    $(".resultLayer").css("display", "none");

    $("#roulette-gift").rotate({
      angle: 0,
      duration: 0,
    });
  });

  // 결과 확인 버튼 클릭 이벤트 처리
  $("#resultOk").click(function (event) {
    event.preventDefault(); // 기본 이벤트 제거 (폼 전송 방지)

    // 개인정보 수집 동의 여부 확인
    var agreement = $("#resultInfo").prop("checked");

    // 개인정보 수집에 동의한 경우에만 알림창 띄우기
    if (agreement) {
      // 경품 발송을 위해 입력된정보 가져오기
      var name = $("#resultName").val();
      var tel = $("#resultTel").val();
      // 입력된 정보 확인
      var confirmationMessage = "이름: " + name + "\n연락처: " + tel + "\n위 정보로 경품 발송을 진행하시겠습니까?";

      // 경품 발송 정보 확인을 위한 알림창 표시
      var confirmation = confirm(confirmationMessage);

      // 사용자가 확인을 눌렀을 때만 경품 발송 진행
      if (confirmation) {
        // 여기에 경품 발송 등의 작업을 수행하는 코드를 추가할 수 있습니다.
        alert("이벤트 참여 완료! 메인페이지로 이동합니다.");

        // 모달 닫기
        modalClose();
      }
    } else {
      alert("개인정보 수집에 동의해주세요.");
    }
  });
});
