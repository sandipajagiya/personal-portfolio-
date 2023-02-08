const styleSwitcherToggler= document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click",()=>{
document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){

        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternatestyles =document.querySelectorAll(".alternate-style");


function setActiveStyle(color){
alternatestyles.forEach((style)=>{
    if(color == style.getAttribute("title")){
        style.removeAttribute("disabled");
    }
    else{
        style.setAttribute("disabled","true");
    }
})
}

const dayNight=document.querySelector(".day-night");

dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fas");
    dayNight.querySelector("i").classList.toggle("fas");
    document.body.classList.toggle("dark")



})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fas");
    }
    else{
        dayNight.querySelector("i").classList.add("fab-moon");
    }
})