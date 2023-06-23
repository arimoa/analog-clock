var hourEl = document.getElementById("hour");
var minuteEl = document.getElementById("minute");
var secondEl = document.getElementById("second");
var dayEl = document.getElementById("day-container");

var currentTime;
var hour;
var minute;
var second;
var analogHour;
var analogMinute;
var analogSecond;
var day;

function currendTimeFunction() {
  currentTime = new Date();
  hour = currentTime.getHours();
  minute = currentTime.getMinutes();
  second = currentTime.getSeconds();
  console.log(hour, minute, second);
  analogHour = (hour / 24) * 360;
  analogMinute = (minute / 60) * 360;
  analogSecond = (second / 60) * 360;
  hourEl.style.transform = `rotate(${analogHour + (minute / 61) * 30}deg)`;
  minuteEl.style.transform = `rotate(${analogMinute}deg)`;
  secondEl.style.transform = `rotate(${analogSecond}deg)`;
  day = currentTime.getDate();
  dayEl.innerHTML = day;
}
setInterval(currendTimeFunction, 1000);