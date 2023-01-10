let homeScore=0;
let guestScore=0;

function homeOne(){
    homeScore+=1;
    document.getElementById("home").textContent=homeScore;
}
function homeTwo(){
    homeScore+=2;
    document.getElementById("home").textContent=homeScore;
}
function homeThree(){
    homeScore+=3;
    document.getElementById("home").textContent=homeScore;
}
function guestOne(){
    guestScore+=1;
    document.getElementById("guest").textContent=guestScore;
}
function guestTwo(){
    guestScore+=2;
    document.getElementById("guest").textContent=guestScore;
}
function guestThree(){
    guestScore+=3;
    document.getElementById("guest").textContent=guestScore;
}

// if(homeScore>guestScore){
//     document.getElementById("result").textContent="Home leading";
// }
// else if(homeScore<guestScore){
//     document.getElementById("result").textContent="Guest leading";
// }
// else{
//     document.getElementById("result").textContent="Draw";
// }
