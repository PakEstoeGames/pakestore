/* script.js FINAL - No Browser Alert */

const games = [
{name:"Grand Theft Auto 5 Legacy with Pakistani Modes",size:150},
{name:"Grand Theft Auto IV",size:35},
{name:"Grand Theft Auto: Vice City Definitive Edition",size:20},
{name:"Grand Theft Auto San Andreas Definitive Edition",size:30},
{name:"Grand Theft Auto III Definitive Edition",size:20},
{name:"Grand Theft Auto V Enhanced",size:120},
{name:"Grand Theft Auto 5 Legacy",size:130},
{name:"Red Dead Redemption",size:20},
{name:"Red Dead Redemption 2",size:130},
{name:"Resident Evil Requiem",size:100},
{name:"Resident Evil Village",size:50},
{name:"RESIDENT EVIL 7 biohazard",size:75},
{name:"Resident Evil 6",size:30},
{name:"Resident Evil 5",size:20},
{name:"Resident Evil 4 Remake",size:80},
{name:"Resident Evil 3",size:35},
{name:"Resident Evil 2",size:30},
{name:"Resident Evil 1",size:25},
{name:"Samson",size:25},
{name:"BeamNG.drive",size:35},
{name:"Palworld",size:35},
{name:"The Last of Us Part II Remastered",size:125},
{name:"The Last of Us Part I",size:100},
{name:"Days Gone",size:70},
{name:"Cyberpunk 2077",size:170},
{name:"Starfield",size:180},
{name:"No Man's Sky",size:35},
{name:"Marvels Spider Man 2",size:135},
{name:"Marvel’s Spider-Man Remastered",size:90},
{name:"Marvel’s Spider-Man Miles Morales",size:70},
{name:"Marvel's Avengers - The Definitive Edition",size:120},
{name:"LEGO MARVEL Super Heroes 2",size:35},
{name:"LEGO MARVEL’s Avengers",size:25},
{name:"Microsoft Flight Simulator",size:180},
{name:"Horizon Zero Dawn",size:90},
{name:"Horizon Zero Dawn Remastered",size:125},
{name:"God of War Ragnarök",size:135},
{name:"God of War",size:80},
{name:"UNCHARTED Legacy of Thieves Collection",size:120},
{name:"Tom Clancy’s Ghost Recon Wildlands",size:85},
{name:"Tom Clancy’s Splinter Cell Blacklist",size:30},
{name:"PAYDAY 3",size:60},
{name:"Payday 2",size:70},
{name:"Gas Station Simulator",size:25},
{name:"Supermarket Simulator",size:10},
{name:"PC Building Simulator",size:20},
{name:"PC Building Simulator 2",size:20},
{name:"Crime Simulator",size:20},
{name:"Thief Simulator",size:20},
{name:"Thief Simulator 2",size:20},
{name:"PowerWash Simulator 2",size:20},
{name:"PowerWash Simulator",size:20},
{name:"Contraband Police",size:20},
{name:"Police Simulator Patrol Officers",size:20},
{name:"Cooking Simulator",size:20},
{name:"Raft",size:20},
{name:"Human Fall Flat",size:20},
{name:"Cricket 26",size:90},
{name:"WWE 2K19",size:65},
{name:"WWE 2K25",size:120},
{name:"The Crew 2",size:40},
{name:"The Crew",size:30},
{name:"Hogwarts Legacy",size:85},
{name:"Cities Skylines II",size:190},
{name:"Cities Skylines",size:20},
{name:"Farming Simulator 25 with Modes",size:45},
{name:"Farming Simulator 22",size:35},
{name:"Farming Simulator 19",size:20},
{name:"Euro Truck Simulator 2",size:45},
{name:"American Truck Simulator",size:35},
{name:"City Bus Simulator 2024",size:20},
{name:"Bus Simulator 21 Next Stop",size:20},
{name:"Car For Sale Simulator 2023",size:10},
{name:"Car Dealership Simulator 2",size:10},
{name:"Car Dealer Simulator",size:25},
{name:"Car Mechanic Simulator 2021",size:35},
{name:"RoadCraft",size:80},
{name:"Snowrunner",size:65},
{name:"Expeditions A MudRunner Game",size:40},
{name:"Webbed",size:135},
{name:"TEKKEN 7",size:70},
{name:"TEKKEN 8",size:140},
{name:"FIFA 22",size:80},
{name:"FIFA 21",size:75},
{name:"FIFA 20",size:70},
{name:"The Witcher 3",size:70},
{name:"The Witcher 2",size:25},
{name:"The Witcher Enhanced Edition",size:20},
{name:"Forza Motorsport",size:150},
{name:"Forza Horizon 5",size:190},
{name:"Forza Horizon 4",size:120},
{name:"Forza Horizon 3",size:85},
{name:"Call of Duty: Black Ops Cold War",size:240},
{name:"Call of Duty: Black Ops 6",size:70},
{name:"Call of Duty Black Ops III",size:130},
{name:"Call of Duty Black Ops II",size:35},
{name:"Call of Duty: Modern Warfare III",size:200},
{name:"Call of Duty: Modern Warfare II",size:110},
{name:"Call of Duty Modern Warfare Remastered 2017",size:70},
{name:"Far Cry 6",size:165},
{name:"Far Cry 5",size:120},
{name:"Far Cry 4",size:45},
{name:"Far Cry 3",size:20},
{name:"Far Cry Primal",size:35},
{name:"Watch Dogs Legion",size:125},
{name:"Watch Dogs 2",size:45},
{name:"Watch Dogs",size:35},
{name:"HITMAN 3",size:90},
{name:"HITMAN 2",size:175},
{name:"Hitman",size:85},
{name:"Assassin's Creed Valhalla",size:170},
{name:"Assassin's Creed Odyssey",size:110},
{name:"Assassin's Creed Mirage",size:80},
{name:"Assassin's Creed Origins",size:75},
{name:"Assassin's Creed Unity",size:60},
{name:"Assassin's Creed Syndicate",size:70},
{name:"Assassin's Creed Revelations",size:20},
{name:"Assassin's Creed IV Black Flag",size:40},
{name:"Assassin's Creed Rogue",size:20},
{name:"Assassin's Creed Brotherhood",size:20},
{name:"Assassin's Creed III",size:40},
{name:"Assassin's Creed II",size:20},
{name:"Assassin's Creed",size:20},
{name:"Battlefield 6",size:120},
{name:"Battlefield V",size:70},
{name:"Battlefield 4",size:75},
{name:"Battlefield: Bad Company 2",size:20},
{name:"Battlefield 1",size:70},
{name:"Need for Speed Hot Pursuit Remastered",size:45},
{name:"Need for Speed Rivals",size:20},
{name:"Need for Speed Payback",size:30},
{name:"Need For Speed The Run",size:20},
{name:"Need For Speed Heat",size:40},
{name:"Need for Speed Most Wanted",size:20},
{name:"Need For Speed Hot Pursuit",size:20},
{name:"Shadow of the Tomb Raider",size:70},
{name:"Rise of the Tomb Raider",size:35},
{name:"Tomb Raider: Underworld",size:20},
{name:"Tomb Raider",size:30},
{name:"Mafia III",size:70},
{name:"Mafia II",size:20},
{name:"Mafia: Definitive Edition",size:45},
{name:"Mafia",size:20},
{name:"Batman Arkham Knight",size:80},
{name:"Batman - The Telltale Series",size:70},
{name:"Gotham Knights",size:65},
{name:"Batman Arkham Asylum",size:20},
{name:"Batman Arkham Origins",size:25},
{name:"Batman Arkham City",size:25},
{name:"DOOM: The Dark Ages",size:100},
{name:"DOOM Eternal",size:110},
{name:"DOOM",size:70},
{name:"Mortal Kombat 11",size:180},
{name:"Mortal Kombat X",size:50},
{name:"Mortal Kombat Komplete Edition",size:20},
{name:"Mortal Kombat: Legacy Kollection",size:20},
{name:"Mortal Sin",size:20},
{name:"Ghost Of Tsushima",size:70}
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
320:500,
500:1500,
1000:5000,
2000:10000
};

