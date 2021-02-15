function textAppear(){
    var introText = document.querySelector('.intro-text');
    var pos = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(pos< screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',textAppear);
