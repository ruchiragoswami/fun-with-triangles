let side1 = document.querySelector("#side-1");
let side2 = document.querySelector("#side-2");
let btnHypo = document.querySelector("#btn-hypo");
let showResult = document.querySelector("#output-hypo"); 



function calculateHypotenuse() {


    

    let a = side1.value * side1.value;
    let b = side2.value * side2.value;
    console.log(a+b);
    let c = Math.sqrt(a+b); 
    let d = c.toFixed(2); 
    console.log(c); 
    console.log(d); 

    showResult.innerText = `The length of hypotenuse is ${d}`; 

}



btnHypo.addEventListener("click", calculateHypotenuse);

