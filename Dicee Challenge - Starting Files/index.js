var player1 = Math.random() * 6 + 1;
var player2 = Math.random() * 6 + 1;

player1 = Math.floor(player1);
player2 = Math.floor(player2);

if(player1 > player2){
    document.querySelector("h1").textContent = "the winner is player 1";
}

else if (player2 > player1){
    document.querySelector("h1").textContent = "the winner is player 2";
}

else{
    document.querySelector("h1").textContent = "equal"
}

document.querySelector(".img1").setAttribute("src", `dice${player1}.png`);
document.querySelector(".img2").setAttribute("src", `dice${player2}.png`);