const newBallon = document.createElement("div")
newBallon.className = "ballon"
const body = document.querySelector("body > div")
body.appendChild(newBallon)

const close = document.querySelector("body > div > div.aide > button")
close.addEventListener("click", function () {
     let lightInterval = window.setInterval(changeLight, time)
    let divAide = document.querySelector("body > div > div.aide")
    divAide.style.display = "none"
})

function rand(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}
let time = 1000;
let timer = 9;
const compteurTime = document.querySelector("#lights > span:nth-child(5)")
compteurTime.innerHTML = timer
let light = 0;
let score = 0;
let plus = 0;

const button = document.querySelector("#ballon2")
button.addEventListener("click", leTireDesEnfers);

function leTireDesEnfers() {
    timer += 5
    addBallon()
    score += plus
    score.innerHTML = score
    document.querySelector('#score').innerHTML = score
}

function changeLight() {
    if(timer <= 0){
        window.location =""
        alert("T'as perdu ! Ton score : "+ score)
    
    }
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
        timer -= 1
        compteurTime.innerHTML = timer

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

}

function couleurRandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let tablu = []

function addBallon() {
    balle = "lesDistenciels"
    tablu.push(balle)
    for (g = tablu.length - 1; g < tablu.length; g++) {
        tablu[g] = document.createElement("div")
        tablu[g].className = "ballon"
        body.appendChild(tablu[g])

    }
}



function bougeBallon() {
    function mouvement(j) {
        j.style.background = couleurRandom();
        j.style.left = rand(80) + "%"
        j.style.top = rand(80) + "%"
    }
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


document.querySelector('#score').innerHTML = score