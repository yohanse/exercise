var buttons = document.getElementsByTagName("button");
var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
var num_relate = {"a":0, "s":1, "d":2, "w":3, "j":4, "k":5, "l":6};
var keys = ["a", "s", "d", "w", "j", "k", "l"];

function text(i){
    return "sounds/" + sounds[i];
}

function play_sound() {
    var inner = this.innerHTML;
    var a = num_relate[inner]; 
    var audio = new Audio(text(a));
    audio.play();
}

function play_sound_key(key) {
    var a = num_relate[key]; 
    var audio = new Audio(text(a));
    audio.play();
}

for(var i = 0; i < buttons.length; i++){
 
    buttons[i].addEventListener("click", play_sound);
}

document.addEventListener("keydown", (event) =>{
    for(var i = 0; i < keys.length; i++){
        if (keys[i] === event.key){
            play_sound_key(keys[i]);
            break;
        }
    }
})