// I see you looking at the code! You wont find anything useful. Everything important is hidden away. 

const background = document.getElementById('background');

// COMPUTER POWER
const power_button = document.getElementById("power-button");
const comp_on = "url('img/Comp_On.jpg')";
const comp_off = "url('img/Comp_Off.jpg')";

let computer_on = false;

const countdown_date = new Date("April 1, 2025 21:00:00").getTime();
const countdown_text = document.getElementById("countdown-timer");

const screen_bounds = document.getElementById("screen-bounds");

function ToggleOn() {
    computer_on = !computer_on;
    console.log("Computer Toggled.");

    if (computer_on) {
        background.style.backgroundImage = comp_on;
        screen_bounds.style.opacity = "100";
    }
    else {
        background.style.backgroundImage = comp_off;
        screen_bounds.style.opacity = "0";
    }
}

power_button.addEventListener("click", ToggleOn);

// COMMANDS
function decryptWithAES(ciphertext, passphrase) {
    let bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

const commands_encoded = ["U2FsdGVkX1+YqlCFpXZ6fu7UM2xUWqr6972Ja3p+UIY=", "U2FsdGVkX19OR5Xu7AHilrr4EwMiKJLUHq++ES+W59E=", "U2FsdGVkX1+O9e/PdhvMvvmaJPt7b9aDhTmNSP26MkA=", "U2FsdGVkX18PTJE5G6pAfD4QNrvHZN6kZS5CcJlLCktBxP/x2fk8EQy1Si3rFWhgzGC8qdY2I1AP4JsCzhW9Dg==", "U2FsdGVkX184ZykfXUqneDou94DGUZC6gEk1Dn4peCYxbupZ9QYomrgKo9hVZPLo", "U2FsdGVkX1+TvTxq5IbJ162tVm8DNCTMmvBTJTlojI/mmZ2XuWakpeE8lXr3x9uK", "U2FsdGVkX1/lYHxR1gs2j5YFe7mecFcNnD8GEDjJxOIHfssePQhdrjcmnq54oE41", "U2FsdGVkX1+cCgSs/zLqr3x7QB0iF7sMwKvzaD3ctgpHlgVFRpM2cB+r3C3i0BUI", "U2FsdGVkX18F+SNQoBbi9inGHc+T38XVGBs6wdrrWzX5EY+iOrBXf1EZLd4vgtq7", "U2FsdGVkX18x2IfFG6KKWbBbWBWj2NWfXIjcWv3to9p4ZxgZzcQQ3ZXqr9S9ejWu", "U2FsdGVkX1/JEZPv/5eHkj67Zm/LTMFItkXD8z6aRvsbZZEYe8oBvLNl6lcRcDpI", "U2FsdGVkX18/TLRK9ekDv9XmM43Az0EHwDvHgn+E8ORO1mS0qLwmFuWxSItsEUKVZbAi8YgfDt2+mPefNO+ldDNIrDvTvLXqJwzOG+8VWWl2XBSjcSqIVboLdTFqUJu+Z5Yj16CtFUkesjR3joZtKQ==", "U2FsdGVkX19gs7cfSN33tf6CyLWGmLKW0MqaBsUaX2P9SKUIWBsE/U+GByeZTpoq", "U2FsdGVkX191aVyOUIMvghJ2mZQE7jNP8zT69xUMP7Lj+ork7ZH0EnJU6tuMth2d", "U2FsdGVkX18S5Q+ZAPpBUGLwWyTUJDxNpjarzQwcpYAa+eDKxPPpahjnxu1K2lt7RTmWr4ITR1SDciN3Ca9rUg==", "U2FsdGVkX18j21+dunt4s1As7udIKnfvbvY6mLCUaimbbJJ6HUrV9eZ/hpkAs8RX", "U2FsdGVkX19EhQ957I1de4fRaZyro92LE1iCtlzoCLk=", "U2FsdGVkX1/pTPKONyqug0Jvn6tXggeJczpin6vC6OCxLemQSgsdfLBqaZcija2w", "U2FsdGVkX1+VUe6eH8CkymmsYx9xhVJ7+MgJIXIOU6tCB9KUgu4ccVNzEPo2eWaxEkeRf1Ao+xXlgcbS0sb2Yw==", "U2FsdGVkX1/8FH5SgRItExcT2xk3EtH9BpkMr4nZljsRuIi4fluYgpnSDYci6arm", "U2FsdGVkX19bJXvlUqKatA9hslM6lQZT0SPRpsA26k+Aa00kEXNSq1OZb5F1rNMR", "U2FsdGVkX1/GdV+Cy+QJVUPGuP6hxVVrJ28GoWTld7k=", "U2FsdGVkX1/F21wO1tPbGigEUBkLvom2+zc1xXwsGAs=", "U2FsdGVkX18HoLD3xhSG8ynmJnX2v2mSo3StopD4KN0=", "U2FsdGVkX19EQFHY9zGRWJPwWgbOdL7UW7mzUD+Js+GxT5EsiAZBX8YlFmfWUkDnzpGE0NKxEiIQxSh+Ey3xk3A6buV3/hLqHKtrYRNhFaLMqZoFU7uhsC9d/xUCzYfL+IN73qcw/PYeMEQeA5290uwjsHOXzNYgaOvT13+7vy7ccdt+5V+tLs4pf54vKVlAef6pbOF11aBpOXlHefelgupLyUDMw10Ucj2+88t5D1Bg1JRuLY5PahSZog9IzreTsN/QlZDTkoPLOPC8VxEUHA==", "U2FsdGVkX1/oAuvphLFr5bDD+CMov2aFURgUYJTKjrZBmiV7mHdNuW9XKmo/imzCbmTY68a/6mDkodBMukkBXA==", "U2FsdGVkX1+hoervMW0qq18yEP/kF8PAqudvAoXu5QXSkV5thpSJ/RZsAAWbK9cTKfyfn3tSv6BXGmQDpVgdhg==", "U2FsdGVkX1/4MivnfjtrCpTKgRn4zFv3Ip7xe0vdXMhNovS/hfKaRXY2EwaDjC6JgtjOF+gnxvN3xdtxAnuY5Q==", "U2FsdGVkX1+anbVHmJISyUu/+qQjwC+otNriy5eVkoipHBmwNOfl6AauSbY9tWrDssObnZkh87By+m295w/fBQ==", "U2FsdGVkX19bz8b8pyvjeaSSVdOzaYbTK0fS0I6Kes+5pIEDhesU77D1w/p5mYwM4RCs6iij1Bu2GRvDD6ssmg==", "U2FsdGVkX19/ePJbG3bcFIE6lQfQ72z44N1r12aK5ZeyD/M27xN3X2kRQlNKemgd838G9TAQ4hRmAJHmRz58sQ==", "U2FsdGVkX1+3NwkspDXf0Lz4fxWL+TPsVfY0BCc+1uL2ZXc8HIJRvhfSa8SLx7cMkl8Hr/Hhe11vSQP/zX5A5A==", "U2FsdGVkX19SoV8Mi0bDqJSAqNBj4pzbxd3GVVIv84d1EZSulzwPt9uL5JpBC5y2+iQi6uBcQh8UG/Fm6qazvg==", "U2FsdGVkX1++8A4Q3Xs9Mf2BL8wy+IDxjly8hHYzgset89vvxfJD0cI+HCRc1wZV3NsUwdFItJwZz+KsRoduEg==", "U2FsdGVkX18WHUyv8MM0ktDh5G601rXrldf5YNrqKxfYlvX9TSyJ4puRUkfaMB44iM+KmX22X++XWkS2pnCllA==", "U2FsdGVkX18iEsyiZjArx7FKDJL1COmtmAkZ5xKQmZZPgrpOsRTKKmvMWmSeu5ZjGj1WiLplm/s3/LojmykXmA==", "U2FsdGVkX18ZZ7ekj1Y+0+xEbQKlPCKofic4IpgA17BMoYsWccTScJ8rusNzVbLLxU7mn/seLLZ22ut9fxq90Q==", "U2FsdGVkX1+JJxl4gqMuVAPqpwjgiY5kO4nf5VRj6Y4GT8jF5k1oFSD37hwmxmISN8N16uUmdPbIhL6UOcg6OQ==", "U2FsdGVkX18/D/03G8/KcTTvSIsJCIKR5/OH9P6KOmTiwAa4otIDXDLM48JmK2Ml", "U2FsdGVkX1/yE+c6n9/G9LVFq3YK8RJ3OcrUB4VYZuxs23pXiWtCHykA2mFTCHBo", "U2FsdGVkX19PcG/9EyIZH3ds0nAHmCtIrXSX0Zi5/PwGmvLE9QY2DYtjErvxvlz2LxA3jYAs5obPoZ3l+I78gQ==", "U2FsdGVkX1/ENmV6QkPOWrLMpCQLM/bFH0/1rMRHrCtubU7JV8emeahDDHzJlWrSLH6TVSixGAyTbQ9ys0wszA==",];

// CONSOLE
const validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '.', '/', ' '];

