let passwordinput = document.querySelector("#password");
let bgimg = document.querySelector(".bgimg");
passwordinput.addEventListener("input", () => {
    let result = 20 - passwordinput.value.length;
    console.log(result)
    bgimg.style.filter = `blur(${result}px)`
})