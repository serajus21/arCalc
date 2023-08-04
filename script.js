let n1, n2;
let sumR,subR,multR,divR;
let outputR = document.getElementById("userOutput");

// userInput
function input()
{
    n1 = parseFloat(document.getElementById("v1").value);
    n2 = parseFloat(document.getElementById("v2").value);
}

//sum
function sum() {sumR=n1+n2; outputR.innerHTML="The summation result is: "+sumR;}
function sub() {subR=n1-n2; outputR.innerHTML="The substraction result is: "+subR;}
function mult() {multR=n1*n2; outputR.innerHTML="The multiplication resutl is: "+multR;}
function div() {divR=n1/n2; outputR.innerHTML="The division result is: "+divR}