const stdIn = document.getElementById("console-input");
const stdOut = document.getElementById("console-display");

let currentCommand = "";

stdIn.addEventListener("keydown", InputCommand);

function InputCommand(e) {
    if (e.key == 'Backspace' && currentCommand != "") {
        stdOut.innerHTML = stdOut.innerHTML.slice(0, -1);
        currentCommand = currentCommand.slice(0, -1);
    }
    if (e.key == 'Enter') {
        ProcessCommand(currentCommand);
        stdOut.innerHTML += "<br>j3zv5-ROOT > "
        currentCommand = "";
    }

    let inputChar = e.key.toLowerCase();

    if (validChars.includes(inputChar)) {
        stdOut.innerHTML += inputChar;
        currentCommand += inputChar;
    }
}

function ProcessCommand(console_command) {
    succeded = false;
    for (const command of commands_encoded) {
        try {
            let decoded = decryptWithAES(command, console_command);
            if (decoded.endsWith("[correct]") && decoded.startsWith("[eval]")) {
                let code = decoded.slice("[eval]".length, decoded.length - "[correct]".length);
                eval(code);
                console.log("Triggered eval command.");
                succeded = true;
            }
            else if (decoded.endsWith("[correct]")) {
                let response = decoded.slice(0, decoded.length - "[correct]".length);
                stdOut.innerHTML += "<br>[CONSOLE] > "
                stdOut.innerHTML += response;
                console.log("Triggered response command.");
                succeded = true;
            }
        } catch {
            continue;
        }
    }

    if (!succeded && console_command != "") {
        stdOut.innerHTML += "<br>[CONSOLE] > ERROR: Command not found.";
    }
}

