$(document).ready(function () {
  // 메뉴 버튼 클릭 시 메뉴 열기
  $(".menu_btn").click(function () {
    $(".full_menu").addClass("open");
    $(".menu_bg").fadeIn(300);
  });

  // 닫기 버튼 & 배경 클릭 시 메뉴 닫기
  $(".close_btn, .menu_bg").click(function () {
    $(".full_menu").removeClass("open");
    $(".menu_bg").fadeOut(300);
  });

  // OUR COMPANY & DISCOVER 클릭 시 서브메뉴 열기/닫기
  $(".has_sub > a").click(function (e) {
    e.preventDefault(); // 기본 링크 이동 방지
    let subMenu = $(this).next(".sub");

    if (subMenu.is(":visible")) {
      subMenu.slideUp(); // 이미 열려 있으면 닫기
    } else {
      $(".sub").slideUp(); // 다른 열린 서브메뉴 닫기
      subMenu.slideDown(); // 클릭한 서브메뉴 열기
    }
  });
});

$(document).ready(function () {
  $(".menu > li > a").click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지

    // 모든 메뉴에서 active 제거
    $(".menu li a").removeClass("active");

    // 클릭한 메뉴에만 active 추가
    $(this).addClass("active");
  });

  // 서브메뉴가 있는 경우에도 상위 메뉴에 active 유지
  $(".has_sub > a").click(function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    $(".menu li a").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function() {
  $(window).on("scroll", function() {
    let scrollY = $(window).scrollTop();
    let maxScroll = 600; // 영상이 완전히 커지는 지점
    let scale = Math.min(scrollY / maxScroll, 1);

    // 크기 설정 (350px → 화면 전체)
    let newWidth = 350 + scale * ($(window).width() - 350);
    let newHeight = newWidth * 0.5625; // 16:9 비율 유지

    // 위치 설정 (오른쪽 상단 → 원래 자리에서 커짐)
    let startTop = 50;  
    let endTop = 50; // 꽉 차면 상단 고정
    let newTop = startTop + scale * (endTop - startTop);

    let startRight = 50;
    let endRight = 0; // 오른쪽 정렬 유지
    let newRight = startRight + scale * (endRight - startRight);

    $(".video-container").css({
        "width": newWidth + "px",
        "height": newHeight + "px",
        "top": newTop + "px",
        "right": newRight + "px",
        "transform": `scale(${1 + scale * 0.1})`
    });

    // 영상이 완전히 커진 후 화면 고정 해제 & 다음 섹션 표시
    if (scrollY >= maxScroll) {
        $(".video-container").removeClass("fixed-video");
    } else {
        $(".video-container").addClass("fixed-video");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const main3 = document.querySelector(".main3");

  function checkScroll() {
    const main3Position = main3.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (main3Position < screenHeight * 0.8) { // 80% 화면에 들어오면 실행
      main3.classList.add("active");
      window.removeEventListener("scroll", checkScroll); // 한 번 실행 후 제거 (재실행 방지)
    }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // 페이지 로드 시 바로 실행 (이미 화면에 보일 경우)
});

$(document).ready(function () {
  function moveItem(item) {
    $(item).animate(
      { left: "-100%" }, // 왼쪽으로 이동
      10000, // 속도 (원하는 대로 조절 가능)
      "linear",
      function () {
        $(this).css("left", "100%"); // 다시 오른쪽에서 등장
        moveItem(this); // 무한 반복
      }
    );
  }

  $(".moving").each(function () {
    moveItem(this); // 각각의 요소에 대해 이동 실행
  });
});