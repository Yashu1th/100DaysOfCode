let count=0;
//let newVariable;
let newVariable=document.getElementById("para");
function increment(){
    document.getElementById("count").innerText=++count;
}

function decrement(){
    document.getElementById("count").innerText=--count;
}
function save(){
    //newVariable=count;
    newVariable.innerText +=count +"-";
    document.getElementById("count").innerText=0;
    count=0;
}


console.log(count);