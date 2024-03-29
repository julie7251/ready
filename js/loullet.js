document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("roulet-rotate").addEventListener("click", function () {
      var prize;
      var randomNumber = Math.floor(Math.random() * 5) + 1;
  
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
          break;
      }
  
      rotate(degrees);
      document.getElementById("resultImg").setAttribute("src", resultImage);
      window.setTimeout(resultLayer, 5400);
    });
  
    function rotate(degrees) {
      var rouletteGift = document.getElementById("roulette-gift");
      var angle = 0;
      var duration = 5000;
      var startTime = performance.now();
  
      function animate(currentTime) {
        var elapsedTime = currentTime - startTime;
        var progress = elapsedTime / duration;
  
        rouletteGift.style.transform = "rotate(" + (360 * 5 + degrees * progress) + "deg)";
  
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
  
      requestAnimationFrame(animate);
    }
  
    function resultLayer() {
      var resultLayer = document.querySelector(".resultLayer");
      resultLayer.style.display = "block";
    }
  
    document.getElementById("closeLayer").addEventListener("click", function () {
      var resultLayer = document.querySelector(".resultLayer");
      resultLayer.style.display = "none";
  
      var rouletteGift = document.getElementById("roulette-gift");
      rouletteGift.style.transform = "rotate(0deg)";
    });
  
    document.getElementById("resultOk").addEventListener("click", function (event) {
      event.preventDefault();
  
      var agreement = document.getElementById("resultInfo").checked;
  
      if (agreement) {
        var name = document.getElementById("resultName").value;
        var tel = document.getElementById("resultTel").value;
        var confirmationMessage = "이름: " + name + "\n연락처: " + tel + "\n위 정보로 경품 발송을 진행하시겠습니까?";
        var confirmation = confirm(confirmationMessage);
  
        if (confirmation) {
          alert("이벤트 참여 완료! 메인페이지로 이동합니다.");
          modalClose();
        }
      } else {
        alert("개인정보 수집에 동의해주세요.");
      }
    });
  });
  
