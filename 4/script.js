
let tl=gsap.timeline();

tl.from(".nav",{
    opacity:0,
    delay:0.3,
    opacity:0,
})

tl.from(".nav h1,.nav li,.nav .signup,.nav img",{
    y:-50,
    duration:1,  
    opacity:0,
    stagger:.2,
})
tl.from(".left h1",{
    x:-50,
    opacity:0,
    duration:0.8,
    stagger:0.5,
})
tl.from(".right img",{
    scale:0.5,
    opacity:0,
    duration:0.5,
})




gsap.from(".page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 70%"
    }

})