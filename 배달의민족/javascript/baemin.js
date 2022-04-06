let container = document.querySelectorAll(".container");
let list_dot = document.querySelectorAll(".list_dot");
let header = document.querySelector("header");
let download_img2 = document.querySelector(".download_img2");
let main_desc = document.querySelector(".main_desc");

window.onload = ()=>{
    let random_number = Math.ceil(Math.random()*5);
    container[0].style.background = `url(../img/main_background${random_number}.jpg)`;
    container[0].style.backgroundPosition = `center`;
    container[0].style.backgroundRepeat = `no-repeat`;
    container[0].style.backgroundSize = '100%';
    main_desc.setAttribute("src",`../img/main_ment${random_number}.png`);
}


window.addEventListener("scroll",()=>{

    if(window.scrollY === container[1].offsetTop) {
        let delivery_man = document.querySelector(".delivery_man");
        delivery_man.style.top = '52%';
        delivery_man.style.left = '73%';
    }

    if(window.scrollY === container[2].offsetTop) {
        let three_man = document.querySelector(".three_man");
        three_man.style.transform = 'translate(0,0)';
    }

    if(window.scrollY === container[3].offsetTop) {
        let gift_man = document.querySelector(".gift_man");
        gift_man.style.transform = 'translate(0,0)';
    }

    if(window.scrollY === container[4].offsetTop) {
        let broadcast_man = document.querySelector(".broadcast_man");
        broadcast_man.style.transform = 'translate(0,0)';
    }

    if(window.scrollY === container[5].offsetTop) {
        let mart_man = document.querySelector(".mart_man");
        mart_man.style.transform = 'translateX(25%)';
        mart_man.style.opacity = '1';
    }

    if(window.scrollY === container[6].offsetTop) {
        let flag_man = document.querySelector(".flag_man");
        flag_man.style.transform = 'translateY(0%)';
    }

    list_dot.forEach(v=>{
        v.style.opacity = window.scrollY<container[1].offsetTop || window.scrollY>container[6].offsetTop ? "0" : "1";
    })

    header.style.opacity = window.scrollY>container[6].offsetTop ? "0" : "1";

    download_img2.style.opacity = window.scrollY>container[0].offsetTop ? "1" : "0";

    for(let i=0; i<list_dot.length; i++) {
        if(window.scrollY === container[i+1].offsetTop) {
            list_dot.forEach(v=>{
                v.setAttribute("src","../img/list_dot.png");
            })
            list_dot[i].setAttribute("src","../img/now_list_dot.png");
        }
    }
})

history.scrollRestoration = "manual";