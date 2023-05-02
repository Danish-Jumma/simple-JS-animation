window.onscroll = function(){
    let animatedImade = document.getElementById('animated-imade');
    let value = window.pageYOffset;
    animatedImade.style.top = value +'px';
    animatedImade.style.top = value -'px';
    console.log(value);
}