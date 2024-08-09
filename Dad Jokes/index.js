let span = document.querySelector(".screen span");
let button = document.getElementsByTagName("button");

async function getJoke(el) {
    let res = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: 'application/json',
        }
    })
    let data = await res.json();
    el.innerText = data.joke;
}
button[0].addEventListener("click", () => {
    getJoke(span);
})
button[0].dispatchEvent(new Event("click"));
