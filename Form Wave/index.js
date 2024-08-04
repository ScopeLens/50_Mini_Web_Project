let targetStr = ["Email", "PassWord"];
let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");

function insertString(str, target) {
    let StrArr = str.split("");
    let i = 0;
    StrArr.forEach(Element => {
        let el = document.createElement("span")
        el.style.transitionDelay = 0.1 * i + "s";
        el.innerText = Element;
        target.appendChild(el);
        i++;
    })
}
for (let i = 0; i < 2; i++) {
    insertString(targetStr[i], label[i]);
    input[i].addEventListener("focus", () => {
        let list = [...label[i].getElementsByTagName("span")];
        list.forEach(Element => {
            Element.classList.add("move");
        })
    })
    input[i].addEventListener("blur", () => {
        let list = [...label[i].getElementsByTagName("span")];
        list.forEach(Element => {
            Element.classList.remove("move");
        })
    })
}
