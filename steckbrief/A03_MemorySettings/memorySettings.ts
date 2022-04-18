namespace Memory {
    /**
    * Aufgabe: L03_MemorySettings
    * Name: Elena Maria Voulgaridis
    * Matrikel: 269367
    * Datum: 17.04.2022
    */
    
    let cardPairAmount: number;
    let cardNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardSettings: string[] = [];
    let cardArray: number[] = [];
    let cardContainer: HTMLElement[] = [];
    let cardField: HTMLElement;
    
    // Empty array to store the matched cards
    let matched: number = 0;

    let timeCounter: HTMLElement;
    let seconds: number = 0;
    let minutes: number = 0;

    let startBtn: HTMLElement;
    let formSettings: HTMLFormElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        // add EventListener to the form from the home page
        formSettings = document.querySelector("#form");
        formSettings.addEventListener("submit", handleSettingChange);
        // add EventListener to Start-Button
        startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", gameStart);
    
        cardField = document.querySelector("#wrapper");  
        timeCounter = document.querySelector("#timer");  
    }

    function handleSettingChange(_event: Event): void {
        // Information from "form" is passed on to cardSettings-Array
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);        
        cardSettings = [];

        for (let memory of formData) {
            cardSettings.push(String(memory[1]));
        }         
        gameStart();
    }

    function createCards(): void {
        cardPairAmount = Number(cardSettings[0]);
        for (let currentIndex: number = 0; currentIndex < 2; currentIndex++) {            
            for (let x: number = 0; x < cardPairAmount; x++) {
                cardArray.push(cardNumber[x]);
            }
        }
        
        shuffle();
        
        for (let currentIndex: number = 0; currentIndex < cardArray.length; currentIndex++) {
            let card: HTMLElement = document.createElement(thisElement());
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
            let memoryCards: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            memoryCards[currentIndex].classList.add("visible");


        }

        function thisElement(): "div" {
            return "div";
        }
    }

    function shuffle(): void {
        for (let i: number = cardArray.length - 1; i > 0; i--) {
            let randomNumber: number = Math.floor(Math.random() * (i + 1));  
            let temporary: number = cardArray[i];   
            cardArray[i] = cardArray[randomNumber];
            cardArray[randomNumber] = temporary;
        }
    }

    function gameStart(): void {     
        formSettings.classList.add("hidden");
        startBtn.classList.add("hidden");
        createCards();
        startTimer();
    }

    function startTimer(): void {
        setInterval(timer, 1000);
    }

    function timer(): void {
        seconds++;
        if (seconds == 59) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10) {
            document.querySelector("#timer")!.innerHTML = "0" + minutes + ":" + "0" + seconds;
        }
        else if (minutes < 10) {
            document.querySelector("#timer")!.innerHTML = "0" + minutes + ":" + seconds;
        }
        else { 
            document.querySelector("#timer")!.innerHTML = minutes + ":" + seconds; 
    }}

    function turnCard(_event: Event): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        cardContainer.push(target);

        cardContainer[0].querySelector("span").classList.remove("visible");
        
        if (cardContainer.length == 2) {
            cardContainer[1].querySelector("span").classList.remove("visible");
            setTimeout(checkCards, 500);
        }
    }

    function checkCards(): void {
        let clickedCard0: string = cardContainer[0].querySelector("span").innerHTML;
        let clickedCard1: string = cardContainer[1].querySelector("span").innerHTML;
        
        if (clickedCard0 == clickedCard1) {
            cardContainer[0].classList.add("visible");
            cardContainer[1].classList.add("visible");
            cardContainer = [];
            matched++;
            endGame();
        } else {
            cardContainer[0].style.background = cardSettings[3];
            cardContainer[1].style.background = cardSettings[3];
            cardContainer[0].querySelector("span").classList.add("visible");
            cardContainer[1].querySelector("span").classList.add("visible");
            cardContainer = [];
        }
    }

    function endGame(): void {
        if (matched == cardPairAmount) {
            window.alert("Du hast Gewonnen! " + minutes + " Minute(n) und " + seconds + " Sekunden");
            
            // After the game - player ist taken to the home page (settings) 
            location.reload();
        }
    }

}