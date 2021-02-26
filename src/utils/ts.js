export const tsToStr = function(ts) {
  let date = new Date(ts * 1000);
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.getHours() + ": " + date.getMinutes();
}