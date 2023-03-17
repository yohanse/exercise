var buttons = document.getElementsByTagName("button");
var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"]

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        var audio = new Audio(`sounds/${sounds[i]}`);
        audio.play()
    });
}

