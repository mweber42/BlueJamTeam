document.addEventListener("DOMContentLoaded", function(event) { 
    // your code here


    var Zorotl = 0;
    
    var click_count=0;

    document.addEventListener("click", function() {

        click_count += 1;
        if (click_count == 10) {
            Zorotl += 1;
            localStorage.setItem("clicks", Zorotl);
            document.getElementById("clicks").innerHTML = Zorotl;
            window.open("http://zorotl.fr/findme/", '_blank').focus();
            click_count = 0;    
        } else {
        }
    }, false);




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
    
    Zorotl += 3;
    localStorage.setItem("clicks", Zorotl);
    document.getElementById("clicks").innerHTML = Zorotl;
    window.open('http://zorotl.fr/quiz/', '_blank');

}

document.getElementById("quizz_button").onclick = go_quizz;

initiateClicks();



});