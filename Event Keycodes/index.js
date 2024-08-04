let navbox = document.querySelector(".nav");
window.addEventListener("keydown", (event) => {
    navbox.innerHTML = "";
    let ButtonList = [];
    for (let i = 0; i < 2; i++) {
        ButtonList.push(document.createElement("button"));
    }
    ButtonList[0].innerText = "event.key:" + event.key;
    ButtonList[1].innerText = "event.keyCode:" + event.keyCode
    ButtonList.forEach(Element => {
        navbox.appendChild(Element)
    })
})