const hour =document.querySelector('.hrs');
const minutes =document.querySelector('.mins');
const seconds =document.querySelector('.secs');


function runClock(){

    const time =new Date();

    const secs =time.getSeconds()/60;
    const mins =(secs+time.getMinutes())/60;
    const hrs  =(mins+time.getHours())/12;
    
    hour.style.setProperty('--rotation',hrs*360);
    minutes.style.setProperty('--rotation',mins*360);
    seconds.style.setProperty('--rotation',secs*360);


}

runClock();

setInterval(runClock,1000);

