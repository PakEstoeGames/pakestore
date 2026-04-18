alert("Welcome to Pak Games Store");

const games = [
  { name: "GTA V", size: 90 },
  { name: "RDR2", size: 120 },
  { name: "Resident Evil Village", size: 45 },
  { name: "Watch Dogs 2", size: 40 },
  { name: "Hogwarts Legacy", size: 80 },
  { name: "Spider Man 2", size: 95 },
  { name: "Tekken 8", size: 65 },
  { name: "Far Cry 6", size: 70 }
];

const prices = {
  320: { portable: 6500, internal: 5000 },
  500: { portable: 8000, internal: 6500 },
  1000: { portable: 18500, internal: 16500 },
  2000: { portable: 33500, internal: 31500 }
};

const freeSpace = {
  320: 290,
  500: 450,
  1000: 930,
  2000: 1830
};

let selectedGames = [];

function loadGames() {
  let html = "";

  for (let i = 0; i < games.length; i++) {
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

function toggleGame(index) {
  const game = games[index];

  const exists = selectedGames.find(item => item.name === game.name);

  if (exists) {
    selectedGames = selectedGames.filter(item => item.name !== game.name);
  } else {
    selectedGames.push(game);
  }

  updatePrice();
}

function updatePrice() {
  const hdd = document.getElementById("hdd").value;
  const type = document.getElementById("type").value;

  const price = prices[hdd][type];

  let totalSize = 0;

  for (let i = 0; i < selectedGames.length; i++) {
    totalSize += selectedGames[i].size;
  }

  const remaining = freeSpace[hdd] - totalSize;

  document.getElementById("priceBox").innerHTML = `
    Price: Rs ${price}<br>
    Selected Games Size: ${totalSize} GB<br>
    Remaining Space: ${remaining} GB
  `;
}

function sendOrder() {
  const hdd = document.getElementById("hdd").value;
  const type = document.getElementById("type").value;
  const price = prices[hdd][type];

  let totalSize = 0;

  for (let i = 0; i < selectedGames.length; i++) {
    totalSize += selectedGames[i].size;
  }

  let msg = "New Order%0A";
  msg += "HDD Size: " + hdd + " GB%0A";
  msg += "Type: " + type + "%0A";
  msg += "Price: Rs " + price + "%0A";
  msg += "Selected Games Size: " + totalSize + " GB%0A";
  msg += "Games:%0A";

  for (let i = 0; i < selectedGames.length; i++) {
    msg += "- " + selectedGames[i].name + " (" + selectedGames[i].size + "GB)%0A";
  }

  window.open("https://wa.me/923262281245?text=" + msg, "_blank");
}

loadGames();
updatePrice();
