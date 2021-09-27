let allAngles = document.querySelectorAll(".angle");
let checkTriangle = document.querySelector("#btn-checkTri");
let showOutput = document.querySelector("#showOutput");

let myArray = [];

function extractNumber() {
    let check = true;
    for (let i = 0; i < allAngles.length; i++) {
        if (allAngles[i].value <= 0 || allAngles[i].value === "") {
         
            showOutput.innerText = "Please enter valid inputs!";
            check = false;
            break;
        } else {
            let x = Number(allAngles[i].value);
            myArray.push(x);
            console.log(myArray);
        }
    }
    if (check) calculateSumOfAngles(myArray);
}




function calculateSumOfAngles(someArray) {
    let sum = 0;

    for (let i = 0; i < someArray.length; i++) {
        sum = sum + someArray[i];
    }

    if (sum === 180) {
        showOutput.innerText = "Yes, these angles will form a triangle!";

    } else {
        showOutput.innerText = "Sorry, triangle can't be formed";

    }
    myArray = [];
}

checkTriangle.addEventListener("click", extractNumber);