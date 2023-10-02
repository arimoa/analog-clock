const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const dayEl = document.getElementById("day-container");

let currentTime;
let hour;
let minute;
let second;
let analogHour;
let analogMinute;
let analogSecond;
let day;

function currentTimeFunction() {
  currentTime = new Date();
  hour = currentTime.getHours();
  minute = currentTime.getMinutes();
  second = currentTime.getSeconds();
  analogHour = (hour / 12) * 360;
  analogMinute = (minute / 60) * 360;
  analogSecond = (second / 60) * 360;
  hourEl.style.transform = `rotate(${analogHour + (minute / 61) * 30}deg)`;
  minuteEl.style.transform = `rotate(${analogMinute}deg)`;
  secondEl.style.transform = `rotate(${analogSecond}deg)`;
  day = currentTime.getDate();
  dayEl.innerHTML = day;
}
setInterval(currentTimeFunction, 1000);
