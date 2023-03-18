var color = [];
var num_relate = {1:"green", 2:"red", 3:"yellow", 4:"blue"};
var count = 0;
var level = 0;
var check = false;

function setup_next(){
    var random_color = Math.floor(Math.random() * 4 + 1);
    var class_random = num_relate[random_color];

    color.push(class_random);
    $("." + class_random).addClass("next");
    make_sound(`sounds/${class_random}.mp3`);
    setTimeout(function(){
        $("." + class_random).removeClass("next");
        }, 200);
    $("h1").text("Level " + (level + 1));
    level += 1;
}

document.addEventListener("keydown", function(){
            if(check === false && color.length === 0){
                check = true;
                setup_next();
            }
});


function make_sound(key){
    var audio = new Audio(key);
    audio.play();
}

$("button").click(function(){
    if (check){
        var class_name = this.classList;

        class_name.add("pressed");
            setTimeout(function(){
                class_name.remove("pressed");
            }, 200);
      
        make_sound(`sounds/${class_name[0]}.mp3`);
        setTimeout(make_move, 400);

        function make_move(){
            if(color.length !== 0 && class_name[0] !== color[count]){
                $("h1").text("game over");
                make_sound("sounds/wrong.mp3");
                check = false;
            }

            else if(level === (count + 1)){
                setup_next();
                count = -1;

            }     
            count += 1
        }
    }
});