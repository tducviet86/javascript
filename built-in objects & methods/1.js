var date = new Date("2022-07-10 23:00:00");

function updateSecond(second) {
  date.setSeconds(date.getSeconds() + 1);
  console.log(date.getSeconds());
}
setInterval(updateSecond, 1000);
