class Matrix_cal {
    constructor() {
        this.input_area = document.querySelectorAll("input");
        this.button = document.querySelector(".btnArea button");
        this.box = document.querySelectorAll(".boxArea > div");
        this.cal_list = document.querySelectorAll(".secondNav > div");
    }
    /* 행렬만드는 함수 */
    create_matrix(num1,num2,box) {
        if(num1>9 || num2>9) {
            this.modal_box(0);
            return;
        }
        box.innerHTML = '';
        this.box[2].innerHTML = '';
        let i=0;
        while(i<num1) {
            let j=0;
            while(j<num2) {
                box.innerHTML += `<input type="text" class='smallBox Row${i} Column${j}'></input>`;
                j++;
            }
            box.innerHTML += '<br>';
            i++;
        }
    }

    /* 랜덤한 숫자 만드는 함수 */
    create_random_num(num) {
        let value_of_array = document.querySelectorAll(`.boxArea > div:nth-child(${num}) > input`);
        
        value_of_array.forEach(v => {
            v.value = Math.floor((Math.random()*30)+1);
        })
    }

    /* 행렬의 각 칸의 값을 가져오는 함수 */
    get_value(num) {
        let value_of_array = document.querySelectorAll(`.boxArea > div:nth-child(${num}) > input`);
        let row = document.querySelectorAll(`.boxArea > div:nth-child(${num}) > .Column0`);
        let column = document.querySelectorAll(`.boxArea > div:nth-child(${num}) > .Row0`);
        let count_num = value_of_array.length;
        let all_value = [];

        let i=0;
        while(i<count_num) {
            if(value_of_array[i].value == "") {
                return this.modal_box(4);
            }
            all_value.push(value_of_array[i].value);
            i++;
        }

        let total_value = [];
        let j=0;
        while(j<row.length) {
            let row_value = [];
            let k=0;
            while(k<column.length) {
                row_value.push(all_value.shift());
                k++;
            }
            total_value.push(row_value);
            j++;
        }
        return total_value;
    }

    /* 행렬의 값을 더하는 함수 */
    plus_matrix(num1,num2) {
        if(num1[0].length != num2[0].length || num1.length != num2.length) {
            this.modal_box(1);
            return;
        }
        this.box[2].innerHTML = '';
        let i=0;
        while(i<num1.length) {
            let j=0;
            while(j<num1[0].length) {
                this.box[2].innerHTML += `<div class='smallBox Row${i} Column${j}'>${this.comma_value(Number(num1[i][j]) + Number(num2[i][j]))}</div>`;
                j++;
            }
            this.box[2].innerHTML += '<br>';
            i++;
        }
    }

    /* 행렬의 값을 빼는 함수 */
    minus_matrix(num1,num2) {
        if(num1[0].length != num2[0].length || num1.length != num2.length) {
            this.modal_box(2);
            return;
        }
        this.box[2].innerHTML = '';
        let i=0;
        while(i<num1.length) {
            let j=0;
            while(j<num1[0].length) {
                this.box[2].innerHTML += `<div class='smallBox Row${i} Column${j}'>${this.comma_value(Number(num1[i][j]) - Number(num2[i][j]))}</div>`;
                j++;
            }
            this.box[2].innerHTML += '<br>';
            i++;
        }
    }

    /* 행렬의 값을 곱하는 함수 */
    multiple_matrix(num1,num2) {
        if(num1[0].length != num2.length) {
            this.modal_box(3);
            return;
        }
        this.box[2].innerHTML = '';
        let i=0;
        while(i<num1.length) {
            let j=0;
            while(j<num2[0].length) {
                let one_space_value = 0;
                let k=0;
                while(k<num2.length) {
                    one_space_value += Number(num1[i][k])*Number(num2[k][j]);
                    k++;
                }
                this.box[2].innerHTML += `<div class='smallBox Row${i} Column${j}'>${this.comma_value(one_space_value)}</div>`;
                j++;
            }
            this.box[2].innerHTML += '<br>';
            i++;
        }
    }

    /* 경고창 띄우는 함수 */
    modal_box(type) {
        let modal = document.querySelector(".modalBox");
        let inner_text = document.querySelector(".modalBox > p");
        let exitBtn = document.querySelector(".exitBtn");
        
        if(type == 0) {
            inner_text.textContent = `각 행렬의 '행'과 '열'의 길이는 '0 - 9' 까지의 숫자만 가능합니다.`;
        }
        if(type == 1) {
            inner_text.textContent = `각 행렬의 '행'과 '열'이 일치해야 덧셈이 가능합니다.`;
        }
        if(type == 2) {
            inner_text.textContent = `각 행렬의 '행'과 '열'이 일치해야 뺄셈이 가능합니다.`;
        }
        if(type == 3) {
            inner_text.textContent = `첫번째 행렬의 '열'과 두번째 행렬의 '행'이 일치해야 곱셈이 가능합니다.`;
        }
        if(type == 4) {
            inner_text.textContent = `행렬의 빈칸을 채워주세요.`;
        }
        modal.style.display = "block";
        exitBtn.addEventListener("click", () => {
            modal.style.display = "none";
        })
    }

    /* 컴마찍는 함수 */
    comma_value(num) {
        return num.toLocaleString('ko-KR');
    }
}

let matrix_cal = new Matrix_cal();

    // 행렬생성 문자 값 막기
matrix_cal.input_area.forEach(v=>{
    v.addEventListener("keyup",()=>{
        let a = /[a-z,A-Z,ㄱ-ㅎ,-]/;
        return v.value = a.test(v.value)?null:v.value;
    })
})

// 만들기 버튼으로 행렬생성
matrix_cal.button.addEventListener("click", () => {
    matrix_cal.create_matrix(matrix_cal.input_area[0].value,matrix_cal.input_area[1].value,matrix_cal.box[0]);
    matrix_cal.create_matrix(matrix_cal.input_area[2].value,matrix_cal.input_area[3].value,matrix_cal.box[1]);

    //문자 입력값 막기
    let all_input = document.querySelectorAll(`.boxArea > div > input`);
    all_input.forEach(v=>{
        v.addEventListener("keyup",()=>{
            let a = /[a-z,A-Z,ㄱ-ㅎ]/;
            return v.value = a.test(v.value)?null:v.value;
        })
    })

    // 랜덤버튼 클릭시 랜덤숫자함수 호출
    matrix_cal.cal_list[0].addEventListener("click", () => {
        matrix_cal.create_random_num(1);
        matrix_cal.create_random_num(2);
    })

    // 더하기버튼 클릭시 더하기함수 호출
    matrix_cal.cal_list[1].addEventListener("click", () => {
        matrix_cal.plus_matrix(matrix_cal.get_value(1),matrix_cal.get_value(2));
    })

    // 빼기버튼 클릭시 빼기함수 호출
    matrix_cal.cal_list[2].addEventListener("click", () => {
        matrix_cal.minus_matrix(matrix_cal.get_value(1),matrix_cal.get_value(2));
    })

    // 곱하기버튼 클릭시 곱하기함수 호출
    matrix_cal.cal_list[3].addEventListener("click", () => {
        matrix_cal.multiple_matrix(matrix_cal.get_value(1),matrix_cal.get_value(2));
    })
})