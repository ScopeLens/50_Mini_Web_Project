var box = document.getElementsByClassName("box");
const loading = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("middleaside")
        }
        else {
            entry.target.classList.remove("middleaside")
        }
    });
}
const observer = new IntersectionObserver(loading)

for (let i = 0; i < box.length; i++) {
    if (i % 2) {
        box[i].classList.add("leftaside")
    }
    else {
        box[i].classList.add("rightaside")
    }
    observer.observe(box[i]);
}
