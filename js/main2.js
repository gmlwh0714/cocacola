$(document).ready(function () {
  $(".main2").on("wheel", function (e) {
    var deltaY = e.originalEvent.deltaY * 2.5; // 🔹 이동 속도 증가 (2.5배)
    var $this = $(this);
    var currentScroll = $this.scrollLeft();
    var maxScroll = $this[0].scrollWidth - $this.outerWidth();

    console.log({ deltaY, maxScroll, currentScroll });

    // 좌측 경계: 왼쪽 스크롤 시 더 이상 스크롤할 수 없으면 기본 동작 허용
    if (deltaY < 0 && currentScroll <= 0) {
      return;
    }
    // 우측 경계: 오른쪽 스크롤 시 더 이상 스크롤할 수 없으면 기본 동작 허용
    if (deltaY > 0 && currentScroll >= maxScroll) {
      return;
    }

    // 기본 스크롤 동작을 막고 가로 스크롤을 진행
    e.preventDefault();
    $this.scrollLeft(currentScroll + deltaY);

    // 🔹 카드 회전 애니메이션 추가 (왕복 회전 + 랜덤 값 유지)
    $(".main2 .card").each(function (index) {
      var randomOffset = $(this).data("randomOffset") || (Math.random() - 0.5) * 30; // 카드마다 고정된 랜덤 값 부여
      $(this).data("randomOffset", randomOffset); // 카드에 저장하여 일관된 움직임 유지

      var rotationAngle = Math.sin(currentScroll / 200) * randomOffset; // 스크롤에 따라 왕복 회전
      $(this).css("transform", `rotate(${rotationAngle}deg)`);
    });
  });
});
