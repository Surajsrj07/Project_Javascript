const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function counterTimer(){

//Curent Date
const currentDate = new Date();
//console.log(currentDate);

//Current Year
const currentYear = new Date().getFullYear();
//console.log(currentYear);

// New Year
const newYear =new Date(`January 1 ${currentYear+1} 00:00:00`);
//console.log(newYear);


//Difference b/w current date & New year

 const diff = newYear - currentDate;
 //console.log(diff);

 const d =Math.floor(diff/1000/60/60/24);
 console.log(d);

 const h = Math.floor((diff/1000/60/60)%24);
 console.log(h);

 const m = Math.floor((diff/1000/60)%60);
 console.log(m);

 const s =Math.floor((diff/1000)%60);
 console.log(s);

days.innerHTML = d<0?"0"+d:d;
hours.innerHTML = h<10?"0"+h:h;
minutes.innerHTML =m<0?"0"+m:m;
seconds.innerHTML = s<0?"0"+s:s;

};


setInterval(counterTimer,1000);






//Things to recall

// 1000 ms = 1 sec
//   60 sec = 1 min
//   60 min = 1 hrs
//   24 hrs = 1 day


