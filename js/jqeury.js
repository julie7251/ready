$(document).ready(function() {
    $(".detail-1::before").hover(
      function() {
        $(".detail-1").css("visibility", "visible");
      },
      function() {
        $(".detail-1").css("visibility", "hidden");
      }
    );
    
  });
  window.onload =function(){
    document.addEventListener('mousemove', function(e) {
        var mouseX = e.clientX; // 마우스의 X 좌표
        var mouseY = e.clientY; // 마우스의 Y 좌표
    
        console.log('마우스 위치: X=' + mouseX + ', Y=' + mouseY);
    
        // 여기에 다른 처리를 추가할 수 있습니다.
    });
  }