var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1+1); //random no.s 1-6

var randomImage = "dice" + randomNumber1 + ".png"; // getting random images

var randomImageSource= "images/" + randomImage; //saving images from 1-6

//changing the attribute of the element

var image1=document.querySelectorAll("img")[0]; //getting 1 image from html

image1.setAttribute("src", randomImageSource); //setting images on random basis here

//Creating random number 2 changing the attribute of the image 2

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2+1);

var randomImage2= "dice" + randomNumber2 + ".png";

var randomImageSource2= "images/" + randomImage2;

//changing the attribute of the element

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Message through winning and changing h1 tag text

if(randomNumber1> randomNumber2)
{
document.querySelector("h1").innerHTML="🎇 Player 1 Wins !! 🎇"
}
else if(randomNumber2>randomNumber1)
{
document.querySelector("h1").innerHTML="🎇 Player 2 Wins !! 🎇";
}
else{
    document.querySelector("h1").innerHTML="It's a Tie !! 😜"
}




