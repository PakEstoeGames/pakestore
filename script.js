const games = [
{name:"GTA V", size:90},
{name:"RDR2", size:120},
{name:"Resident Evil Village", size:45},
{name:"Watch Dogs 2", size:40},
{name:"Hogwarts Legacy", size:80}
];

const prices = {
320:{portable:6500, internal:5000},
500:{portable:8000, internal:6500},
1000:{portable:18500, internal:16500}
2000:{portable:33500, internal:31500}
};

const freeSpace = {
160:145,
320:290,
500:450,
1000:930
2000:1830
};

let selectedGames = [];

function loadGames(){
let html = "";

games.forEach((game,i)=>{
html += `
<div class="game">
<input type="checkbox" onchange="toggleGame(${i})">
${game.name} - ${game.size}GB
</div>
`;
});

document.getElementById("gamesList").innerHTML = html;
}

function toggleGame(i){
let game = games[i];

if(selectedGames.includes(game)){
selectedGames =
selectedGames.filter(g=>g!=game);
}else{
selectedGames.push(game);
}

updatePrice();
}

function updatePrice(){
let hdd =
document.getElementById("hdd").value;

let type =
document.getElementById("type").value;

let price =
prices[hdd][type];

let totalSize = 0;

selectedGames.forEach(g=>{
totalSize += g.size;
});

let remain =
freeSpace[hdd] - totalSize;

document.getElementById("price").innerHTML =
`
Price: Rs ${price}<br>
Used Space: ${totalSize}GB<br>
Remaining: ${remain}GB
`;
}

function sendOrder(){

let hdd =
document.getElementById("hdd").value;

let type =
document.getElementById("type").value;

let price =
prices[hdd][type];

let msg = "New Order%0A";

msg += "HDD: "+hdd+"GB%0A";
msg += "Type: "+type+"%0A";
msg += "Price: Rs "+price+"%0A";
msg += "Games:%0A";

selectedGames.forEach(g=>{
msg += g.name+" - "+g.size+"GB%0A";
});

window.open(
"https://wa.me/923001234567?text="+msg
);
}

loadGames();
updatePrice();
