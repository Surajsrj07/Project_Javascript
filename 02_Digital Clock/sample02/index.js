
const clock =document.querySelector(".clock");


function digital(){
//current time
var time =new Date();
//console.log(time);

//get hrs
var hrs = time.getHours();
//console.log(hrs);
//get mins
var mins= time.getMinutes();
//console.log(mins);
//get secs
var secs=time.getSeconds();
//console.log(secs);

var txt ="AM";

if(hrs>12){
    hrs=hrs-12;
    txt="PM";
}else if(hrs==0){
    hrs=12;
    txt="AM";
}

hrs=hrs<10?"0"+hrs:hrs;
mins=mins<10?"0"+mins:mins; 
secs=secs<10?"0"+secs:secs;

const h =document.querySelectorAll(".h");
const m =document.querySelectorAll(".m");
const s =document.querySelectorAll(".s");

hrs=hrs.toString();
h[0].innerHTML =hrs.h[0];
h[1].innerHTML =hrs.h[1];

mins=mins.toString();
m[0].innerHTML=mins.m[0]
m[1].innerHTML=mins.m[1]

secs=secs.toString();
s[0].innerHTML=mins.s[0]
s[1].innerHTML=secs.s[1]

}

setInterval(digital,1000);