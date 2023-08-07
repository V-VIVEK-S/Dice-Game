var randomNumber1 = Math.random();
var floorNumber = Math.floor((randomNumber1 * 6)+1);
console.log(randomNumber1);

function selectPicture(){
    if (floorNumber === 1){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
    }
    else if (floorNumber === 2){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
    }
    else if (floorNumber === 3){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
    }
    else if (floorNumber === 4){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
    }
    else if (floorNumber === 5){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
    }
    else if (floorNumber === 6){
        return document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
    }
    
}

var randomNumber2 = Math.random();
var floorNumber2 = Math.floor((randomNumber2 * 6)+1);

function selectPicture2(){
    if (floorNumber2 === 1){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
    }
    else if (floorNumber2 === 2){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
    }
    else if (floorNumber2 === 3){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
    }
    else if (floorNumber2 === 4){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
    }
    else if (floorNumber2 === 5){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
    }
    else if (floorNumber2 === 6){
        return document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
    }
    
}
selectPicture();
selectPicture2();
function winner(){
    if (floorNumber ==floorNumber2){
        return document.querySelector("h1").innerHTML = "🚩Draw🚩";
    }
    else if (floorNumber > floorNumber2){
        return document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    }
    else if (floorNumber < floorNumber2){
        return document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }

}
winner();