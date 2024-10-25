function bartSentenceRepeat() {
    //get the values from HTML.
    const thePhrase = document.getElementById("mySentence").value;
    const theNumber = document.getElementById("myRepeat").value;

    //the results aren't showing anything yet.
    const theResult = document.getElementById("repetition");
    theResult.innerHTML="";

    for(let i=0; i < theNumber; i++) {
        theResult.innerHTML += (i + 1) + ". " + thePhrase + "<br>";
    }
}

window.onload = function() {
    const myButton = document.getElementById("submitHere");
    myButton.onclick = bartSentenceRepeat; 
};