const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');


let load = 0;


let int =  setInterval(blurring, 30)



function blurring(){
    load++

    if (load > 99){
        clearInterval(int)
    }

    // (We represent the inner value by using these special strings `)
    loadText.innerText = `${load}%` 
    loadText.style.opacity = scale(load, 0, 100, 1, 0) //for the text to fade out
    background.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`//for the image to fade in from 30 to 0
    console.log(load)
}







const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }