
const sasuke = document.querySelector('.sasuke')
const sharingan = document.querySelector('.sharingan')

const jump = () => {
    sasuke.classList.add('jump')

    setTimeout(() => {  
        sasuke.classList.remove('jump')

    }, 500)
}

const loop = setInterval(() => {
    const sharinganPosition = sharingan.offsetLeft
    const sasukePosition = +window.getComputedStyle(sasuke).bottom.replace('px', '')

    console.log(sasukePosition)

    if (sharinganPosition <= 110 && sharinganPosition > 0 && sasukePosition < 80) {

        sharingan.style.animation = 'none'
        sharingan.style.left = `${sharinganPosition}px`

        sasuke.style.animation = 'none'
        sasuke.style.left = `${sasukePosition}px`
    }

}, 10) 

document.addEventListener('keydown', jump)
