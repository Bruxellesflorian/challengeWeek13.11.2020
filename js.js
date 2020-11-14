const newBallon = document.createElement("div")
newBallon.className = "ballon"
const body = document.querySelector("body > div")
body.appendChild(newBallon)

const close = document.querySelector("body > div > div.aide > button")
close.addEventListener("click", function () {
    let divAide = document.querySelector("body > div > div.aide")
    divAide.style.display = "none"
})

function rand(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}
let time = 1000;
const compteurTime = document.querySelector("#lights > span:nth-child(6)")
compteurTime.innerHTML = time
let nbTour = 0;
let light = 0;
let score = 0;
let plus = 0;

const button = document.querySelector("#ballon2")
button.addEventListener("click", essaieDeBouton);

function essaieDeBouton() {
    score += plus
    score.innerHTML = score
    document.querySelector('#score').innerHTML = score
}

function changeLight() {
    bougeBallon()
    const lightDivs = document.querySelectorAll('#lights>div');
    const colors = ['#F00', '#AA0', '#0F0']
    increaseScore()
    if (light === 0) {
        for (let lightDiv of lightDivs) {
            lightDiv.style.background = '#AAA'
        }
    }

    lightDivs[light].style.background = colors[light]

    if (light < 2)
        light++;
    else
        light = 0

}


function increaseScore() {
    if (light == 2) {
        document.querySelector('#score').innerHTML = score
        plus = 1
        ballon2.style.background = "green";
    } else {
        plus = 0
        ballon2.style.background = couleurRandom();

    }


    if (score >= 5) {
        window.clearInterval(lightInterval)
        alert('VICTORY!')
    }
}

function couleurRandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




// class rond {
//     constructor(nameof, classe, left, top) {
//         this.nameof = nameof;
//         this.classe = classe
//         this.left = left
//         this.top = top
//     }
// }

let tablu = []
function test() {
    balle = "ok"
    tablu.push(balle)
    for (g = 0; g < tablu.length; g++) {
        tablu[g] = document.createElement("div")
        tablu[g].className = "ballon"
        body.appendChild(tablu[g])
    }
    // pushIn = tab.push(couleurRandom(),"ballon","rand(80)","rand(80)",)
    // time = 500 
    //  lightInterval = window.setInterval(changeLight, time)
}

function mouvement(j) {
    j.style.background = couleurRandom();
    j.style.left = rand(80) + "%"
    j.style.top = rand(80) + "%"
}


function bougeBallon() {
    const ballon = document.querySelector("body > div > div:nth-child(1)")
    const ballon1 = document.querySelector("body > div > div:nth-child(2)")
    const ballon2 = document.querySelector("#ballon2");
    for (i = 0; i < tablu.length; i++) {
        mouvement(tablu[i])
    }
    mouvement(newBallon)
    mouvement(ballon)
    mouvement(ballon1)
    ballon2.style.left = rand(80) + "%"
    ballon2.style.top = rand(80) + "%"

}






let lightInterval = window.setInterval(changeLight, time)
document.querySelector('#score').innerHTML = score