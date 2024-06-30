const degrees=document.getElementById("degrees");
const type=document.getElementById("type");
const showresult=document.getElementById("showresult");
const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    const dVlaue=degrees.value;
    if(type.value==="Fahrenheit"){
        const resultF = (dVlaue * 9/5) + 32;
        showresult.innerHTML=`${resultF}F`;
    }
    else if(type.value==="Kelvin"){
        const resultK = dVlaue + 273.15;
        showresult.innerHTML=`${resultK}K`;
    }
})