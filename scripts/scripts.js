console.log("started");


// let angle1 = document.querySelector("#angle1");
// let angle2 = document.querySelector("#angle2");
// let angle3 = document.querySelector("#angle3"); 
let allAngles = document.querySelectorAll(".angle");
let isTriangle = document.querySelector("#btn-checkTri");
let showOutput = document.querySelector("#showOutput");  

let myArray = [];
let sum = 0;

function extractNumber() {
    for (let i=0; i < allAngles.length; i++) {
       let x=  Number(allAngles[i].value); 
        

       console.log(typeof(x) + "" + x); 
       myArray.push(x); 
    }
    console.log(myArray);
    calculateSumOfAngles(myArray, sum); 

}



function calculateSumOfAngles(someArray, sum) {
    for (let i=0; i < someArray.length; i++) {      
        sum = sum + someArray[i];       
    }
    console.log("total is " + sum); 

    if (sum === 180) {
        console.log("Triangle Yes");
    } else {
        console.log("No"); 
    }
}

isTriangle.addEventListener("click", extractNumber );

// calculateSumOfAngles



/*

// console.log(allAngles[0].value); 
    // let x=  Number(allAngles[0].value);
    
    // console.log(typeof(x));

    for (let i =0; i < allAngles.length; i++) {
        let y = Number(allAngles[i].value);
        // console.log("type of " +  allAngles[i].value + "is "  + typeof(y)); 
        let sum = 0;
        sum = sum + y ;      
        console.log(sum + " is the sum");
    }   
     

*/