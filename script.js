alert("Welcome to Pak Games Store");

const games = [
{name:"GTA V", size:90},
{name:"RDR2", size:120},
{name:"Resident Evil Village", size:45},
{name:"Watch Dogs 2", size:40},
{name:"Hogwarts Legacy", size:80},
{name:"Spider Man 2", size:95}
];

const prices = {
320:{portable:6500, internal:5000},
500:{portable:8000, internal:6500},
1000:{portable:18500, internal:16500},
2000:{portable:33500, internal:31500}
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

games.forEach((game,index)=>{

html += `
<div class="game">
<input type="checkbox" onchange="toggleGame(${index})">
${game.name} - ${game.size} GB
</div>
`;

});

document.getElementById("gamesList").innerHTML = html;
}

function toggleGame(index){

let game = games[index];

if(selectedGames.includes(game)){
selectedGames = selectedGames.filter(g => g !== game);
}else{
selectedGames.push(game);
}

updatePrice();
}

function updatePrice(){

let hdd = document.getElementById("hdd").value;
let type = document.getElementById("type").value;

let price = prices[hdd][type];

let totalSize = 0;

selectedGames.forEach(game=>{
totalSize += game.size;
});

let remain = freeSpace[hdd] - totalSize;

document.getElementById("priceBox").innerHTML = `
Price: Rs ${price}<br>
Used Space: ${totalSize} GB<br>
Remaining Space: ${remain} GB
`;
}

function sendOrder(){

let hdd = document.getElementById("hdd").value;
let type = document.getElementById("type").value;
let price = prices[hdd][type];

let msg = "New Order%0A";
msg += "HDD: " + hdd + " GB%0A";
msg += "Type: " + type + "%0A";
msg += "Price: Rs " + price + "%0A";
msg += "Games:%0A";

selectedGames.forEach(game=>{
msg += game.name + " - " + game.size + "GB%0A";
});

window.open("https://wa.me/923262281245?text=" + msg);
}

loadGames();
updatePrice();
