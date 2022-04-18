var Memory;
(function (Memory) {
    /**
    * Aufgabe: L03_MemorySettings
    * Name: Elena Maria Voulgaridis
    * Matrikel: 269367
    * Datum: 17.04.2022
    */
    let cardPairAmount;
    let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardSettings = [];
    let cardArray = [];
    let cardContainer = [];
    let cardField;
    // Empty array to store the matched cards
    let matched = 0;
    let timeCounter;
    let seconds = 0;
    let minutes = 0;
    let startBtn;
    let formSettings;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // add EventListener to the form from the home page
        formSettings = document.querySelector("#form");
        formSettings.addEventListener("submit", handleSettingChange);
        // add EventListener to Start-Button
        startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", gameStart);
        cardField = document.querySelector("#wrapper");
        timeCounter = document.querySelector("#timer");
    }
    function handleSettingChange(_event) {
        // Information from "form" is passed on to cardSettings-Array
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        cardSettings = [];
        for (let memory of formData) {
            cardSettings.push(String(memory[1]));
        }
        gameStart();
    }
    function createCards() {
        cardPairAmount = Number(cardSettings[0]);
        for (let currentIndex = 0; currentIndex < 2; currentIndex++) {
            for (let x = 0; x < cardPairAmount; x++) {
                cardArray.push(cardNumber[x]);
            }
        }
        shuffle();
        for (let currentIndex = 0; currentIndex < cardArray.length; currentIndex++) {
            let card = document.createElement(thisElement());
            // Apply settings to cards
            card.style.width = cardSettings[1] + "px";
            card.style.height = cardSettings[1] + "px";
            card.style.background = cardSettings[3];
            card.style.color = cardSettings[4];
            document.body.style.backgroundColor = cardSettings[2];
            document.body.style.fontFamily = cardSettings[5];
            card.innerHTML = "<span>" + cardArray[currentIndex] + "</span>";
            cardField.appendChild(card);
            cardField.appendChild(timeCounter);
            card.addEventListener("click", turnCard);
            let memoryCards = document.querySelectorAll("span");
            memoryCards[currentIndex].classList.add("visible");
        }
        function thisElement() {
            return "div";
        }
    }
    function shuffle() {
        for (let i = cardArray.length - 1; i > 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));
            let temporary = cardArray[i];
            cardArray[i] = cardArray[randomNumber];
            cardArray[randomNumber] = temporary;
        }
    }
    function gameStart() {
        formSettings.classList.add("hidden");
        startBtn.classList.add("hidden");
        createCards();
        startTimer();
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        seconds++;
        if (seconds == 59) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10) {
            document.querySelector("#timer").innerHTML = "0" + minutes + ":" + "0" + seconds;
        }
        else if (minutes < 10) {
            document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        }
        else {
            document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
        }
    }
    function turnCard(_event) {
        let target = _event.target;
        cardContainer.push(target);
        cardContainer[0].querySelector("span").classList.remove("visible");
        if (cardContainer.length == 2) {
            cardContainer[1].querySelector("span").classList.remove("visible");
            setTimeout(checkCards, 500);
        }
    }
    function checkCards() {
        let clickedCard0 = cardContainer[0].querySelector("span").innerHTML;
        let clickedCard1 = cardContainer[1].querySelector("span").innerHTML;
        if (clickedCard0 == clickedCard1) {
            cardContainer[0].classList.add("visible");
            cardContainer[1].classList.add("visible");
            cardContainer = [];
            matched++;
            endGame();
        }
        else {
            cardContainer[0].style.background = cardSettings[3];
            cardContainer[1].style.background = cardSettings[3];
            cardContainer[0].querySelector("span").classList.add("visible");
            cardContainer[1].querySelector("span").classList.add("visible");
            cardContainer = [];
        }
    }
    function endGame() {
        if (matched == cardPairAmount) {
            window.alert("Du hast Gewonnen! " + minutes + " Minute(n) und " + seconds + " Sekunden");
            // After the game - player ist taken to the home page (settings) 
            location.reload();
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memorySettings.js.map