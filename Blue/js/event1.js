var click_count=0;

document.addEventListener("click", function() {
    click_count +=1;
    if (click_count == 10) {
        click_count= 0;    
    } else {
    }
}, false);