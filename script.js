/* script.js */

alert("Welcome to Pak E Store");

const games = [
{name:"GTA V",size:90},
{name:"RDR2",size:120},
{name:"Resident Evil Village",size:45},
{name:"Watch Dogs 2",size:40},
{name:"Hogwarts Legacy",size:80},
{name:"Spider Man 2",size:95},
{name:"Tekken 8",size:65},
{name:"Far Cry 6",size:70}
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

const advanceAmounts = {
320:1000,
500:1500,
1000:2500,
2000:5000
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

function toggleGame(index){

const game = games[index];

const exists = selectedGames.find(item => item.name === game.name);

if(exists){
selectedGames = selectedGames.filter(item => item.name !== game.name);
}else{
selectedGames.push(game);
}

updateAll();

}

function updateAll(){

const hdd = document.getElementById("hdd").value;
const type = document.getElementById("type").value;

const price = prices[hdd][type];

let totalSize = 0;

for(let i=0;i<selectedGames.length;i++){
totalSize += selectedGames[i].size;
}

const remain = freeSpace[hdd] - totalSize;

const advance = advanceAmounts[hdd];
const cod = price - advance;

document.getElementById("priceBox").innerHTML = `
Price: Rs ${price}<br>
Advance: Rs ${advance}<br>
Cash on Delivery: Rs ${cod}<br>
Selected Games Size: ${totalSize} GB<br>
Remaining Space: ${remain} GB
`;

let warning = "";

if(remain < 0){

if(hdd == 320) warning = "Selected HDD Full. Please choose 500 GB.";
if(hdd == 500) warning = "Selected HDD Full. Please choose 1 TB.";
if(hdd == 1000) warning = "Selected HDD Full. Please choose 2 TB.";
if(hdd == 2000) warning = "Too many games selected.";

}

document.getElementById("warning").innerHTML = warning;

}

function copyText(text){

navigator.clipboard.writeText(text);

alert("Copied Successfully");

}

function sendOrder(){

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();
const address = document.getElementById("address").value.trim();

if(name.length < 3){
alert("Please enter full name");
return;
}

if(phone.length < 11){
alert("Please enter valid mobile number");
return;
}

if(email.length < 5){
alert("Please enter valid email");
return;
}

if(address.length < 15){
alert("Please enter complete address");
return;
}

const hdd = document.getElementById("hdd").value;
const type = document.getElementById("type").value;

let totalSize = 0;

for(let i=0;i<selectedGames.length;i++){
totalSize += selectedGames[i].size;
}

if(totalSize > freeSpace[hdd]){

alert("Selected HDD full. Please choose bigger HDD.");

return;

}

const price = prices[hdd][type];
const advance = advanceAmounts[hdd];
const cod = price - advance;

let msg = "🛒 NEW ORDER RECEIVED%0A%0A";

msg += "👤 Customer: " + name + "%0A";
msg += "📱 Phone: " + phone + "%0A";
msg += "📧 Email: " + email + "%0A%0A";

msg += "📍 Address:%0A" + address + "%0A%0A";

msg += "💽 HDD: " + hdd + " GB " + type + "%0A";
msg += "💰 Total Price: Rs " + price + "%0A";
msg += "💵 Advance: Rs " + advance + "%0A";
msg += "🚚 Remaining COD: Rs " + cod + "%0A%0A";

msg += "🎮 Games:%0A";

for(let i=0;i<selectedGames.length;i++){
msg += (i+1) + ". " + selectedGames[i].name + " - " + selectedGames[i].size + "GB%0A";
}

msg += "%0A📸 Customer will send payment screenshot.";

window.open("https://wa.me/923262281245?text=" + msg,"_blank");

}

loadGames();
updateAll();
