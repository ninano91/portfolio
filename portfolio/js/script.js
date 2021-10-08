$(function () {

    //a링크 클릭시 상단으로 이동하는 것 초기화 하기 (헤더메뉴)
    $(".gnb li a").click(function (event) { // a태그 클릭시 작동
        // 클릭된 태그의 본래의 기능을 막음 즉, a태그 본래 기능을 막음
        event.preventDefault();
        var txt = $(this).attr("href");
        // href에 입력된 값을 가져옴 즉 클릭된 a의 국어, 영어, 수학 중 하나를 가져옴
    });

    // 헤더 액션부분
    $(".hd_1").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $("h1.glitched").clone().appendTo(".glitch-window");

    // 헤더 액션 스크롤 조건
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        //console.log(st);
        if (st >= 100) {
            $("header").addClass("fix");
            $("body").addClass("fix");

        } else {
            $("header").removeClass("fix");
            $("body").removeClass("fix");

        }
    });

    let ht = $(window).height();
    $(".gnb li a").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    //상세(모달창) 닫기 버튼 클릭시 액션
    $(".about_close").click(function () {
        $(this).parents("section.about").fadeOut();
    });

    //상세(모달창) 보여지기 액션
    $(".Portfolio_list ul>li>a").click(function () {
        $(this).siblings("section.about").fadeIn();
    });

    //상세페이지 클릭시 스크롤 이동방지
    $(".Portfolio_list>.container>ul>li>a").click(function (event) { // a태그 클릭시 작동
        // 클릭된 태그의 본래의 기능을 막음 즉, a태그 본래 기능을 막음
        event.preventDefault();
    });

});