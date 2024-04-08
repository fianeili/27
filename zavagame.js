const dancers = [
    { name: "apple", 
      description: "A fruit with red or green skin and a crisp texture." },
    { name: "banana", 
      description: "A long, curved fruit with a yellow skin and soft flesh." },
    { name: "orange", 
      description: "A round fruit with a thick orange skin and juicy, sweet flesh." },
    { name: "grape", 
      description: "A small, sweet fruit that grows in clusters on vines." },
    { name: "kiwi", 
    description: "A small, brown fruit with green flesh and black seeds." }
];
let randDancer;
let guessedLetters;
let attempts

function startGame() {
    const randomIndex = Math.floor(Math.random() * dancers.length);
    randDancer = dancers[randomIndex];
    guessedLetters = Array(randDancer.name.length).fill("_");
    attempts = 5;

    document.getElementById("description").textContent = randDancer.description;
    displayWord();
    displayRemainingAttempts();
}

function displayWord() {
    document.getElementById("wordDisplay").textContent = guessedLetters.join(" ");
}

function displayRemainingAttempts() {
    document.getElementById("remainingAttempts").textContent = "Remaining attempts: " + remainingAttempts;
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess === randDancer.name) {
        document.getElementById("message").textContent = "Congratulations! You guessed the fruit: " + randDancer.name;
        document.getElementById("guessInput").setAttribute("disabled", true);
    } else {
        remainingAttempts--;
        displayRemainingAttempts();
        if (remainingAttempts === 0) {
            document.getElementById("message").textContent = "Sorry, you ran out of attempts. The fruit was: " + randDancer.name;
            document.getElementById("guessInput").setAttribute("disabled", true);
        } else {
            document.getElementById("message").textContent = "Incorrect guess! Try again.";
        }
    }
    document.getElementById("guessInput").value = "";
}

startGame();

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