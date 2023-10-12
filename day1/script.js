gsap.to('#box',{
    x:700,
    duration:2,
    delay:1,
    backgroundColor:'blue',
    rotate:360,
    scale:0.5
})
gsap.from('#box',{
    x:700,
    duration:2,
    delay:1,
    backgroundColor:'blue',
    rotate:360,
    scale:0.5
})


gsap.to('h1',{
    x:600,
    color:'red',
    delay:0.5,
    // stagger:1,
    repeat:-1,
    yoyo:true
})

var tl = gsap.timeline()

tl.to('h1',{
    x:400,
    color:'orange',
    duration:1
})
tl.to('h2',{
    x:400,
    color:'blue',
    duration:1
})
tl.to('h3',{
    x:400,
    color:'green',
    duration:1
})