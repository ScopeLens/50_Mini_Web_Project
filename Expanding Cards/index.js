window.onload=function(){
    var banner=document.getElementsByClassName("banner");
    var nowindex=0;
    console.log(banner)
    for(let i=0;i<banner.length;i++){
        banner[i].addEventListener("click",()=>{
            console.log(banner[i])
            banner[nowindex].classList.remove("max-banner")
            banner[i].classList.add("max-banner")
            nowindex=i;
        })
    }
}