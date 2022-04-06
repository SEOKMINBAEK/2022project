// let introStreet = document.querySelector("#introStreet");
// let menuArray = document.querySelectorAll("#myHead>ul li");


// introStreet.addEventListener("mouseover",() => {
//     introS.style.borderBottom = "5px solid navy";
//     introS.style.color = "navy";
// })


//유튜브비디오 뽑기
transYoutube = (videoNum) => {
    let youtubeList = document.querySelectorAll(".youtubeList");
    let youtubeVideo = document.querySelector("#youtubeVideo");
    let videoArray = [
        '<video src="./video/winterFestival.mp4"controls autoplay loop muted width="100%"></video>',
        '<video src="./video/snowStreet.mp4"controls autoplay loop muted width="100%"></video>',
        '<video src="./video/mediaBook.mp4"controls autoplay loop muted width="100%"></video>',
        '<video src="./video/drugStore.mp4"controls autoplay loop muted width="100%"></video>'
    ];

    youtubeList[videoNum].addEventListener("click",() => {
        youtubeVideo.innerHTML = videoArray[videoNum];
    })
}

// 유튜브뽑기 함수 호출
for(let i=0; i<4; i++) {
    transYoutube(i);
}


//책거리소개글 번역뽑기
// transFunc = (transNum) => {
//     let transLang = document.querySelectorAll(".transLang");
//     let resultLang = document.querySelector("#resultLang");
//     let langArray = [
//         "<br><br>The Gyeongui Line Book Street is a special project space for books established by the district of Mapo-gu. It is an integrated cultural complex for living, breathing literary culture found within the historical spaces of Hongdae and the Gyeongui Line.<br><br> Completed in October 2016, the Gyeongui Line Book Street hopes to impart a greater appreciation of books upon visitors, share knowledge and wisdom for a healthier lifestyle, and further advance the Mapo-gu publishing industry.",
//         "<br><br>京義線ブックストリート(Gyeongui Line Book Street)<br><br>京義(キョンイ)線ブックストリートは、麻浦(マポ)区が京義線弘大(ホンデ)複合駅舎に、読書の文化が息づくマルチカルチャースペースとして設けた本のテーマ通りである<br>麻浦区はここを訪れる人々が、世に出た１冊の本の価値を通じて健康な暮らしの知恵を分かち合い、麻浦区の出版産業がさらに発展することを願って、2016年10月に造成を完了した。",
//         "<br><br>京义线书街(Gyeongui Line Book Street)<br><br> 京义线书街是麻浦区在老京义线‘弘大复合车站’上组成的书本主题街，存在生动活泼的读书文化的复合文化空间。<br>在2016年10月，首尔市麻浦区完成建设这条书街。通过一本与人见面的书的价值，麻浦区希望市民都会共享美丽的人生智慧，也期待更发展麻浦区的出版产业。"
//     ];

//     transLang[transNum].addEventListener("click",() => {
//         resultLang.innerHTML = langArray[transNum];
//     })
// }

//소개글번역 함수 호출
// for(let i=0; i<3; i++) {
//     transFunc(i);
// }


//FAQ 아코디언 뽑기
accordionFunc = (listNum) => {
    let faqList = document.querySelectorAll(".faqList");
    let faqResult = document.querySelectorAll(".faqResult");

    faqList[listNum].addEventListener("click",() => {
        if(faqResult[listNum].style.display == "block") {
            faqList[listNum].style.borderBottom = "3px solid rgba(255,255,255,0.2)";
            faqResult[listNum].style.display = "none";
        } else {
            for(let i=0; i<5; i++) {
                faqResult[i].style.display = 'none';
                faqList[i].style.borderBottom = "3px solid rgba(255,255,255,0.2)";
            }
            faqResult[listNum].style.display = "block";
            faqList[listNum].style.borderBottom = "5px solid whitesmoke";
        }
    })
}

//아코디언 함수 호출
for(let i=0; i<5; i++) {
    accordionFunc(i);
}

// 북로드 슬라이드

