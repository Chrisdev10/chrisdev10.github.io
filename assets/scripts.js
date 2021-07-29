//  INIT AOS MODULE
AOS.init({
    duration: 1000,
    once : true
});
/////////////////////////

/////////////////////// NAVBAR SHRINK

window.addEventListener("scroll", ()=>{
    if(scrollY == 0){
        $("#navMain").fadeIn();
    }else{
        $("#navMain").fadeOut();
    }
    if(sc)
    console.log(window.scrollY);
})
