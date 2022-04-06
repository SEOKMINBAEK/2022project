class interestCal {

    constructor() {
        this.repayType = document.querySelectorAll(".repayType");
        this.calBtn = document.querySelector("button");
        this.inputArray = document.querySelectorAll("input");
        this.inputBoxArray = document.querySelectorAll(".inputBox");
        this.wonBox = document.querySelectorAll("#wonBox");
    }

    /* 상환방식 선택하기 */
    selectRepay(repayIndex) {
        this.repayType.forEach(value => {
            value.classList.remove("selected");
        })
        this.repayType[repayIndex].classList.add("selected");
    }

    /* 결과 도출하기 */
    resultFunc() {

        let loanAmount = Number(this.inputArray[0].value);
        let interestRate = this.inputArray[1].value/100;
        let loanPeriod = this.inputArray[2].value*12;
        let resultSpanBox = document.querySelectorAll(".emptyBox");
        let repayTypeKor = "";  // 상환방식 텍스트
        let repayMonthly = 0;   // 월별상환금액
        let totalInterest = 0;  //총이자
        let splitAmountText = "";   // 기간별 상환금액 텍스트
        let resultText = document.querySelector("#resultText"); // 메인텍스트창
        let resultTable = document.querySelector("#resultTalbe");   // 회차표시창
        let resultInterest = document.querySelector("#resultInterest"); //총이자 표시창


        resultTable.innerHTML = '<li class = "episodeHead"><span>회차</span><span>이자</span><span>원금</span><span>내야하는 금액</span></li>';

        for(let i=0; i< loanPeriod; i++) {
            resultTable.innerHTML += '<li class="episode"><span class="episode1"> </span><span class="episode2"> </span><span class="episode3"> </span><span class="episode4"> </span></li>';
        }

        let episodeRow = document.querySelectorAll(".episode");
        let episodeSpan1 = document.querySelectorAll(".episode1");
        let episodeSpan2 = document.querySelectorAll(".episode2");
        let episodeSpan3 = document.querySelectorAll(".episode3");
        let episodeSpan4 = document.querySelectorAll(".episode4");

        /* 원리금 균등상환인경우 */
        if(selected == this.repayType[0]) {
            
            let totalAmount = 0;
            let episodeInterest = 0;
            let paidAmount = 0;

            let interestNum = (1 + (interestRate/12))**loanPeriod;
    
            let numeratorNum = loanAmount * (interestRate/12) * interestNum;
    
            let denomiratorNum = interestNum -1;
    
            repayMonthly = numeratorNum / denomiratorNum;
    
            totalInterest = (repayMonthly*loanPeriod) - loanAmount;

            repayTypeKor = "원리금균등상환";

            splitAmountText = "매월 " + this.resultWon(Math.round(repayMonthly));

            for(let i=0; i< loanPeriod; i++) {                
    
                totalAmount = loanAmount - paidAmount;
    
                episodeInterest = totalAmount*interestRate/12;
        
                totalAmount = (loanAmount+totalInterest)/loanPeriod - episodeInterest;
    
                paidAmount += totalAmount;

                /*7등분 회차별 구간금액 출력*/
                // if(i == 0 || (i+1)%(loanPeriod/6)==0 || i == (loanPeriod-1)) {
                    episodeSpan1[i].innerHTML = i+1;
                    episodeSpan2[i].innerHTML = this.resultWon(Math.round(episodeInterest));
                    episodeSpan3[i].innerHTML = this.resultWon(Math.round(totalAmount));
                    episodeSpan4[i].innerHTML = this.resultWon(Math.round(repayMonthly));
                    episodeRow[i].style.display = 'flex';
                // }
            }
        }

        /* 원금 균등상환인 경우 */ 
        if(selected == this.repayType[1]) {

            let monthlyPrincipal = loanAmount/loanPeriod;
            let episodeInterest = loanAmount/12*interestRate;
            let reductionInterest = episodeInterest/loanPeriod;
            totalInterest = ((episodeInterest+reductionInterest)/2)*(loanPeriod);

            let firstAmount = 0;
            let middleAmount = 0;
            let lastAmount = 0;

            for(let i=0; i<loanPeriod; i++) {
                if(i == 0) {
                    firstAmount = monthlyPrincipal + episodeInterest; 
                } else if(i == (loanPeriod/2-1)) {
                    middleAmount = monthlyPrincipal + episodeInterest; 
                } else if(i == (loanPeriod-1)) {
                    lastAmount = monthlyPrincipal + episodeInterest;
                }

                /*7등분 회차별 구간금액 출력*/
                if(i == 0 || (i+1)%(loanPeriod/6)==0 || i == (loanPeriod-1)) {
                    episodeSpan1[i].innerHTML = i+1;
                    episodeSpan2[i].innerHTML = this.resultWon(Math.round(episodeInterest));
                    episodeSpan3[i].innerHTML = this.resultWon(Math.round(monthlyPrincipal));
                    episodeSpan4[i].innerHTML = this.resultWon(Math.round(monthlyPrincipal + episodeInterest));
                    episodeRow[i].style.display = 'flex';
                }

                episodeInterest -= reductionInterest;
            }

            repayTypeKor = "원금균등상환";

            splitAmountText = "첫달 " + this.resultWon(Math.round(firstAmount)) + ", 중간달 " + this.resultWon(Math.round(middleAmount)) + ", 마지막달 " + this.resultWon(Math.round(lastAmount));
        }

        /* 만기 일시상환인 경우 */
        if(selected == this.repayType[2]) {

            totalInterest = loanAmount * (interestRate/12) *loanPeriod;
            let monthlyInterest = Math.round(totalInterest/loanPeriod);

            repayTypeKor = "만기일시상환";

            splitAmountText = "첫달 " + this.resultWon(Math.round(monthlyInterest)) + ", 마지막달 " + this.resultWon(Math.round(loanAmount+monthlyInterest));
            
            /*7등분 회차별 구간금액 출력*/
            episodeSpan1[0].innerHTML = 1+"~"+(loanPeriod-1);
            episodeSpan2[0].innerHTML = this.resultWon(Math.round(monthlyInterest));
            episodeSpan3[0].innerHTML = 0+" 원";
            episodeSpan4[0].innerHTML = this.resultWon(Math.round(monthlyInterest));
            episodeRow[0].style.display = 'flex';

            episodeSpan1[1].innerHTML = loanPeriod;
            episodeSpan2[1].innerHTML = this.resultWon(Math.round(monthlyInterest));
            episodeSpan3[1].innerHTML = this.resultWon(Math.round(loanAmount));
            episodeSpan4[1].innerHTML = this.resultWon(Math.round(loanAmount+monthlyInterest));
            episodeRow[1].style.display = 'flex';
        }

        /* 공통으로 나가는 금액정리 메인텍스트 */
        resultSpanBox[0].innerHTML = this.resultWon(loanAmount);
        resultSpanBox[1].innerHTML = loanPeriod/12+"년";
        resultSpanBox[2].innerHTML = repayTypeKor;
        resultSpanBox[3].innerHTML = (interestRate*100).toFixed(1)+"%";
        resultSpanBox[4].innerHTML = splitAmountText;
        resultText.style.visibility = "visible";

        resultInterest.innerHTML = `총 이자액은 <span>${this.resultWon(Math.round(totalInterest))}</span>,<br> 총 납부하실 금액은 <span>${this.resultWon(Math.round(totalInterest+loanAmount))}</span> 입니다.`;

        /* 박스보더 색 초기화 */
        this.inputBoxArray.forEach(value => {
            value.classList.remove("focus");
        })

    }

    //받아온 금액을 원화단위로 쪼개기
    resultWon(anyAmount) {
        anyAmount = `${anyAmount}`;
        let copyAmount = [...anyAmount];
        let cuttingAmount = [];

        for(let i=0; i<Math.ceil(anyAmount.length/4); i++) {
            let cut4Num = [];
            for(let j=0; j<4; j++) {
                cut4Num.unshift(copyAmount.pop());
            }
            // cut4Num.splice(1,0,",");  주석풀면 한글찍힘???
            cuttingAmount.unshift(cut4Num);
        }

        switch(cuttingAmount.length) {
            case 1: break;
            case 2: cuttingAmount[cuttingAmount.length-2].push("만 "); break;
            case 3: cuttingAmount[cuttingAmount.length-2].push("만 "); cuttingAmount[cuttingAmount.length-3].push("억 "); break;
            case 4: cuttingAmount[cuttingAmount.length-2].push("만 "); cuttingAmount[cuttingAmount.length-3].push("억 "); cuttingAmount[cuttingAmount.length-4].push("조 "); break;
        }

        for(let i=0; i<cuttingAmount.length; i++) {
            for(let j=0; j<5; j++) {
                if(cuttingAmount[i][0]>0 && cuttingAmount[i][0]<10) {
                    break;
                } else {
                    cuttingAmount[i].shift();
                }
            }
            /* 원단위로 나온배열에 컴마찍기 */
            if( i == cuttingAmount.length-1 && cuttingAmount[cuttingAmount.length-1].length == 4) {
                cuttingAmount[cuttingAmount.length-1].splice(1,0,',');
            } else if(i < cuttingAmount.length-1 && cuttingAmount[i].length == 5) {
                cuttingAmount[i].splice(1,0,',');
                console.log(cuttingAmount[i]);
            }
        }

        let amountWon = "";
        for(let i=0; i<cuttingAmount.length; i++) {
            for(let j=0; j<cuttingAmount[i].length; j++) {
                amountWon += cuttingAmount[i][j];
            }
        }
        amountWon += "원 ";
        return amountWon;
    }

}

