Rl = document.getElementById("Rl");
Pk = document.getElementById("Pk");
Bj = document.getElementById("Bj");
var numb = document.getElementById("numbrisk");
let Risk = document.getElementById("Risk");
var needle = document.getElementById("needle");
var clas = document.getElementsByClassName("hh6");

table = [5,4,2,4,3,6,7,6,4,1,1,2,3,4,5,6,1,8,1,2,1,2,3,4,5,2,2,2,9,3,1,2,3,3,5,6,3,8,9,4]

for (let i = 0; i < 40; i++) {
    clas[i].innerText = table[i];
}

money = [987000];

var moneyy = document.getElementById("moneyy");
moneyy.innerText = money + "zł";

Risk.addEventListener('change', function(){
    if (Risk.options[ Risk.selectedIndex ].value == "Roulette") {
        needle.style = "transform: rotate(185deg);";
        numb.innerText = "VERY HIGH";
    }
    if (Risk.options[ Risk.selectedIndex ].value == "Poker") {
        needle.style = "transform: rotate(100deg);";
        numb.innerText = "NORMAL";
    }
    if (Risk.options[ Risk.selectedIndex ].value == "Blackjack") {
        needle.style = "transform: rotate(40deg);";
        numb.innerText = "LOW";
    }

})
