var previousButton=document.getElementsByClassName("previous")[0];
var nextButton=document.getElementsByClassName("next")[0];
var list=document.getElementsByTagName("li");
var line=document.getElementsByClassName("line")[0];
var activeIndex=1;

nextButton.onclick=function(){
    if(activeIndex<4)activeIndex++;
    if(activeIndex==2)previousButton.classList.add("buttonActive")
    if(activeIndex==4)nextButton.classList.remove("buttonActive")
    list[activeIndex-1].classList.add("ballActive");
    line.style.width=(33.3*(activeIndex-1))+"%"
}

previousButton.onclick=function(){
    list[activeIndex-1].classList.remove("ballActive");
    if(activeIndex>1)activeIndex--;
    console.log(activeIndex)
    if(activeIndex==3)nextButton.classList.add("buttonActive")
    if(activeIndex==1)previousButton.classList.remove("buttonActive")
    line.style.width=(33.3*(activeIndex-1))+"%"
}