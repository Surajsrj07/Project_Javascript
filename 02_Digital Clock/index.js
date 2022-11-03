const clock = document.querySelector(".clock");

function digitalClock(){

    //current time
    var time = new Date();
    //getting hours
    var hrs = time.getHours();
   //getting minutes
   var mins = time.getMinutes();
   //getting seconds
   var secs = time.getSeconds();
   //am or pm  -default-
   var txt ="AM";

   if(hrs>12){
    hrs=hrs-12;
    txt ="PM";
   }
   else if(hrs==0){
    hrs=12;
    txt="AM";
   }

   hrs=hrs<10?"0"+hrs:hrs;
   mins=mins<10?"0"+mins:mins;
   secs=secs<10?"0"+secs:secs;

   clock.innerHTML=`${hrs} : ${mins} : ${secs} ${txt}`;
   

} 


setInterval(digitalClock,1000);