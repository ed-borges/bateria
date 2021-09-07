document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
})

function playSound(sound) {
    let audioElemnt = document.querySelector(`#s_${sound}`);
    let keyElemnt = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElemnt) {
        audioElemnt.currentTime = 0;
        audioElemnt.play();
    }
    if (keyElemnt) {
        keyElemnt.classList.add('active');

        setTimeout(()=>{
            keyElemnt.classList.remove('active');
        }, 300)
    }
}