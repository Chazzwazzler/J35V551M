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

const commands_encoded = ["U2FsdGVkX1+ZPgvgPIPTW1EOBm0wdfeuNin1cpi0ozc=","U2FsdGVkX1+zquAcZugD0Ik9EXvr8+X5/Vq6VINze0Y=","U2FsdGVkX1+i/3+qkTcU+j5LDD80OMLqmftNW7NWkCU=","U2FsdGVkX19BIHY6ONjHcILqx0YX4D/FIU5u9VZG1Yxb0IafX1Dr8C1KaQZ3j1mWpSOKuSk0RulvX42ylXBtqg==","U2FsdGVkX1/xingJHwV3//TnXT8OkjIGhvW0gRb0Gw9GeP9m6483Uw67YN0klMdD","U2FsdGVkX18m+QheCRSnp6Mal/R4XHZI/1anEXGEPNIfn946Gr5gOaEO8okB6QEj","U2FsdGVkX1/QopCek2NOPB8uo7Odp6Th+9+MsoPjbSOFtOcHmZ/U9rn9YBDyOXhR","U2FsdGVkX1+V5YJe7Zy6rXEoInQSF4wGySeZi9TNaFXIeRtjPF5+xByDToBpPrE/","U2FsdGVkX18mBhu8r3wRPyogShrdSez51ZUUXm2UOjRX1sUViV+0zPLO9mVo700r","U2FsdGVkX19m6m3I2YyUQxGLjEJ5kAPdRNidLj1W/JdeGgJQqcXr7cnIDfTd+6nE","U2FsdGVkX19fJGKZJT4NZD9IH1wtXPYPwmPIXKStENk/JRQZ/g9aMXoezKCGXOKw","U2FsdGVkX18K20oOWQuMlKT20Mr1+xBS8zmgpqDj43UaApBbtl/F+XaYXFOlqpSkcfnXX+oBxgZVOSREJVZ13FC/aSa/V7UqqcnwsHhAqx5szmsgHAiZxyRpxXGRs9feJpp926tFYDrfVq81ce4bLw==","U2FsdGVkX19WHg3cVe6ZfIvPO+4dSmBkSdeAD7gP2ol8G9uohnribmNlVnoed1VV","U2FsdGVkX1+83j9CJXWYpc+sCpGFvL3N55cQ8GtdkuqfBJQzxyUka6oP5TFjyZBC","U2FsdGVkX18KcRgOQXgyAnpS6nofwpDocUDyOwp6F7RJO9QKObSlKgdXm0ifyhetm+E/d14I3RuRFpxW5/G+Zg==","U2FsdGVkX18wUerJ7qR4U5e0RMIJEpuOLx//Jpvb5erv92l7pGsOilobCgZJtnZg","U2FsdGVkX185IxOQcm3ih6xc3qiHOcN/5DMEIwbmlEU=","U2FsdGVkX18QLm5aeeOEAqkfezwDujHj6GM5n5XInIlFG6GvLfodJDLTRK9j3DqW","U2FsdGVkX1+cisUiIcCJSHdVm847iQGIf5Dyy2fHNxl8InzOUc2XZWanthPHWhLAmpxDjPG8+agf2mjO74nTMQ==","U2FsdGVkX1+4OTQUgHz+pkYHKUjqB2Meq7hhOm/DpsB412hco/YenvlxVxJoJQqn","U2FsdGVkX1+5vmc4TVMCVv74S1oFnj+CGYoHjLPFvG2KRfx3PteXy4PNXlpewaRH","U2FsdGVkX1831Po8vRcy/tmCuQqW8fJLaHh/gByTGSk=","U2FsdGVkX19i4zLdKFoce4aQ2FGqHvpg9baDSVy4ePc=","U2FsdGVkX18T0OonK+JCy0kpvC7yYGDAncHAV/3E5W8=","U2FsdGVkX1/9iLRlYoFVuSenQRFu09xnSMHToB7AkhALpNfRnSrvXPluinY8ysvgR0JuOYgElLOkA1RUccQ+uLLGtYiKMNnYHtLYzwjYztXpTNIKQ/Z3CQU2S0CnidQy+ncbQfDIEs3dq+2vizyHoFZm51zt5atlK5sMGvt+Dujf4NGk+BosJjPlYfSM7VLqMCFocJ3Mq7Ilbpf1fCRXd5iuRytqFuFvR4lwSsiqQ1Mab9bf7kvan7+AfcvfVP6GAvKk67JkSH8dGvJVib/J3SJ7YWHSTamunVMeir+k1eLqCLom4DSDfSDGwgFqZPyFhQj6DlFC2V4SOnr630Q31eeuDxt9ru9puXcBR05rIG7L1DcJ4PHsihsOuN9l6OZ5OBE4Svx3mKooht0PA3jvLAKc+JnCvkIDCWrp5tWR6etEAsk/cTmX1gX++CAtyMTEDykI7t+1OkK+XbiKRAusToem35WwddMALD0OzjjZcwGgn/QjZCL9snsl3pQLKIme66ZJ/JpzdrMkJAJMez3mIrxDXRqnbLAmfqAg4vd6b3HdF1HePIYaU97CWFMx1dtwvme3lIY56UX64JNCghHRXXQpVKaHXMSbuOAdF8C5hSw=","U2FsdGVkX192SJZQZyUUZFkwz92VC0zoA5pdrwzBpgDLJr8XmvdfsMyMNZqQcJz/PxWHmByj7o88Q80acJdk9w==","U2FsdGVkX18X1ZaWYopeG0+eJmikuHVvfQk4lIgbrvoMEb1Irk99iMxFlT1i2Wy3psgkpwJRmllETMs+isLxHw==","U2FsdGVkX19DaeLY1M4jRfqBhsWTlJ2JUCHWXt4vY35fLjPeEAyStXGQlFDGeEFus3YxfEqYWNCAMWSu9xRxIA==","U2FsdGVkX1/91uvGhjiJaynotORecRre6Oek3LKwCN9/htC6bgUjtqTpr4jZ1XXZAnMsvVqg1qkNQdfIdG6D1w==","U2FsdGVkX1+UeKWQT4nUzV40pmL6G53PGDHY7SmmovCksZ1Fo60a6Kspi3zFmJiY7dj7IZ+YYaGwFSkGyEIn8Q==","U2FsdGVkX1+UTp0i7wybeeYhccnvBZnO+gsm/ZnhkcXYu455Ekv2flkFqSW7/P/FNSmFtrLHM1rBuCTexcW9mQ==","U2FsdGVkX1/pDr86sP6KC6bZRguUw78a5Tdq66kCLx/0i9jaNQ3eRS3S00PeYi1GNDpua1ABigBcHu/H4DpfLw==","U2FsdGVkX19MYlJGoLp8aPQ1hePzH2tZ2bipnSmjiHlu7ej1qtcokqEyEFoRPCghH1OcGhm8deaxpG9p104zSQ==","U2FsdGVkX19wvGp6vNir2uFxhz1BfhOR0AR7MRp0ofiXuZ6RebJOSP0Je3QBcwbv0E2b4HfYmpZqsL8x7u/Ahw==","U2FsdGVkX1+aZgCHwikcbAGC4EQ1BqH3rCqdsgYOzJkQ20+QekmobM6TR3saoVsv5HYj400+JzjHvTOAmKk8TA==","U2FsdGVkX19mzsYhndw9Ma64tqoKpLItI2ZBHqAEDnJdAwkysA6E1OC6CjqIV6UyqH2LRUiBoGvDwh0YlZk7Uw==","U2FsdGVkX18pvhfAJbmHRTogtL1fC3dM2h/SS6eBReni8m+9tOyc+H5aO2zEWZYq85i7Dz0ugWeLeg3CFjL5mw==","U2FsdGVkX19edJt+3VBMfWsTOKKhLgxK54DDj2evm6+VmkdYcB+W5VaANBIO/Ym/78YPs1kh5pWIt170xtUgRg==","U2FsdGVkX18/MhbMpbbRhK2lbbiZ4fRJgu9e3wzRqvWm49YjynnAfKSwJFWPicUu","U2FsdGVkX1/zmZ/kjYsFDmhWaKx7yMF6hcTumcaFzZRpWyPAu15mnUJOvFUxRaQZ","U2FsdGVkX1/JU5GzxO/W2HpP0Irlw49Z2GpXLGh2uVUDkh/8+pyqDqqZySB58OvgZLLkEoPIgQXv39RFIelxXg==","U2FsdGVkX18YHIxU2aVoy6p3QAfkTt2JXPSPbUX2AX5GJ6D95bGz3vLkzIFXFheu1CuJu4LUOL2BVDe2ASsH7A==",];

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

