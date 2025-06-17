/* arrow function, converting number to string, padstart used for adding 0 in empty space like 00.00.12 */
const pad = n => n.toString().padStart(2, "0");

function updateClock() {
  const now   = new Date();
  const hrs   = pad(now.getHours());
  const mins  = pad(now.getMinutes());
  const secs  = pad(now.getSeconds());
// we can use innerHTML or textcontent
  document.getElementById("clock").innerHTML = `${hrs}:${mins}:${secs}`;
}

/* To call the function updateclock */
updateClock();
// to show the update time
setInterval(updateClock, 1000);
