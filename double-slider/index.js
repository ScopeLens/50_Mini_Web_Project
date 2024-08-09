let aside = document.querySelectorAll(".left-aside div");
let img = document.querySelectorAll(".right-img img");
let button = document.querySelectorAll("button");
let leftindex = 0;
let rightindex = 3;
let clickevent = new Event("click")
button[0].addEventListener("click", () => {
    if (leftindex > 0) {
        leftindex--;
        aside[leftindex].classList.remove("ToDown");
        aside[leftindex].style.color = randomcolor()
        img[rightindex].classList.add("ToDown");
        rightindex++;
    }
    else {
        doThree(() => {
            button[1].dispatchEvent(clickevent);
        })
    }
})
button[1].addEventListener("click", () => {
    if (leftindex < 3) {
        rightindex--;
        aside[leftindex].classList.add("ToDown");
        img[rightindex].classList.remove("ToDown");
        leftindex++;
        aside[leftindex].style.color = randomcolor()
    }
    else {
        doThree(() => {
            button[0].dispatchEvent(clickevent);
        })
    }
})
function doThree(Do) {
    for (let i = 0; i < 3; i++) {
        Do();
    }
}
function randomcolor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}