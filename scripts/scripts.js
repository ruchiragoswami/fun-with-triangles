let allAngles = document.querySelectorAll(".angle");
let checkTriangle = document.querySelector("#btn-checkTri");
let showOutput = document.querySelector("#showOutput");

let myArray = [];
// let sum = 0;


function extractNumber() {
    for (let i = 0; i < allAngles.length; i++) {
        if (allAngles[i].value <= 0 || allAngles[i].value === "") {
            console.log("valid?"); 
            showOutput.innerText = "Valid?"                     
            break; 
        } else {
            let x = Number(allAngles[i].value);
            myArray.push(x); 
        }
        calculateSumOfAngles(myArray);
    }
}

     // function extractNumber() {


     //     for (let i=0; i < allAngles.length; i++) {

     //         let x=  Number(allAngles[i].value);       
     //         //   console.log(typeof(x) + "" + x);                
     //         myArray.push(x); 

     //         for (let j=0; j < myArray.length; j++) {
     //             if (j <= 0 || j == "") {
     //                 showOutput.innerText = "valid?";
     //             } else {
     //                 calculateSumOfAngles(myArray, sum); 
     //             }
     //         }        


     //     }
     //     // console.log(myArray);
     //     // calculateSumOfAngles(myArray, sum); 
     // }


function calculateSumOfAngles(someArray) {
    let sum = 0;

    for (let i = 0; i < someArray.length; i++) {
        sum = sum + someArray[i];
    }
    // console.log("total is " + sum); 

    if (sum === 180) {
        showOutput.innerText = "Yes, these angles will form a triangle!";
        // console.log("Yes, these angles will form a triangle!");
    } else {
        showOutput.innerText = "Sorry, triangle can't be formed";
        // console.log("No"); 
    }
    myArray = [];
}

checkTriangle.addEventListener("click", extractNumber);