document.addEventListener("DOMContentLoaded", function(event) { 
    // your code here

    var click_count=0;

    document.addEventListener("click", function() {
        click_count += 1;
        if (click_count == 10) {
            window.open("http://zorotl.fr/findme/", '_blank').focus();
            click_count = 0;    
        } else {
        }
    }, false);


var Zorotl = 0;

function initiateClicks() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        Zorotl = 0;
    }else{
        Zorotl = parseInt(clickStr);   
    }
    document.getElementById("clicks").innerHTML = Zorotl;
}

function doClick() {
    Zorotl += 1;
    localStorage.setItem("clicks", Zorotl);
    document.getElementById("clicks").innerHTML = Zorotl;
}

document.getElementById("clickButton").onclick = doClick;


function pay_rancon() {
    if (Zorotl >= 1) {
        Zorotl -= 1;
        
        localStorage.setItem("clicks", Zorotl);
        document.getElementById("clicks").innerHTML = Zorotl;
    }
}

document.getElementById("rancon_button").onclick = pay_rancon;



function go_quizz() {

    window.open('http://zorotl.fr/quiz/', '_blank');

}

document.getElementById("quizz_button").onclick = go_quizz;

initiateClicks();


var departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)

});