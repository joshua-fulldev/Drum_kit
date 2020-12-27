/*document.querySelectorAll("button").forEach(myFunction);

function myFunction(item) {
    item.addEventListener("click", () => {
        alert("hkle");
    })
}
*/

function PlayRespectiveAudio(music) {
    this.audio = new Audio("sounds/" + music);
    this.audio.play();

}

class PlayAudio {
    constructor(audio) {
        this.audio = new Audio("sounds/" + audio);
    }

    play() {
        this.audio.play();
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        var x = this.document.activeElement.innerHTML;


        switch (x) {
            case "w":
                var myPlayAudio = new PlayAudio("crash.mp3");
                myPlayAudio.play();
                break;

            case "a":
                var myPlayAudio = new PlayAudio("kick-bass.mp3");
                myPlayAudio.play();
                break;

            case "s":
                var myPlayAudio = new PlayAudio("snare.mp3");
                myPlayAudio.play();
                break;

            case "d":
                var myPlayAudio = new PlayAudio("tom-1.mp3");
                myPlayAudio.play();
                break;

            case "j":
                var myPlayAudio = new PlayAudio("tom-2.mp3");
                myPlayAudio.play();
                break;

            case "k":
                var myPlayAudio = new PlayAudio("tom-3.mp3");
                myPlayAudio.play();
                break;

            case "l":
                var myPlayAudio = new PlayAudio("tom-4.mp3");
                myPlayAudio.play();
                break;
        }
    })
}

document.addEventListener("keydown", function (event) {
    if (event.key === 'w') {
        var myPlayAudio = new PlayAudio("crash.mp3");
        myPlayAudio.play();
    }
    if (event.key === 'a') {
        var myPlayAudio = new PlayAudio("kick-bass.mp3");
        myPlayAudio.play();
    }
    if (event.key === 's') {
        var myPlayAudio = new PlayAudio("snare.mp3");
        myPlayAudio.play();
    }
    if (event.key === 'd') {
        var myPlayAudio = new PlayAudio("tom-1.mp3");
        myPlayAudio.play();
    }
    if (event.key === 'j') {
        var myPlayAudio = new PlayAudio("tom-2.mp3");
        myPlayAudio.play();
    }
    if (event.key === 'k') {
        var myPlayAudio = new PlayAudio("tom-3.mp3");
        myPlayAudio.play();
    }
    if (event.key === 'l') {
        var myPlayAudio = new PlayAudio("tom-4.mp3");
        myPlayAudio.play();
    }
})

/*
if (audio.paused === false) {
            audio.pause;
            audio.currentTime = 0;
        }
        audio.play();
*/
