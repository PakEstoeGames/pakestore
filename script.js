/* script.js FINAL FIXED */

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

const games = [
{name:"GTA V",size:90},
{name:"RDR2",size:130},
{name:"Resident Evil Village",size:50},
{name:"Watch Dogs 2",size:45},
{name:"Hogwarts Legacy",size:85},
{name:"Spider Man 2",size:135},
{name:"God of War",size:80},
{name:"Tekken 8",size:140}
];

window.onload = function(){
renderGames();
updateAll();
};

/* Games Load */

function renderGames(){

let html = "";

for(let i=0;i<games.length;i++){

html += `
<label class="gameRow">
<span>${games[i].name} - ${games[i].size} GB</span>
<input type="checkbox" onchange="updateAll()" value="${i}">
</label>
`;

}

document.getElementById("gamesList").innerHTML = html;

}

/* Update */

function updateAll(){

const storage =
document.getElementById("storage").value;

const variant =
document.getElementById("variant").value;

const price =
prices[storage][variant];

let total = 0;

document.querySelectorAll("#gamesList input").forEach(box=>{

if(box.checked){

total += games[box.value].size;

}

});

const remain =
freeSpace[storage] - total;

document.getElementById("price").innerHTML =
"Price: Rs " + price;

document.getElementById("selectedSize").innerHTML =
"Selected Games Size: " + total + " GB";

document.getElementById("remaining").innerHTML =
"Remaining Space: " + remain + " GB";

}

/* Next */

function goNext(){

const storage =
document.getElementById("storage").value;

let total = 0;

document.querySelectorAll("#gamesList input").forEach(box=>{

if(box.checked){

total += games[box.value].size;

}

});

if(total == 0){

alert("Please Select Games");
return;

}

if(total > freeSpace[storage]){

alert("Selected HDD Full. Please Choose Bigger HDD");
return;

}

document.getElementById("page1").style.display = "none";
document.getElementById("page2").style.display = "block";

window.scrollTo(0,0);

}

/* Order */

function placeOrder(){

const name =
document.getElementById("name").value.trim();

const phone =
document.getElementById("phone").value.trim();

const email =
document.getElementById("email").value.trim();

const address =
document.getElementById("address").value.trim();

if(name==""){
alert("Please Enter Full Name");
return;
}

if(phone==""){
alert("Please Enter Mobile Number");
return;
}

if(address==""){
alert("Please Enter Complete Address");
return;
}

const storage =
document.getElementById("storage").value;

const variant =
document.getElementById("variant").value;

const price =
prices[storage][variant];

window.open(
"https://wa.me/923262281245?text=New Order%0AName: "+name+
"%0APhone: "+phone+
"%0AEmail: "+email+
"%0AAddress: "+address+
"%0AHDD: "+storage+" GB"+
"%0AVariant: "+variant+
"%0APrice: Rs "+price,
"_blank"
);

}
