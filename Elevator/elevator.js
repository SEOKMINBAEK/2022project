let floor_btn = document.querySelectorAll('.floor_btn');
let o_or_c = document.querySelectorAll('.o_or_c');
let elevator = document.querySelector('.elevator');
let elev_door = document.querySelectorAll('.door');
let floor_display = document.querySelector('.floor_display > ul');
let up_down_light = document.querySelectorAll('.light');

/* 층수버튼 인덱스번호와 맞게 재정렬 */
let button_arr = [];

for(let i=0; i<8; i++) {
    button_arr.unshift(floor_btn[i]);
}

/* 열림,닫힘 버튼 누르면 열리고 닫히기 */
let open_or_close = ()=>{
    o_or_c.forEach((v,i)=>{
        v.addEventListener("click",()=>{
            elevator.className = i===0 ? 'elevator open' : 'elevator';
        })
    })
}

open_or_close();

let num =0; // 엘베속도
let display_num = 0; //디스플레이 속도
let now_floor;

/* 버튼 클릭시 이벤트 */
button_arr.forEach((v,i,a)=>{
    v.addEventListener("click",()=>{
        for(let j=0; j<a.length; j++) {
            a[j].setAttribute('disabled','true');
        }
        o_or_c.forEach(v=>{
            v.setAttribute('disabled','true');
        })

        v.style.border = `3px solid rgba(200, 0, 0, 0.7)`;
        v.style.color = `rgba(200, 0, 0, 0.7)`;

        let move_elev = ()=>{
    
            let interval = setInterval(()=>{
                if(now_floor == i) {
                    clearInterval(interval);
                }

                elevator.style.bottom = `${num}px`;
                floor_display.style.bottom = `${display_num}px`;
                
                if(now_floor == undefined) {
                    now_floor = 0;
                }

                num = now_floor<i ? num + 1.75 : num - 1.75;
                display_num = now_floor<i ? display_num - 2 : display_num + 2;
                let now_light = now_floor<i ? up_down_light[0] : up_down_light[1];
                now_light.style.opacity = '1';

                if(num == (700/8)*i) {
                    now_floor = i;

                    clearInterval(interval);
                    let open_door = ()=>{
                        elevator.classList.add('open');
                    }
                    setTimeout(open_door,500);
                    v.style.border = `3px solid #000`;
                    v.style.color = `#000`;
                    now_light.style.opacity = '0.2';

                    let open_complete = ()=>{
                        for(let j=0; j<a.length; j++) {
                            a[j].removeAttribute('disabled');
                        }
                        o_or_c.forEach(v=>{
                            v.removeAttribute('disabled');
                        })
                    }

                    setTimeout(open_complete,1000);
                }
            },10);   
        }

        
        if(elevator.className == 'elevator') move_elev();
        else {
            elevator.className = 'elevator';
            setTimeout(move_elev,1000);
        }

    })
})