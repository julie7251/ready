$(function () {
     // 승아 슬라이드
  var video_wiper = new Swiper('.sw-video', {
    slidesPerView: 3, // 한 번에 보여지는 슬라이드 개수
    spaceBetween: 10, // 슬라이드 간의 간격
    loop: true, // 무한 루프 여부
    autoplay: {
      delay: 5000, // 자동 재생 간격 (밀리초)
      disableOnInteraction: false, // 사용자 상호 작용 후 자동 재생 비활성화 여부
    },
    navigation: {
      prevEl: '.sw-video .swiper-button-prev', // 이전 버튼 선택자
      nextEl: '.sw-video .swiper-button-next', // 다음 버튼 선택자
    },
    
  });
  
})