console.log("started");


// let angle1 = document.querySelector("#angle1");
// let angle2 = document.querySelector("#angle2");
// let angle3 = document.querySelector("#angle3"); 
let allAngles = document.querySelectorAll(".angle");
let isTriangle = document.querySelector("#btn-checkTri");




// function checkTriangle() {
//     for (let i=0; i < allAngles.length; i++) {
//         allAngles[i] = Number(allAngles[i]);
//         // console.log(allAngles[i].value);  
//     //    Number(allAngles[i].value) ;
//         let sumOfAngles = 0;
//         sumOfAngles = sumOfAngles + allAngles[i].value;    
//         return sumOfAngles;      
//         console.log(sumOfAngles + " is sum of angles");
//     }   
// }


function calculateSumOfAngles() {
    console.log(allAngles[0].value); 
    let x=  Number(allAngles[0].value);
    console.log(typeof(x));

    // let angleArray = [];
    // angleArray.push(allAngles.value); 
    // console.log(angleArray); 

    // for (let i =0; i < allAngles.length; i++) {
    //     Number(allAngles.value);
    //     let sum = 0;
    //     sum = sum + allAngles[i].value ;  
    //     return sum; 
    //     console.log("sume is " + sum);       
    // }
    
}

isTriangle.addEventListener("click", calculateSumOfAngles);