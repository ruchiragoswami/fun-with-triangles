let base = document.querySelector("#base");
let height = document.querySelector("#height");
let buttonArea = document.querySelector("#btn-area");
let showOutput = document.querySelector("#output-area"); 

function calculateArea() {
    if (base.value <=0 || height.value <=0) {
        showOutput.innerText = "Please enter a valid number"; 
    } else {
        let ourArea = (base.value * height.value)/2;
        console.log(ourArea + ' is our area');
        showOutput.innerHTML = `Area for this triangle is ${ourArea} cm<sup> 2</sup>` ;
    }    
}


buttonArea.addEventListener("click", calculateArea);