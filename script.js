TweenMax.from('.nav-left-column ',1.5,{
    delay:0.5,
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
});


TweenMax.from('.logo-center ',1.5,{
    delay:1,
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
});


TweenMax.from('.nav-right',1.5,{
    delay:1.5,
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
});


TweenMax.staggerFrom('.social-media span',1.5,{
    delay:2,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut,
},0.5);



TweenMax.staggerFrom('.justDoIt span',1.5,{
    delay:1.5,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut,
},0.3);


TweenMax.from('.img-shoes ',1.5,{
    opacity:0,
    delay:1.5, 
    ease: Expo.easeInOut,
});

TweenMax.staggerFrom('.changeShoes span',1.5,{
    delay:1.5,
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
},0.2);

TweenMax.staggerFrom('.container-button button',1.5,{
    delay:1.8,
    opacity:0,
    y:-20,
    ease: Expo.easeInOut,
},0.7);

TweenMax.from('.lil-title h2 ',1.5,{
    opacity:0,
    x:-20,
    delay:1.5, 
    ease: Expo.easeInOut,
});

TweenMax.from('.lil-title h3 ',1.5,{
    opacity:0,
    x:-20,
    delay:1.9, 
    ease: Expo.easeInOut,
});