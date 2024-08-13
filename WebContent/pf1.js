/**
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.adv img');
    var currentIndex = 0;

    // 첫 번째 이미지 보이기
    images[currentIndex].classList.add('active');

    setInterval(function() {
        // 현재 이미지 숨기기
        images[currentIndex].classList.remove('active');

        // 다음 이미지 인덱스로 전환
        currentIndex = (currentIndex + 1) % images.length;

        // 다음 이미지 보이기
        images[currentIndex].classList.add('active');
    }, 2000); // 2초 간격으로 실행
});