bookRoadSlide = () => {
    let leftBtn = document.querySelector("#leftBtn");
    let rightBtn = document.querySelector("#rightBtn");
    let imgBox = document.querySelector("#imgBox");
    let textBox = document.querySelector("#textBox");
    let bookRoadImg = [
        "url('./img/bookRoad1.jpg')",
        "url('./img/bookRoad2.jpg')",
        "url('./img/bookRoad3.jpg')",
        "url('./img/bookRoad4.jpg')",
        "url('./img/bookRoad5.jpg')"
    ];
    let bookRoadText = [
        '<h3>[망원역의 편안한 북카페] 당인리 책발전소</h3><p>향기로운 커피&nbsp;향과 종이&nbsp;냄새가 이곳의 감성을 한스푼 더해준다. <br>여러분들의 시계를 이곳에서 잠시 멈추어보세요.</p><h5>서울특별시 마포구 월드컵로14길 10-8</h5><i class="xi-instagram"></i><a href="https://www.instagram.com/danginbookplant/" target="_blank">https://www.instagram.com/danginbookplant/</a>',
        '<h3>[퇴근 후 현대미술 어때요?] 어쩌다 갤러리2</h3><p>매 월 한명의 작가를 선정하여 개인전을 개최합니다.<br> 현대미술&nbsp;관람을 이젠 망원골목에서 즐겨보세요.</p><h5>서울특별시 마포구 동교로15길 32</h5><i class="xi-instagram"></i><a href="http://www.instagram.com/uhjjuhdah.gallery2.lounge" target="_blank">http://www.instagram.com/uhjjuhdah.gallery2.lounge</a>',
        '<h3>[북토크, 전시회, 북콘서트] 진부책방 스튜디오</h3><p>박정대 시인의 시 제목에서 따왔다는 이곳.<br> 다양한 북&nbsp;콘텐츠를 와인&nbsp;한잔에 곁들여보세요. <br>와인과 책,&nbsp;서로의 독서&nbsp;취향을 함께 공유해 보아요.</p><h5>서울특별시 마포구 잔다리로 112 2층</h5><i class="xi-instagram"></i><a href="http://www.instagram.com/jinbubooks" target="_blank">http://www.instagram.com/jinbubooks</a>',
        '<h3>[번역가와 함께 읽는 밤] 번역가의 서재</h3><p>일본어 번역가 박선형 대표가 낮에는 책방지기,<br>밤에는 번역&nbsp;작업을 하는 공간.<br> 번역가와 함께하는 책&nbsp;모임에 초대합니다. <br>번역가와 함께하는 책읽는 밤,&nbsp;번역서의 매력에 빠져봅시다.</p><h5>서울특별시 마포구 동교로17길 67 10-8</h5><i class="xi-instagram"></i><a href="https://www.instagram.com/tlbseoul" target="_blank">https://www.instagram.com/tlbseoul</a>',
        '<h3>[아이들의 책놀이터] 개똥이네 책놀이터</h3><p>아이와 부모가 함께 책 읽는 문화를 만들어 가는 곳.<br> 서예,&nbsp;전통놀이 등 다양한 문화체험으로 자녀와 함께 문학을 만져요. <br>뒹굴뒹굴 구르고,&nbsp;만지고,&nbsp;뛰어누비며 책을 접해요.</p><h5>서울특별시 마포구 성미산로3나길 16</h5><i class="xi-naver"></i><a href="http://cafe.naver.com/dongneabook" target="_blank">http://cafe.naver.com/dongneabook</a>'
    ];
    let bookRoadMark = [...document.querySelectorAll(".bookRoadMark")];

    leftBtn.addEventListener("click", () => {
        bookRoadImg.unshift(bookRoadImg.pop());
        bookRoadText.unshift(bookRoadText.pop());
        bookRoadMark.unshift(bookRoadMark.pop());
        imgBox.style.background = bookRoadImg[0];
        imgBox.style.backgroundSize = "cover";
        textBox.innerHTML = bookRoadText[0];
        for(let i=0; i<bookRoadMark.length; i++) {
            bookRoadMark[i].style.color = "whitesmoke";
            bookRoadMark[i].style.fontSize = "15px";
            bookRoadMark[i].style.lineHeight = "49px";
        }
        bookRoadMark[0].style.color = "pink";
        bookRoadMark[0].style.fontSize = "18px";
        bookRoadMark[0].style.lineHeight = "30px";
    })
    rightBtn.addEventListener("click", () => {
        bookRoadImg.push(bookRoadImg.shift());
        bookRoadText.push(bookRoadText.shift());
        bookRoadMark.push(bookRoadMark.shift());
        imgBox.style.background = bookRoadImg[0];
        imgBox.style.backgroundSize = "cover";
        textBox.innerHTML = bookRoadText[0];
        for(let i=0; i<bookRoadMark.length; i++) {
            bookRoadMark[i].style.color = "whitesmoke";
            bookRoadMark[i].style.fontSize = "15px";
            bookRoadMark[i].style.lineHeight = "49px";
        }
        bookRoadMark[0].style.color = "pink";
        bookRoadMark[0].style.fontSize = "18px";
        bookRoadMark[0].style.lineHeight = "30px";
    })
}

bookRoadSlide();