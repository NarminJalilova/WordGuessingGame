//funksiya yaratdiq 
//funksiya icinde array yaratdiq
//random index yaratdi
//random indexdeki sozu secdi
//secilen sozu _ ile evez etdik
//3 can yaratdiq
//prompt ile userden herf istedik
//eger secilen sozde userin daxil etdiyi herf varsa _ ile evez etdik
//eger secilen sozde userin daxil etdiyi herf yoxdursa canini azaldiriq ve canini gosterdik     
//eger cani 0 olarsa usere bildirdik ki oyunu itirdiniz

function wordGame () {
    let arr = ['cat', 'dog', 'elephant', 'giraffe', 'bison']
    let randomIndex = Math.floor (Math.random () *arr.length);
    let randomWord = arr[randomIndex];
    let hiddenWord = randomWord.split ("").fill("_");
    let lives = 3;
    let guessLetter = [];
   

while (lives>0 && hiddenWord.includes ("_")) {
    alert (`Your word consist of: ${hiddenWord.join("").length} letter`);
    alert (`Your previous guesses are: ${guessLetter.join(" ")}`);
    let userGuess = prompt ("Guess a letter or the whole word");
    guessLetter.push(userGuess)
    if (randomWord.includes(userGuess)){
        for (let i=0; i<randomWord.length;i++) {
            if (randomWord[i]===userGuess){
                hiddenWord[i]=userGuess;
            } 
        }
    }else {
        lives--;
        alert (`You have ${lives} lives left`)
    }
}
if (hiddenWord.includes ("_")) {
    alert (`You have lost. The word was ${randomWord}`)
}else {
    alert (`You have won. The word was ${randomWord}`)
}
}
wordGame();