
//const intervalExit = setInterval(exit, 6000)
let step1 =  document.getElementById("step1");
let firsth2 =  document.getElementById("firsth2");
let firstp =  document.getElementById("firstp");

function start(){
    step1.style.opacity = 1;
    firsth2.style.opacity = 1;
    firsth2.style.top = 0
    firstp.style.opacity = 1;
    firstp.style.bottom = 0;
   
    setTimeout(()=>{
        step1.style.opacity = 0;
        firsth2.style.opacity = 0;
        firstp.style.opacity = 0;
    }, "5000");

    setTimeout(()=>{
        step2f()   
    }, "6000");  
     
};

let step2 =  document.getElementById("step2");
let secondh2 =  document.getElementById("secondh2");
let secondp =  document.getElementById("secondp");

function step2f(){ 
    step1.style.display = "none";
    step2.style.display = "block" ;

    step2.style.opacity = 1;
    secondh2.style.opacity = 1;
    secondh2.style.top = 0;
    secondp.style.opacity = 1;
    secondp.style.bottom = 0;

    setTimeout(()=>{
        step2.style.opacity = 0;
        secondh2.style.opacity = 0;
        secondp.style.opacity = 0;
    }, "10000");

   setTimeout(()=>{
        step3f()   
    }, "11000"); 
};

    let step3 =  document.getElementById("step3");
    let thirdh2 =  document.getElementById("thirdh2");
    let thirdp =  document.getElementById("thirdp");

function step3f(){
    step2.style.display = "none";
    step3.style.display = "block" ;

    step3.style.opacity = 1;
    thirdh2.style.opacity = 1;
    thirdh2.style.top = 0;
    thirdp.style.opacity = 1;
    thirdp.style.bottom = 0;

    setTimeout(()=>{
        step3.style.opacity = 0;
        thirdh2.style.opacity = 0;
        thirdp.style.opacity = 0;
    }, "8000");

    setTimeout(()=>{
        step4f()   
    }, "9000"); 
};

let step4 =  document.getElementById("step4");
let fourh2 =  document.getElementById("fourh2");
let fourp =  document.getElementById("fourp");

function step4f(){
    step3.style.display = "none";
    step4.style.display = "block" ;

    step4.style.opacity = 1;
    fourh2.style.opacity = 1;
    fourh2.style.top = 0;
    fourp.style.opacity = 1;
    fourp.style.bottom = 0;

    setTimeout(()=>{
        step4.style.opacity = 0;
        fourh2.style.opacity = 0;
        fourp.style.opacity = 0;
    }, "7000");

    setTimeout(()=>{
        step5f()   
    }, "8000"); 
};

let step5 =  document.getElementById("step5");
let fiveh2 =  document.getElementById("fiveh2");
let fivep =  document.getElementById("fivep");

function step5f(){ 
    step4.style.display = "none";
    step5.style.display = "block" ;

    step5.style.opacity = 1;
    fiveh2.style.opacity = 1;
    fiveh2.style.top = 0;
    fivep.style.opacity = 1;
    fivep.style.bottom = 0;

    setTimeout(()=>{
        step5.style.opacity = 0;
        fiveh2.style.opacity = 0;
        fivep.style.opacity = 0;
    }, "10000");


};