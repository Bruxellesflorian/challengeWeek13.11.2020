
    const newBallon = document.createElement("div")
    newBallon.className = "ballon"
    const body = document.querySelector("body > div")
    body.appendChild(newBallon)

    function rand(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max);
    }
    let time = 1000;
    let compteurTime = document.querySelector("#lights > span:nth-child(6)")
    compteurTime.innerHTML = time
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
        } else {
            plus = 0
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
    

function addBallon(){

    newb.style.background = couleurRandom();
    newb.style.left = rand(80) + "%"
    newb.style.top = rand(80) + "%"
    body.appendChild(newb)
}
    
class rond {
    constructor(nameof,classe,left,top){
        this.nameof = nameof
        this.classe = classe
        this.left = left
        this.top = top
    }
}
let tablu = []
function test(){
    balle = new rond (couleurRandom(),"ballon","rand(80)","rand(80)")
    tablu.push(balle)
    console.log(tablu)
    // pushIn = tab.push(couleurRandom(),"ballon","rand(80)","rand(80)",)
    
    
    // time = 500
    //  lightInterval = window.setInterval(changeLight, time)
    
}




// let tab = [{
//         nom : "nom",
//         class : "ballon",
//         left : "rand(80) + "%"",
//         top : "rand(80) + "%"",
//     },
// ]
// let pushIn = tab.push(couleurRandom(),"ballon","rand(80)","rand(80)",)
// console.log(tab)


    function bougeBallon() {
        newBallon.style.background = couleurRandom();
        newBallon.style.left = rand(80) + "%"
        newBallon.style.top = rand(80) + "%"

        const ballon = document.querySelector("body > div > div:nth-child(1)")
        ballon.style.background = couleurRandom();
        ballon.style.left = rand(80) + "%"
        ballon.style.top = rand(80) + "%"

        const ballon1 = document.querySelector("body > div > div:nth-child(2)")
        ballon1.style.background = couleurRandom();
        ballon1.style.left = rand(80) + "%"
        ballon1.style.top = rand(80) + "%"

        const ballon2 = document.querySelector("#ballon2");
        ballon2.style.left = rand(80) + "%"
        ballon2.style.top = rand(80) + "%"
    }
   

    
    let lightInterval = window.setInterval(changeLight, time)
    document.querySelector('#score').innerHTML = score
    
