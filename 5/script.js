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

gsap.from(".page2 .box",{
    scale:0,
    opacity:0,
    duration:2,
    stagger: 0.3,

    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"top 0%",
    }
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
