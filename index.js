function getRandomNumber() {
    var randomNumber = Math.random();
    randomNumber *= 6;
    randomNumber = Math.floor(randomNumber) + 1;

    return randomNumber;
}

randomNumber1 = getRandomNumber();
randomNumber2 = getRandomNumber();

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Draw! 🎌";
}
