console.log("started");


let angle1 = document.querySelector("#angle1");
let angle2 = document.querySelector("#angle2");
let angle3 = document.querySelector("#angle3"); 
let allAngles = document.querySelectorAll(".angle");
let isTriangle = document.querySelector("#btn-checkTri");

// console.log(allAngles.value); 
 

// function checkTriangle(angle1.value, angle2.value, angle3) {
    
//     console.log(angle1.value + " is angle one");
//     let sumAngles=  angle1 + angle2 + angle3;
//     console.log(sumAngles);

// }


function checkTriangle() {
    for (let i=0; i < allAngles.length; i++) {
        console.log(allAngles[i].value);
    }
}


isTriangle.addEventListener("click", checkTriangle);