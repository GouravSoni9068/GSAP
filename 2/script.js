let tl=gsap.timeline();


tl.from(".nav>img,.nav ul li,.nav .login,.nav .btn" ,{
    y:-50,
    duration:1,
    delay:1,
    opacity:0,
    stagger: 0.2,
    
})


tl.from("h1",{
    y:100, 
    duration:.5,
    opacity:0,
    stagger: 0.2,


})


tl.from(".rightImg,.leftImg",{
    scale:0,
    opacity:0,
    duration:.3,
    stagger:.3,
})

tl.from(".scrollDown",{
    opacity:0,
    scale:0,
})
tl.to(".scrollDown",{
    y:10,
    repeat:-1,
    duration:.4,
    yoyo:true,
})

