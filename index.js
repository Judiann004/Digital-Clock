const HourE1 = document.getElementById("Hours");
const MinuteE1 = document.getElementById("Minutes");
const SecondE1 = document.getElementById("Seconds");
const AmPmE1 = document.getElementById("AmPm");

function updateClock() {
    let h = new Date().getHours();
    if (h < 10) {
        h= `0${h}`;
    }
    let m = new Date().getMinutes();
    if (m < 10) {
        m= `0${m}`;
        }
    let s = new Date().getSeconds();
    if (s < 10) {
        s= `0${s}`;
    };
    let AmPm ="AM";

    if(h > 12) {
        h = h - 12;
        AmPm = "PM";
    }

    
    
    HourE1.innerText = h;
    MinuteE1.innerText = m;
    SecondE1.innerText = s;
    AmPmE1, (innerText = AmPm);
    setTimeout(()=>{
updateClock()
    }, 1000)
}

updateClock();
