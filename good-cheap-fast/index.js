let capsule = document.querySelectorAll(".capsule");
let ball = document.querySelectorAll(".ball");
const clickevent = new Event("click");
let nowsum = 0;
for (let i = 0; i < 3; i++) {
    capsule[i].addEventListener("click", () => {
        if (ball[i].classList[1]) {
            nowsum--;
            ball[i].classList.remove("move");
            capsule[i].classList.remove("capmove");
            return;
        }
        nowsum++;
        if (nowsum === 3) {
            capsule[(i + 2) % 3].dispatchEvent(clickevent);
        }
        ball[i].classList.add("move");
        capsule[i].classList.add("capmove");
    })
}