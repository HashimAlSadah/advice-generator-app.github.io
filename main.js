//----------Define variables and constants----------
const apiLink = "https://api.adviceslip.com/advice";
const button = document.querySelector(".button");
const advice = document.getElementById("advice-para");
const adviceId = document.getElementById("advice-id");
//------Show new Advice at the start of the page---------
getAdvice();

//-------------Functions--------------
function getAdvice(){
    fetch(`${apiLink}/${randomNumber()}`)
    .then(response => response.json())
    .then(data => {
        advice.innerText = data.slip.advice;
        adviceId.innerText = data.slip.id;
        console.log(advice.innerText, adviceId.innerText);
    })
}

function randomNumber(){
    return(Math.floor(Math.random() * 224) + 1); 
}


button.addEventListener("click", ()=> {
   getAdvice();
});




