gsap.from(".page1 .box",{
    opacity:0,
    duration:1,
    scale:0,
    delay:1,
    rotate:360,
})
gsap.from(".page2 .box",{
    opacity:0,
    scale:0,
    duration:1,
    rotate:360,
    
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})