
/*setTimeout(()=>{
    
}, "1000");
*/


const intervalExit = setInterval(exit, 6000)

function start(){
    let step2 =  document.getElementById("step1")
    let secondh2 =  document.getElementById("secondh2")
    let firstp =  document.getElementById("firstp")
      
    step1.style.opacity = 1
    firsth2.style.opacity = 1
    firsth2.style.top = 0
    firstp.style.opacity = 1
    firstp.style.bottom = 0  
   
    setTimeout(()=>{
        step1.style.opacity = 0
        firsth2.style.opacity = 0
        firstp.style.opacity = 0
    }, "7000");
}


setTimeout(()=>{
    step2
}, "500");


function step2(){
    let step2 =  document.getElementById("step2")
    let secondh2 =  document.getElementById("secondh2")
    let secondp =  document.getElementById("secondp")
    
    step2.style.opacity = 1
    secondh2.style.opacity = 1
    secondh2.style.top = 0
    secondp.style.opacity = 1
    secondp.style.bottom = 0

    setTimeout(()=>{
        step2.style.opacity = 0
        secondh2.style.opacity = 0
        secondp.style.opacity = 0
    }, "7000");
}