let nav = document.querySelector(".nav");
let musicplayer = document.querySelector("audio");
let musiclist = ["applause", "boo", "gasp", "tade", "victory", "wrong"]

for (let i = 0; i < 6; i++) {
    let musicbutton = document.createElement("button");
    musicbutton.innerText = musiclist[i];
    nav.appendChild(musicbutton);
    musicbutton.addEventListener("click", () => {
        musicplayer.src = `./audio/${musiclist[i]}.mp3`;
        musicplayer.play()
    })
}