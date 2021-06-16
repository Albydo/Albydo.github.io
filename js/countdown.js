let body = document.getElementsByName("body");

let finishedDate = new Date("Jun 25, 2021 00:00:00").getTime();

let updateTimer = setInterval(() => {
    let context = new AudioContext();
    let o = context.createOscillator();
    let freq = 261.6;
    let g = context.createGain()
    o.frequency.value = freq;
    o.connect(g);
    g.connect(context.destination)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
    o.start(0);
    let now = new Date().getTime();
    let timeleft = finishedDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeleft % (1000 * 60) / (1000));

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft <= 0) {
        clearInterval(updateTimer);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Yay, more F&F";
        document.getElementById("pauseChamp").src = "../img/pepeW.png"
    }
}, 1000);

let init = function(){
    updateTimer;
}

window.onload = init;

//console.log(finishedDate);