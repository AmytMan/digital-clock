const hourE1 = document.getElementById('hour1');
const minutesE1 = document.getElementById("minute");
const secondsE1 = document.getElementById("second");
const ampmE1 = document.getElementById("a12")

setInterval(updateTime, 1000) ;
function updateTime(){

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let apm = "AM";
 if(h>12){
    h=h-12;
  apm="PM";
 }
 if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

hourE1.innerText = h;

minutesE1.innerText = m;
secondsE1.innerText = s;
ampmE1.innerText = apm;


}
