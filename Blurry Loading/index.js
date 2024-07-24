var number=document.getElementsByClassName("number")[0];
var loading=document.getElementsByClassName("loading")[0];
var container=document.getElementsByClassName("container")[0];
var loadingBox=document.getElementsByClassName("loadingBox")[0];
var load=100;
var timer=null;
function setLoading(){
    load--;
    if(load<1){
        clearTimeout(timer);
        loadingBox.style.display="none"
    }else{
        timer=setTimeout(setLoading,10);
    }
    number.innerText=String(100-load);
    loading.value=100-load;
    container.style.filter=`blur(${load}px)`;
    console.log(load);
}

setLoading();