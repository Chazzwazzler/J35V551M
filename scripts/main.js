// I see you looking at the code! You wont find anything useful. Everything important is hidden away. 

const background = document.getElementById('background');

// background.addEventListener('mousemove', getMousePosPercentage);

// function getMousePosPercentage(event) {
//     const rect = background.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
    
//     let relX = Math.floor((x / rect.width) * 100);
//     let relY = Math.floor((y / rect.height) * 100);

//     console.log(`X: ${relX}%, Y: ${relY}%`);
// }

// COMPUTER POWER

const power_button = document.getElementById("power-button");
const comp_on = "url('img/Comp_On.jpg')";
const comp_off = "url('img/Comp_Off.jpg')";

let computer_on = false;

const countdown_date = new Date("April 1, 2025 21:00:00").getTime();
const countdown_text = document.getElementById("countdown-timer");

const screen_bounds = document.getElementById("screen-bounds");

function ToggleOn () {
    computer_on = !computer_on;
    console.log("Computer Toggled.");
    
    if(computer_on){
        background.style.backgroundImage = comp_on;
        screen_bounds.style.opacity = "100";
    }
    else{
        background.style.backgroundImage = comp_off;
        screen_bounds.style.opacity = "0";
    }
}

power_button.addEventListener("click", ToggleOn);

// COUNTDOWN


function RemainingTime(){
    let current = new Date().getTime();
    let diff = countdown_date - current;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown_text.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left on installation...`
}

let remaining = setInterval(RemainingTime, 1000);


// /////////////////////////////////////////////////////

// CODES


// CONSOLE
const validChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','-','.','/',' '];

const stdIn = document.getElementById("console-input");
const stdOut = document.getElementById("console-display");

let currentCommand = "";

stdIn.addEventListener("keydown", InputCommand);

function InputCommand(e) {
    if(e.key == 'Backspace' && currentCommand != ""){
        stdOut.innerHTML = stdOut.innerHTML.slice(0, -1); 
        currentCommand = currentCommand.slice(0, -1); 
    }
    if(e.key == 'Enter'){
        stdOut.innerHTML += "<br>j3zv5-ROOT > "
        ProcessCommand();
        currentCommand = "";
    }
    
    let inputChar = e.key.toLowerCase();

    if(validChars.includes(inputChar)){
        stdOut.innerHTML += inputChar;
        currentCommand += inputChar;
    }
}

function ProcessCommand(){
    console.log(currentCommand);
}
