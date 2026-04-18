alert("Welcome to Pak Games Store");

const games = [
{name:"GTA V",size:90},
{name:"RDR2",size:120},
{name:"Resident Evil Village",size:45},
{name:"Watch Dogs 2",size:40},
{name:"Hogwarts Legacy",size:80},
{name:"Spider Man 2",size:95},
{name:"Tekken 8",size:65}
];

const prices = {
320:{portable:6500,internal:5000},
500:{portable:8000,internal:6500},
1000:{portable:18500,internal:16500},
2000:{portable:33500,internal:31500}
};

const freeSpace = {
320:290,
500:450,
1000:930,
2000:1830
};

let selectedGames = [];

function loadGames(){

let html = "";

for(let i=0;i<games.length;i++){

html += `
<div class="game">
<label>
<input type="checkbox" onchange="toggleGame(${i})">
${games[i].name} - ${games[i].size} GB
</label>
</div>
`;

}

document.getElementById("gamesList").innerHTML = html;
}

function toggleGame(i){

let game = games[i];

let found = selectedGames.find(g=>g.name===game.name);

if(found){
selectedGames = selectedGames.filter(g=>g.name!==game.name);
}else{
selectedGames.push(game);
}

updateAll();
}

function updateAll(){

let hdd = document.getElementById("hdd").value;
let type = document.getElementById("type").value;

let price = prices[hdd][type];

let total = 0;

for(let i=0;i<selectedGames.length;i++){
total += selectedGames[i].size;
}

let remain = freeSpace[hdd] - total;

document.getElementById("priceBox").innerHTML =
"Price: Rs " + price +
"<br>Selected Games Size: " + total + " GB" +
"<br>Remaining Space: " + remain + " GB";

let warning = "";

if(remain < 0){

warning = "Selected HDD Full! ";

if(hdd == 320) warning += "Choose 500 GB";
if(hdd == 500) warning += "Choose 1 TB";
if(hdd == 1000) warning += "Choose 2 TB";
if(hdd == 2000) warning += "Too many games selected";

}

document.getElementById("warning").innerHTML = warning;
}

function sendOrder(){

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let address = document.getElementById("address").value.trim();

if(name.length < 3){
alert("Enter Full Name");
return;
}

if(phone.length < 11){
alert("Enter Valid Phone Number");
return;
}

if(address.length < 15){
alert("Enter Complete Address");
return;
}

let hdd = document.getElementById("hdd").value;
let type = document.getElementById("type").value;
let price = prices[hdd][type];

let total = 0;

for(let i=0;i<selectedGames.length;i++){
total += selectedGames[i].size;
}

if(total > freeSpace[hdd]){
alert("Selected HDD Full. Please choose bigger HDD.");
return;
}

let msg = "New Order%0A";
msg += "Name: " + name + "%0A";
msg += "Phone: " + phone + "%0A";
msg += "Address: " + address + "%0A";
msg += "HDD: " + hdd + " GB%0A";
msg += "Type: " + type + "%0A";
msg += "Price: Rs " + price + "%0A";
msg += "Games:%0A";

for(let i=0;i<selectedGames.length;i++){
msg += selectedGames[i].name + " - " + selectedGames[i].size + "GB%0A";
}

window.open("https://wa.me/923262281245?text=" + msg);
}

loadGames();
updateAll();
