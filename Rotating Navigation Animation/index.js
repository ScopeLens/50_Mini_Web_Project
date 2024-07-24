var change=document.getElementsByClassName("change")[0];
var icon=document.querySelector(".change .iconfont")
var page_content=document.getElementsByClassName("page-content")[0];
var list=document.getElementsByTagName("li")
var state=0;
change.addEventListener("click",()=>{
    if(state==1){
        icon.classList="iconfont icon-menu"
        page_content.classList.remove("content-active");
        Array.from(list).forEach((item)=>{
            item.classList.remove("movetoright");
        });
        state=0;
    }
    else{
        icon.classList="iconfont icon-a-close1"
        page_content.classList.add("content-active");
        setTimeout(()=>{
            Array.from(list).forEach((item)=>{
                item.classList.add("movetoright");
            });
        },300)
        state=1;
    }
})