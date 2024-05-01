function compare(date1, date2) {
  if (date1.getTime() === date2.getTime()) {
    return "date1 = date2";
  } else if (date1.getTime() > date2.getTime()) {
    return "date1 > date2";
  } else {
    return "date1 < date2";
  }
}
var date1 = new Date("2019/11/14 00:00");
var date2 = new Date("2019/11/14 00:00");
console.log(compare(date1, date2));
