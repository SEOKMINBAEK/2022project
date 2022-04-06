resultComma(anyNum) {

  anyNum = `${anyNum}`;
  let copyNum = [...anyNum];
  let resultArray = [];

  for(let i=0; i<Math.ceil(anyNum.length/3); i++) {
      let cut3Num = [];
      for(let j=0; j<3; j++) {
          cut3Num.unshift(copyNum.pop());
      }
      cut3Num.unshift(",");
      resultArray.unshift(cut3Num);
  }
  resultArray[0].shift();
  
  let resultNum = "";

  for(let i=0; i<resultArray.length; i++) {
      for(let j=0; j<resultArray[i].length; j++) {
          if(resultArray[i][j] == undefined) continue;
          resultNum += resultArray[i][j];
      }
  }
  return resultNum;
}