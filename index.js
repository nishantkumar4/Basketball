let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let homeCount=0
let guestCount=0

function plusonehome(){
    homeCount+=1
    scoreHome.textContent=homeCount
}

function plustwohome(){
    homeCount+=2
    scoreHome.textContent=homeCount   
}

function plusthreehome(){
    homeCount+=3
    scoreHome.textContent=homeCount 
}

function plusoneguest(){
    guestCount+=1
    scoreGuest.textContent=guestCount
}

function plustwoguest(){
    guestCount+=2
    scoreGuest.textContent=guestCount
}

function plusthreeguest(){
    guestCount+=3
    scoreGuest.textContent=guestCount
}