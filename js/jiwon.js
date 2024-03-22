$(document).ready(function(){
    $(".target-1").hover(
      function() {
        // 호버 시작 시
        // $(this).find('.bubble-1, .bubble-1-txt').hide();
        $(this).find('.target-1-hover').show();
        $(".target-2, .target-3").css("animation", "none"); // 진동 애니메이션 멈춤
        $(".target-2, .target-3").find('.bubble-1, .bubble-2-txt, .bubble-3-txt').hide(); // 다른 버블 숨김
      },
      function() {
        // 호버 종료 시
        // $(this).find('.bubble-1,.bubble-1-txt').show();
        $(this).find('.target-1-hover').hide();
        $(".target-2, .target-3").css("animation", "vibration 0.8s infinite linear"); // 진동 애니메이션 재개
        $(".target-2, .target-3").find('.bubble-1, .bubble-2-txt, .bubble-3-txt').show(); // 다른 버블 보임
      }
    );
    $(".target-2").hover(
      function() {
        // 호버 시작 시
        // $(this).find('.bubble-1, .bubble-2-txt').hide();
        $(this).find('.target-2-hover').show();
        $(".target-1, .target-3").css("animation", "none"); // 진동 애니메이션 멈춤
        $(".target-1, .target-3").find('.bubble-1, .bubble-1-txt, .bubble-3-txt').hide(); // 다른 버블 숨김
      },
      function() {
        // 호버 종료 시
        // $(this).find('.bubble-1,.bubble-2-txt').show();
        $(this).find('.target-2-hover').hide();
        $(".target-1, .target-3").css("animation", "vibration 0.8s infinite linear"); // 진동 애니메이션 재개
        $(".target-1, .target-3").find('.bubble-1, .bubble-1-txt, .bubble-3-txt').show(); // 다른 버블 보임
      }
    );
    $(".target-3").hover(
      function() {
        // 호버 시작 시
        // $(this).find('.bubble-1, .bubble-3-txt').hide();
        $(this).find('.target-3-hover').show();
        $(".target-2, .target-1").css("animation", "none"); // 진동 애니메이션 멈춤
        $(".target-2, .target-1").find('.bubble-1, .bubble-2-txt, .bubble-1-txt').hide(); // 다른 버블 숨김
      },
      function() {
        // 호버 종료 시
        // $(this).find('.bubble-1,.bubble-3-txt').show();
        $(this).find('.target-3-hover').hide();
        $(".target-2, .target-1").css("animation", "vibration 0.8s infinite linear"); // 진동 애니메이션 재개
        $(".target-2, .target-1").find('.bubble-1, .bubble-2-txt, .bubble-1-txt').show(); // 다른 버블 보임
      }
    );
  });