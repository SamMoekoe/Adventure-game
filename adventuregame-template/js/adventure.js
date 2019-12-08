var background = {};
var title = document.getElementById("title");
var desc = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameButtons = document.getElementById("game-buttons");
var inventoryItem = document.getElementById("InventoryItem")


function buttonReset(){
	button1.style.removeProperty("display")
	button2.style.removeProperty("display")
	button3.style.removeProperty("display")
}

function start() {
    buttonReset();
    title.innerHTML = "The classic dungeon crawler";
    desc.innerHTML = "This is an pick your own adventure game. You will get 3 or less options to chose from that will impact your story so choose wisely." ;
    background = document.onload = document.body.style.backgroundImage = "url('css/Start.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "START";
    button1.setAttribute("onclick", "Entrance()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

function Entrance() {
    buttonReset();
    title.innerHTML = "The Entrance";
    desc.innerHTML = "You come across a old dungeon, you heard this dungeon holds alot of treasure, but noone has ever been able to get out alive after they went in. Will you risk your life to obtain its treasures or not?";
    background = document.onload = document.body.style.backgroundImage = "url('css/Entrance.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "Go into the dungeon";
    button1.setAttribute("onclick", "Enter()")
    button2.innerHTML = "Go back home";
    button2.setAttribute("onclick","Leave()")
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

function Enter(){
    buttonReset();
    title.innerHTML = "The inside";
    desc.innerHTML = "You decide to venture further into the dungeon and you come across a strange looking door and a pathway to the right and to the left. what do you do?";
    background = document.onload = document.body.style.backgroundImage = "url('css/Enter.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "Go to the left";
    button1.setAttribute("onclick", "Left1()")
    button2.innerHTML = "Walk up to the door";
    button2.setAttribute("onclick","Strange_door()")
    button3.innerHTML = "Go to the right";
    button3.setAttribute("onclick","Right1()")
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

function Left1(){
    buttonReset();
    title.innerHTML = "Trapped room";
    desc.innerHTML = "You decided it was a good idea to check the left corridor first so you go to the left and try to look for a way forward. You saw a open door and decided to check it out, sadly for you it was a trapped room which was set off by someone before you. You fall into a pit and you get impaled by spikes. <br><br> GAME OVER";
    background = document.onload = document.body.style.backgroundImage = "url('css/PitLoss.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "RETRY";
    button1.setAttribute("onclick", "location.reload()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

function Strange_door(){
    buttonReset();
    //var MagicBook = false
    title.innerHTML = "Strange Door";
    //if (MagicBook === false){
    //desc.innerHTML = "You walk up to the strange door. it gives off some scary vibes. You think you should step away cause you are not ready for this";
    //} else {
    desc.innerHTML = "You walk up to the strange door. It gives off scary vibes, but you are brave enough to open it."
    //}
    background = document.onload = document.body.style.backgroundImage = "url('css/Strange_door.png')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    //if (MagicBook === false){
    //button1.innerHTML = "Go back";
    //button1.setAttribute("onclick", "Enter()")
    //button2 = document.getElementById("button2").style.display = "none";
    //button3 = document.getElementById("button3").style.display = "none";
    //} else {
    button1.innerHTML = "You walk up to the door and open it";
    button1.setAttribute("onclick", "Behind_SDoor()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    //}
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

function Right1(){
    buttonReset();
    title.innerHTML = "Strange Altar";
    desc.innerHTML = "You go to the right and you find a strange altar that has a magic book on it.";
    background = document.onload = document.body.style.backgroundImage = "url('css/Altar.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "Grab the book and go back";
    button1.setAttribute("onclick", "Enter()")
    button2.innerHTML = "Go back";
    button2.setAttribute("onclick", "Enter()")
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}
function Behind_SDoor(){
    buttonReset();
    title.innerHTML = "More Corridors";
    desc.innerHTML = "You find more corridors. one to the left, one right ahead of you, and one to the right. which one do you chose.";
    background = document.onload = document.body.style.backgroundImage = "url('css/MoreCorridors.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "Go to the left";
    button1.setAttribute("onclick", "Left2()")
    button2.innerHTML = "Go straight";
    button2.setAttribute("onclick","Straight()")
    button3.innerHTML = "Go to the right";
    button3.setAttribute("onclick","Right2()")
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}
function Left2(){
    buttonReset();
    title.innerHTML = "Monster";
    desc.innerHTML = "You decide to walk to the left and you get slain by a nightmarish creature. <br> <br> GAME OVER";
    background = document.onload = document.body.style.backgroundImage = "url('css/Nightmarish_Creature.png')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "RETRY";
    button1.setAttribute("onclick", "location.reload()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}
function Straight(){
    buttonReset();
    title.innerHTML = "Boss";
    desc.innerHTML = "You walk straight and you find youself in a boss arena. I guess noone has cleared this dungeon cause the boss is there and he kills you. <br> <br>GAME OVER";
    background = document.onload = document.body.style.backgroundImage = "url('css/Boss.png')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "RETRY";
    button1.setAttribute("onclick", "location.reload()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}
function Right2(){
    buttonReset();
    title.innerHTML = "Treasure";
    desc.innerHTML = "You decide to walk to the right and to your surprise you find a giant gold chest full of jewels. You take it all with you home and you celebrate. <br> <br> You won!!!!";
    background = document.onload = document.body.style.backgroundImage = "url('css/Enter.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "PLAY AGAIN";
    button1.setAttribute("onclick", "location.reload()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}
function Leave(){
    buttonReset();
    title.innerHTML = "Scaredy cat";
    desc.innerHTML = "You decide this dungeon is way too scary for you and you just want to go home and lay in bed. <br> <br> Wow you actually just started the game and immediately gave up.";
    background = document.onload = document.body.style.backgroundImage = "url('css/Enter.jpg')"

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.innerHTML = "Go retry little Scaredy cat";
    button1.setAttribute("onclick", "location.reload()")
    button2 = document.getElementById("button2").style.display = "none";
    button3 = document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.onload = console.log(title)
}

start()