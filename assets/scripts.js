//  INIT AOS MODULE
AOS.init({
    duration: 1000,
    once : true
});
/////////////////////////

/////////////////////// NAVBAR SHRINK

window.addEventListener("scroll", ()=>{
    if(scrollY < 150){
        $("#navMain").fadeIn("slow");
    }else{
        $("#navMain").fadeOut("slow");   
    }
    
})
