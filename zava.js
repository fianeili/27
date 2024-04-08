function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth() + 1; // Месяцы начинаются с 0, поэтому добавляем 1
  var year = date.getFullYear();

  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);
  document.getElementById("laiks").innerText = hour + " : " + min + " : " + sec + "  " + day + "." + month + "." + year;

  
  var t = setTimeout(currentTime, 1000);
}

function changeTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();