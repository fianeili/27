function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth() + 1; 
  let year = date.getFullYear();

  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);
  document.getElementById("laiks").innerText = hour + " : " + min + " : " + sec + "  " + day + "." + month + "." + year;

  
  let t = setTimeout(currentTime, 1000);
}

function changeTime(i) {
  if (i < 10) {
    return "0" + i;
  }
  else {
    return i;
  }
}

currentTime();