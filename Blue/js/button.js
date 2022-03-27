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
initiateClicks();

function pay_rancon() {
    if (Zorotl >= 5) {
        Zorotl += 2;
        
        localStorage.setItem("clicks", Zorotl);
        document.getElementById("clicks").innerHTML = Zorotl;
    }
}

document.getElementById("rancon_button").onclick = pay_rancon();