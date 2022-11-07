var root = document.querySelector(':root')

$(document).ready(function(){
    var fontChoice = Math.floor(Math.random() * 3)
    if (fontChoice == 0) {
        root.style.setProperty('--nameFont', 'Xanh Mono').setProperty('--nameType', 'monospace').setProperty('--nameFontWeight', 400)
    }
    else if (fontChoice == 1) {
        root.style.setProperty('--nameFont', 'Oswald').setProperty('--nameType', 'sans-serif').setProperty('--nameFontWeight', 700)
    }

    $('.navbarTitle').mouseenter(function(){
        var num = Math.floor(Math.random() * 2) // Random number from 0 - 1
        if (num == 0) {
            root.style.setProperty('--rotateAngle', '10deg')
        }
        else {
            root.style.setProperty('--rotateAngle', '-10deg')
        }
    })
})