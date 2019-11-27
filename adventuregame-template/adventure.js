var background = {};
var title = document.getElementById("title").innerHTML;
var txt = title.replace("Plaats hier de titel van het level","The boomer life");
document.getElementById("title").innerHTML = txt;

var description = document.getElementById("description").innerHTML;
var txt = description.replace("Plaats hier het verhaal van het level","Epic bruh moment");
document.getElementById("description").innerHTML = txt;

document.onload = document.body.style.backgroundImage = "url('mainbackground.jpg')"

document.getElementById("inventoryItem").style.display = "none";