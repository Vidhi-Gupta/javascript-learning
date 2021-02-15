function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var dist = targetPos - startPos;
    var startTime = null;

    function animation(currentTime) {
        if(startTime == null) startTime = currentTime;
        console.log(startTime);
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPos,dist,duration);
        window.scrollTo(0,run); // 0 for x-axis
        if(timeElapsed< duration) requestAnimationFrame(animation);   
    }
    
    function ease(t,b,c,d){
        t /= d/2;
        if(t<1) return c/2 * t * t + b;
        t--;
        return -c /2 * (t*(t- 2)-1)+b;
    }
    requestAnimationFrame(animation);

}

var section1 = document.querySelector('.section1');
section1.addEventListener('click',function(){
    smoothScroll('.section2',1000);         // 1000ms for 1 s
})

var section2 = document.querySelector('.section2');
section2.addEventListener('click',function(){
    smoothScroll('.section1',1000);         // 1000ms for 1 s
})