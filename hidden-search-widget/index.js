var icon=document.querySelector(".search i");
var input=document.querySelector(".search input")
icon.addEventListener("click",()=>{
    input.classList.toggle("inputactive");
})