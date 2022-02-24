// lev 3

{/* <button onclick="catWalk()">Walk</button>
<button onclick="pause()">Pause</button>
<button onclick="turn()">Turn</button>
<button onclick="catSpeed()">Speed</button> */}

// Schreibe drei Funktionen, die die Katze steuern. [WALK] [PAUSE] [TURN]

// Nutze unter anderem
// setInterval()
// clearInterval()
// window.innerWidth 
// Boolean true/false

// SuperBonus: Erstelle eine vierte Funktion [SPEED], in der ihr die Millisekunden von eurem erstellten Intervall ändert.

// walk: setIntervall position left ->
//Pause: clearInterval 

let cat = document.getElementById("cat");
console.log(cat);
let catPosition = 0;
let catInterval;
let width = window.innerWidth;
console.log("width= " + width, typeof width + "catposition = " + catPosition, typeof catPosition);
let speed;


let turn = () => {
    console.log("test");
    if (!cat.classList.contains("walkleft")) {
        cat.style.transform = "scaleX(-1)";
        cat.classList.add("walkleft");
        console.log("cat turn if");
    }
    else if (cat.classList.contains("walkleft")) {
        cat.classList.remove("walkleft");
        cat.style.transform = "scaleX(1)";
        console.log("cat turn elseif");
    }
}

let catWalk = () => {
    console.log("test catWalk");
    speed = 200;

    catInterval = setInterval(catStart = () => {
        if (!cat.classList.contains("walkleft")) {
            console.log("if condition, no walkleft");
            catPosition += 10;
            console.log(catPosition);
            cat.style.left = `${catPosition}px`;
        }
        else if (cat.classList.contains("walkleft")) {
            console.log("else condition, without walkleft");
            catPosition -= 10;
            console.log(catPosition);
            cat.style.left = `${catPosition}px`;
        }

        if (catPosition <= (width - 300) && catPosition > 0) {
            console.log("cat läuft ohne turn")
        }
        else { turn() };

    }, speed)
    console.log("catspeed aus function walk= " + speed);
}



let pause = () => {
    console.log("test");
    clearInterval(catInterval);
}




