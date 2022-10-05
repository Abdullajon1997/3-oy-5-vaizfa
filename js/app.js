const addition__inner = document.querySelector(".addition");
const addition__out = document.querySelector(".header__inner__nav__list__item__first");

let a=0;
addition__inner.addEventListener("click", () => {
    if(a==0) {
        addition__out.style.display = "none";
        a=1
    }else{
        addition__out.style.display = "block";
        a=0  
    }  
})

const second = document.querySelector(".second");
const second__inner = document.querySelector(".header__inner__nav__list__item__second");
let b=0;
second.addEventListener("click", () => {
    if(b==0) {
        second__inner.style.display = "none";
        b=1
    }else{
        second__inner.style.display = "block";
        b=0
    }
})

const three = document.querySelector(".three");
const three__inner = document.querySelector(".header__inner__nav__list");
let c=0;
three.addEventListener("click", () => {
    if(c==0) {
        three__inner.style.display = "none";
        c=1
    }else{
        three__inner.style.display = "block";
        c=0
    }
})