function BitChanger() {
    this.inputList = document.querySelectorAll("input");
    this.buttonList = document.querySelectorAll("button");

    this.changeBit = function(num) {

        let twoBitValue = this.inputList[0].value;
        let eightBitValue = this.inputList[1].value;
        let tenBitValue = this.inputList[2].value;
        let sixTeenBitValue = this.inputList[3].value;
        let alertBox = document.querySelector("#alertBox");
        let tempBit = 0;

        function changeTenBit() {
            let bitValue = tenBitValue;
            let tempA = [];
            for(;;) {
                tempA.unshift(bitValue%2);
                bitValue = Math.floor(bitValue/2);
                if(bitValue == 0) break;
            }
            let resultTwoBit = '';
            for(let i=0; i<tempA.length; i++) {
                resultTwoBit += tempA[i];   
            }
            return resultTwoBit;
        }   //  10진수에서 2진수로 바꿈

        function changeAnotherBit(value) {
            let bitValue = value;
            let tempA = [];
            let resultA = [];
            for(let i=0; i<bitValue.length; i++) {
                tempA[i] = bitValue.slice(i,i+1);
                switch(tempA[i]) {
                    case 'a': tempA[i] = 10; break;
                    case 'A': tempA[i] = 10; break;
                    case 'b': tempA[i] = 11; break;
                    case 'B': tempA[i] = 11; break;
                    case 'c': tempA[i] = 12; break;
                    case 'C': tempA[i] = 12; break;
                    case 'd': tempA[i] = 13; break;
                    case 'D': tempA[i] = 13; break;
                    case 'e': tempA[i] = 14; break;
                    case 'E': tempA[i] = 14; break;
                    case 'f': tempA[i] = 15; break;
                    case 'F': tempA[i] = 15; break;
                    default: tempA[i] = tempA[i]; break;
                }
            }
            let copyA = [...tempA];
            for(let i=0; i<tempA.length; i++) {
                let tempA2 = [];

                if(copyA[i] == 0) {
                    if(bitValue === eightBitValue) {
                        tempA2.unshift(0,0,0);  
                        resultA.push(tempA2);
                    } else if(bitValue === sixTeenBitValue) {
                        tempA2.unshift(0,0,0,0);  
                        resultA.push(tempA2);
                    }
                }
                else {
                    for(;;) {
                        tempA2.unshift(copyA[i]%2);
                        copyA[i] = Math.floor(copyA[i]/2);
                        if(copyA[i] == 0) break;
                    }
    
                    if(tempA[i] < 2) {
                        if(bitValue == eightBitValue) {
                            tempA2.unshift(0,0);
                        } else if(bitValue == sixTeenBitValue) {
                            tempA2.unshift(0,0,0);
                        }
                    } else if(tempA[i] < 4) {
                        if(bitValue == eightBitValue) {
                            tempA2.unshift(0);
                        } else if(bitValue == sixTeenBitValue) {
                            tempA2.unshift(0,0);
                        }
                    } else if(tempA[i] < 8) {
                        if(bitValue == sixTeenBitValue) {
                            tempA2.unshift(0);
                        }
                    }
                    resultA.push(tempA2);
                }
            }
            for(;;) {
                if(resultA[0][0] != 0) break;
                if(resultA[0][0] == 0) resultA[0].shift();
            }
    
            let resultTwoBit = '';
            for(let i=0; i<resultA.length; i++) {
                for(let j=0; j<resultA[i].length; j++) {
                    resultTwoBit += resultA[i][j];    
                }
            }
            return resultTwoBit;
        }   // 8 or 16 진수를 2진수로 바꿈

        function cutTwoBit(twoBit, cutNum) {
            let tempA = [];
            let tempA2 = [];
            let copyTwoBit = [...twoBit];

            for(let i=0; i<Math.ceil(twoBit.length/cutNum); i++) {
                for(let j=0; j<cutNum; j++) {
                    if(copyTwoBit[0] == undefined) break;
                    let tempV = copyTwoBit.pop();
                    tempA2.unshift(tempV);
                }
                tempA.unshift(tempA2);
                tempA2 = [];
            }
            return tempA;
        }   // 2진수 자르는 함수

        function makeTenBit(twoBit) {

            for(let i=twoBit.length-1; i>=0; i--) {
                tempBit += twoBit[(twoBit.length-1)-i]*(2**i);
            }
            let resultBit = tempBit;
            tempBit = 0;
            return resultBit;
        }   //2진수를 10진수로 바꿈

        function anotherBit(resultCut) {
            let resultBit = [];
            let resultString = '';
            
            for(let i=0; i<resultCut.length; i++) {
                for(let j=0; j<resultCut[i].length; j++) {
                    tempBit += resultCut[i][(resultCut[i].length-1)-j]*(2**j);
                }
                switch(tempBit) {
                    case 10: tempBit = 'A'; break;
                    case 11: tempBit = 'B'; break;
                    case 12: tempBit = 'C'; break;
                    case 13: tempBit = 'D'; break;
                    case 14: tempBit = 'E'; break;
                    case 15: tempBit = 'F'; break;
                }
                resultBit[i] = tempBit;
                tempBit = 0;
            }
            for(let i=0; i<resultBit.length; i++) {
                resultString += resultBit[i];
            }

            return resultString;
        }   // 2진수를 8 or 16진수로 바꿈

        function inspectBit(bitValue,num) {
            let result = "";
            for(let i=0; i<bitValue.length; i++) {
                if(bitValue[i]<num) {
                    result = "";
                } else if(bitValue == sixTeenBitValue) {
                    if(bitValue[i] == 'a'||bitValue[i] == 'A'||bitValue[i] == 'b'||bitValue[i] == 'B'||bitValue[i] == 'c'||bitValue[i] == 'C'||bitValue[i] == 'd'||bitValue[i] == 'D'||bitValue[i] == 'e'||bitValue[i] == 'E'||bitValue[i] == 'f'||bitValue[i] == 'F') {
                        result = "";
                    } else {
                        result = "notBit";
                    }
                } else {
                    result = "notBit";
                    return result;
                }
            }
            return result;            
        }   //진수검사


        if(num == 0) {
            let result = inspectBit(twoBitValue,2);

            if(result == "notBit") {
                for(let i=0; i<this.inputList.length; i++) {
                    this.inputList[i].value = 0;
                    alertBox.innerHTML = "2진수만 입력해주세요.";
                }
            } else {
                let eightCut = cutTwoBit(twoBitValue,3);
                let sixTeenCut = cutTwoBit(twoBitValue,4);
                this.inputList[1].value = anotherBit(eightCut);
                this.inputList[2].value = makeTenBit(twoBitValue);
                this.inputList[3].value = anotherBit(sixTeenCut);
                alertBox.innerHTML = "";
            }
        }   //2진수 변환

        if(num == 1) {
            let result = inspectBit(eightBitValue,8);

            if( result == "notBit") {
                for(let i=0; i<this.inputList.length; i++) {
                    this.inputList[i].value = 0;
                    alertBox.innerHTML = "8진수만 입력해주세요.";
                }
            } else {
                let sixTeenCut = cutTwoBit(changeAnotherBit(eightBitValue),4);
                this.inputList[0].value = changeAnotherBit(eightBitValue);
                this.inputList[2].value = makeTenBit(changeAnotherBit(eightBitValue));
                this.inputList[3].value = anotherBit(sixTeenCut);
                alertBox.innerHTML = "";
            }
        }   //8진수 변환


        if(num == 2) {
            let result = inspectBit(tenBitValue,10);

            if( result == "notBit") {
                for(let i=0; i<this.inputList.length; i++) {
                    this.inputList[i].value = 0;
                    alertBox.innerHTML = "10진수만 입력해주세요.";
                }
            } else {
                let eightCut = cutTwoBit(changeTenBit(),3);
                let sixTeenCut = cutTwoBit(changeTenBit(),4);
                this.inputList[0].value = changeTenBit();
                this.inputList[1].value = anotherBit(eightCut);
                this.inputList[3].value = anotherBit(sixTeenCut);
                alertBox.innerHTML = "";
            }
        }   //10진수 변환

        if(num == 3) {
            let result = inspectBit(sixTeenBitValue,10);

            if( result == "notBit") {
                for(let i=0; i<this.inputList.length; i++) {
                    this.inputList[i].value = 0;
                    alertBox.innerHTML = "16진수만 입력해주세요.";
                }
            } else {
                let eightCut = cutTwoBit(changeAnotherBit(sixTeenBitValue),3);
                this.inputList[0].value = changeAnotherBit(sixTeenBitValue);
                this.inputList[1].value = anotherBit(eightCut);
                this.inputList[2].value = makeTenBit(changeAnotherBit(sixTeenBitValue));
                alertBox.innerHTML = "";
            }
        }   //16진수 변환
    }
}

let bitChanger = new BitChanger();

for(let i=0; i<4; i++) {
    bitChanger.buttonList[i].addEventListener("click",function() {
        bitChanger.changeBit(i);
    })
}