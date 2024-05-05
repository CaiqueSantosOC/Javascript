
const sasuke = document.querySelector('.sasuke')

const jump = () => {
    sasuke.classList.add('jump')

    setTimeout(() => {
        sasuke.classList.remove('jump')

    }, 500)
}

document.addEventListener('keydown', jump)
