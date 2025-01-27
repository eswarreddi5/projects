var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timerunning') 
let timeRunning = 3000 
let timeAutoNext = 7000
nextBtn.onclick = function(){
    showSlider('next')
}
prevBtn.onclick = function(){
    showSlider('prev')
}
let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)
function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight 
    runningTime.style.animation = 'runningtime 7s linear 1 forwards'
}
function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type==="next"){
        list.appendChild(sliderItemsDom[0])
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length-1])
    }
    clearInterval(runNextAuto)
    runNextAuto = setTimeout(()=>{
        nextBtn.click()
    },timeAutoNext)

    resetTimeAnimation()
}


