var root = document.querySelector(':root')

$(document).ready(function(){
    $('.navbar').css("display", 'flex').hide().fadeIn(1500)
    $('.navbarTitle').mouseenter(function(){
        var num = Math.floor(Math.random() * 2) // Random number from 0 - 20
        if (num == 0) {
            root.style.setProperty('--rotateAngle', '10deg')
        }
        else {
            root.style.setProperty('--rotateAngle', '-10deg')
        }
    })
})