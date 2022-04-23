$now_date = new Date(); // 현재y.m.d
$now_year = $now_date.getFullYear(); // 현재 연도 
$now_month = ($now_date.getMonth())+1; // 현재 달, 현재달 index로 뽑아오기 때문에 바로쓸려면 +1



/* 연도 변경 함수 */
$change_year = index => { // index == 0, 마이너스버튼 / index == 1, 플러스버튼
    $now_year = index ? ++$now_year : --$now_year;
    $('h1 > span').html($now_year + '년');
}
/****************/



/* 달 변경 함수 */
$change_month = index => { // index == 0, 마이너스버튼 / index == 1, 플러스버튼
    $now_month = index ? ++$now_month : --$now_month;
    if($now_month < 1) { // 월이 0이되면
        --$now_year; // 연도 -1
        $('h1 > span').html($now_year + '년'); // 연도수정
        $now_month = 12; // 월 12월로 수정
    }
    if($now_month > 12) { // 월이 13이되면
        ++$now_year; // 연도 +1
        $('h1 > span').html($now_year + '년'); // 연도수정
        $now_month = 1; // 월 1월로 수정
    }
    $('h2 > span').html($now_month + '월');
}
/***************/



/* 날짜 캘린더 생성함수 */
$change_date = () => {
    $now_date = new Date($now_year,$now_month-1,1); // 입력된 연도, 월 의 1일날짜
    $now_day = $now_date.getDay(); // 1일날짜의 요일 index
    $day_number = 0; // 캘린더에 그릴 날짜
    
    for(let i=$now_day; i<$('.date_list > li').length; i++) { //요일의 index와 일치하는 날짜칸부터 start
        ++$day_number; // 1일부터 시작 ++
        $($('.date_list > li')[i]).html($day_number); //순서대로 날짜 뿌리기

        //2월 윤달 맞추기
        if($now_month == 2) {
            if($now_year%4==0) { //4의 배수연도인 경우 29
                if($now_year%100==0) { // 4의 배수이지만 100의 배수인 연도는 28
                    if($now_year%400==0) { // 100의 배수이지만 400의 배수인 연도는 29...
                        if($day_number == 29) break;
                    } else {
                        if($day_number == 28) break;
                    }
                } else {
                    if($day_number == 29) break;
                }
            } else {
                if($day_number == 28) break;
            }
        }

        if($day_number == 30) { // 30일로 끝나야 하는 경우
            if($now_month == 4  || $now_month == 6  || $now_month == 9  || $now_month == 11) {
                break;
            } 
        }
        if($day_number == 31) { // 31일로 끝나야 하는 경우
            if($now_month == 1 || $now_month == 3  || $now_month == 5  || $now_month == 7  || $now_month == 8  || $now_month == 10  || $now_month == 12) {
                break;
            } 
        } 
    }
    $next_month_day = 0; // 다음달 날짜

    for(let i=($day_number + $now_day); i<$('.date_list > li').length; i++) { // 다음달 날짜 채우기
        ++$next_month_day;
        $($('.date_list > li')[i]).html($next_month_day);
        $($('.date_list > li')[i]).addClass('next_month_day'); // 다음달용 css 클래스 추가
    }
}
/********************/



/* 날짜 캘린더 초기화 함수 */
$clear_date = () => {
    $('.date_list > li').each((index,item) => { // 모든날짜 테이블 리스트
        $(item).html(''); // innerHTML 초기화
        $(item).removeClass('next_month_day'); // 다음달용 css 클래스 삭제
    })
}
/*************************/



$main = (() => { // load완료되면 start
    $('h1 > span').html($now_year + '년'); // 현재년도 뿌리기
    $('h2 > span').html($now_month + '월'); // 현재월 뿌리기

    for(let i=0; i<6; i++) { // 캘린더 테이블 생성
        $('.date_table').append('<ul class="date_list"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>');
    }
    $change_date(); // 최초 현재날짜 기준 캘린더 생성
})();



$('h1 > i').each((index,item) => { // 연도 +,- 버튼
    $(item).on('click', () => { // 클릭시
        $change_year(index); // 버튼 index 넣어주고 연도변경
        $clear_date(); // 날짜 초기화
        $change_date(); // 날짜 변경
    })
})



$('h2 > i').each((index,item) => { // 월 +,- 버튼
    $(item).on('click', () => { // 클릭시
        $change_month(index); // 버튼 index넣어주고 월 변경
        $clear_date(); // 날짜 초기화
        $change_date(); // 날짜 변경
    })
})