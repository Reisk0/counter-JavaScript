let count = 0; //set unitial count 

//select value and buttons
const value = document.querySelector ("#value");//we select id named value
const btns = document.querySelectorAll (".btn"); //we select all the buttons 

btns.forEach (function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) { 
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else if(styles.contains("reset")) {
            count=0;
        }

    if(count > 0) {// if count more than 0 its red
        value.style.color = "green";
    }
    if(count < 0) { //if count its less than 0 turn into green
        value.style.color = "red";
    }
    if(count === 0) {  //=== meas equal
        value.style.color = "black";
    }
        value.textContent = count;
    });
});

