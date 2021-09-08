document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

document.body.addEventListener("click", (event) => {
    console.log(event.target);
  });

function playSound(sound) {
  let audioElemnt = document.querySelector(`#s_${sound}`);
  let keyElemnt = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElemnt) {
    audioElemnt.currentTime = 0;
    audioElemnt.play();
  }
  if (keyElemnt) {
    keyElemnt.classList.add("active");

    setTimeout(() => {
      keyElemnt.classList.remove("active");
    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250;
  }
}
