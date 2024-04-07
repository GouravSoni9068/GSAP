let tl=gsap.timeline();
let time=()=>{
    let loader=document.querySelector(".loader").querySelector("h1");

    let i=0;
    setInterval(() => {
        i+=Math.floor(Math.random()*20)
        if(i<100)
        {
            loader.innerHTML=i+"%";
        }
        else{
            i=100;
            loader.innerHTML=i+"%";
        }
    }, 100);
}   
// time();

tl.to(".loader h1",{
    duration:2,
    onStart:time(),
})

tl.to(".loader",{
    top:"-100%",
    duration:2,
})



tl.to(".page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -40%",
        scrub:2, 
        pin:true,
    }

})