const InterestCal = new interestCal();  // 인스턴스 생성

let selected = document.querySelector(".selected");// 변수selected초기값은 원리금균등
let calComplete = false;    // 최초계산버튼 누르기전

/* 상환방식 버튼을 누르면 상환방식선택함수 호출 후 selected변수 변경 */
InterestCal.repayType.forEach((value,index) => {
    value.addEventListener("click",function() {
        InterestCal.selectRepay(index);
        selected = document.querySelector(".selected");
        if(calComplete === true) {
            InterestCal.resultFunc();
        }
    });
})

/* 실시간 입력값 원화변경 */
InterestCal.inputArray[0].onkeyup = function() {
    InterestCal.wonBox[0].innerHTML = InterestCal.resultWon(InterestCal.inputArray[0].value);
}

/* input focus시 box 보더색 변경 */
InterestCal.inputArray.forEach((value,index) => {
    value.addEventListener("focus", () => {
        InterestCal.inputBoxArray.forEach(value => {
            value.classList.remove("focus");
        })
        InterestCal.inputBoxArray[index].classList.add("focus");
    })
})

/* 계산하기 버튼 누르면 계산함수 호출 */
InterestCal.calBtn.addEventListener("click", function() {
    InterestCal.resultFunc();
    calComplete = true;
    return calComplete;
})