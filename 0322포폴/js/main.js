$(document).ready(function() {
    var pointSize = $('.cursor').width() / 70;

    $("#wrap").mousemove(function(e){    
        $('.cursor').css("top", e.pageY-pointSize);
        $('.cursor').css("left", e.pageX-pointSize);
        $('.cursor').fadeIn();
    });
    $("#wrap").on("mouseleave", function(){
      $('.cursor').fadeOut();
    });
// 프로필 움직이기
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".profile", {
        rotateX: 0,
        scale: 1.09,
        perspective:0, // Y축 회전
        scrollTrigger: {
            trigger: ".profilewrap", // 트리거 요소
            start: "top 0%", // 시작 위치
            end: "top top", // 종료 위치
            scrub: 0.0001, // 스크롤 속도에 따라 애니메이션 속도 조정
            toggleClass: "rotated" // 클래스 토글
        }    
        });

    
//헤더 스크롤 이동
// const menuli = document.querySelectorAll("li")
// const gnb = document.querySelectorAll(".gnbcon")
// const firstTop = profilewrap[1].offsetTop
// const secondTop = gnb[2].offsetTop

// menuli[1].onclick =function(){
//     window.scroll({top:firstTop, behavior:'smooth'});
// }


const menuli = document.querySelectorAll("li");
const gnb = document.querySelectorAll(".gnbcon");
const profileSection = document.getElementById('profilewrap');
const projectSection = document.getElementById('webprojectwrap'); // 프로필 섹션과 프로젝트 섹션의 ID를 가져옴
const profileTop = profileSection.offsetTop; // 프로필 섹션의 상단 위치를 가져옴
const projectTop = projectSection.offsetTop; // 프로젝트 섹션의 상단 위치를 가져옴

menuli[1].onclick = function() {
    window.scroll({top: profileTop, behavior: 'smooth'}); // 프로필 섹션으로 스크롤
};
menuli[2].onclick = function() {
    window.scroll({top: projectTop, behavior: 'smooth'}); // 프로젝트 섹션으로 스크롤
};

// 모달창1

$('.btn1').click(function() {
    $('.modalbody').fadeIn(); // 모달창 보이기
    $('.modal').fadeIn(); // 배경 레이어 보이기
});

// 모달창 닫기 버튼을 클릭할 때
$('.modalclose').click(function() {
    $('.modalbody').fadeOut(); // 모달창 숨기기
    $('.modal').fadeOut(); // 배경 레이어 숨기기
});

})

 