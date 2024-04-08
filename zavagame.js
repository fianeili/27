const dancers = [
  { name: "Popin Pete", 
  description: "Viņš ir leģendārās deju grupas “Electric Boogaloos” biedrs." },
  { name: "Laurieann Gibson", 
  description: "Viņa strādājusi ar daudziem pazīstamiem māksliniekiem, tostarp Ladiju Gagu, Bejonsē utt." },
  { name: "Hok", 
  description: "Plaši pazīstams, pateicoties savai dalībai populārajā televīzijas šovā “So You Think You Can Dance” ASV." },
  { name: "Lil Buck", 
  description: "Viņš kļuva slavens, pateicoties saviem priekšnesumiem kopā ar tādām mūzikas zvaigznēm kā Madonna un Yo-Yo Ma." },
  { name: "Les Twins", 
  description: "Tie ir divi dvīņi no Francija" }
];
let randDancer;
let cikburt;
let attempts;

function startGame() {
  const randomIndex = Math.floor(Math.random() * dancers.length);
  randDancer = dancers[randomIndex];
  cikburt = Array(randDancer.name.length).fill("_");
  attempts = 5;

  document.getElementById("description").textContent = randDancer.description;
  displayWord();
  displayattempts();
}

function displayWord() {
  document.getElementById("wordDisplay").textContent = cikburt.join(" ");
}

function displayAttempts() {
  document.getElementById("attempts").textContent = "Remaining attempts: " + attempts;
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();
  if (guess === randDancer.name.toLowerCase()) {
      document.getElementById("message").textContent = "Congratulations! You guessed: " + randDancer.name;
      document.getElementById("guessInput").setAttribute("disabled", true);
  } 
  else {
      attempts--;
      displayAttempts();
      if (attempts === 0) {
          document.getElementById("message").textContent = "Sorry, you didn't guess it. The hip-hop dancer you didn't guess was: " + randDancer.name;
          document.getElementById("guessInput").setAttribute("disabled", true);
      } 
      else {
          document.getElementById("message").textContent = "Incorrect :( Try again!";
      }
  }
  document.getElementById("guessInput").value = "";
}

startGame();

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