let selectedGames = [];

/* Custom Popup */

function showPopup(text){
document.getElementById("popupText").innerText = text;
document.getElementById("popup").style.display = "flex";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}

/* On Load */

window.onload = function(){
loadGames();
updateAll();
showPopup("Welcome to Pak E Store");
};

/* Load Games */

function loadGames(){

let html = "";

for(let i=0;i<games.length;i++){

html += `
<div class="game">
<label class="gameRow">
<span>${games[i].name} - ${games[i].size} GB</span>
<input type="checkbox" onchange="toggleGame(${i})">
</label>
</div>
`;

}

document.getElementById("gamesList").innerHTML = html;

}

/* Select Game */

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

/* Update Price */

function updateAll(){

const hdd = document.getElementById("hdd").value;
const type = document.getElementById("type").value;

const price = prices[hdd][type];

let totalSize = 0;

for(let i=0;i<selectedGames.length;i++){
totalSize += selectedGames[i].size;
}

const remain = freeSpace[hdd] - totalSize;

document.getElementById("priceBox").innerHTML = `
Price: Rs ${price}<br>
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

document.getElementById("warning").innerText = warning;

}

/* Copy */

function copyText(text,type){

navigator.clipboard.writeText(text);

if(type=="account"){
showPopup("Account Number Copied Successfully");
}

if(type=="iban"){
showPopup("IBAN Copied Successfully");
}

}

/* Order */

function sendOrder(){

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const email = document.getElementById("email").value.trim();
const address = document.getElementById("address").value.trim();

if(name.length < 3){
showPopup("Please Enter Full Name");
return;
}

if(phone.length < 11){
showPopup("Please Enter Valid Mobile Number");
return;
}

if(email.length < 5){
showPopup("Please Enter Valid Email");
return;
}

if(address.length < 15){
showPopup("Please Enter Complete Address");
return;
}

const hdd = document.getElementById("hdd").value;
const type = document.getElementById("type").value;

let totalSize = 0;

for(let i=0;i<selectedGames.length;i++){
totalSize += selectedGames[i].size;
}

if(totalSize > freeSpace[hdd]){
showPopup("Selected HDD Full. Please Choose Bigger HDD");
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
msg += "🚚 Cash on Delivery: Rs " + cod + "%0A%0A";

msg += "🎮 Games:%0A";

for(let i=0;i<selectedGames.length;i++){
msg += (i+1) + ". " + selectedGames[i].name + " - " + selectedGames[i].size + "GB%0A";
}

window.open("https://wa.me/923262281245?text=" + msg,"_blank");

}
