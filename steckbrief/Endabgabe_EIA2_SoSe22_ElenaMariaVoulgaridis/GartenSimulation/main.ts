namespace GardenSimulation {
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let cr2: CanvasRenderingContext2D;
    export let allFields: Field[] = [];
    export let allPlants: Plant[] = [];
    export let player: Player = new Player();
    export let mX: number;
    export let mY: number;
    export let time: number = 0;
    export let animationTime: number = 0;
    export let allBugs: Bug[] = [];
    let gameField: HTMLDivElement;

    let formValues: FormData;
    export let money: number;
    let moneyChange: number;

    export let fertilizerAmount: number = 0;
    let fertilizerPrice: number = 10;
    let fertilizerPriceNew: number;

    export let pesticideAmount: number = 0;
    let pesticidePriceNew: number;
    let pestizidePrice: number = 5;

    function handleLoad(): void {
        Load.loading();

        let assets: HTMLDivElement = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");

        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");

        let startButton: HTMLButtonElement = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }

    function buildField(): void {
        getFormSettings();
        update();
        createGameBtn();
        createGardenField(); 
        startTimer();
        startTimerShop();

        gameField.style.visibility = ("visible");

        let formData: HTMLDivElement = document.querySelector("#settings");
        formData.setAttribute("style", "display:none");
    }

    function createGardenField(): void {
        for (let i: number = 0; i < 4; i++) {
            for (let j: number = 0; j < 10; j++) {
                allFields.push(new Field(j, i));
            }
        }
        for (let field of allFields) {
            field.draw();
        }
    }

    function createGameBtn(): void {
        canvas = document.querySelector("canvas");
        cr2 = canvas.getContext("2d");
        cr2.fillStyle = "red";
        cr2.fillRect(0, 0, 100, 100);
        canvas.height = 400;
        canvas.width = 4000;
        canvas.addEventListener("click", (evt) => {getMousePosition(evt); });

        let buyBtn1: HTMLInputElement = document.querySelector("#buyAnanas");
        let seedButton1: HTMLInputElement = document.querySelector("#s1");
        buyBtn1.addEventListener("click", () => player.buy(buyBtn1.value) );
        seedButton1.addEventListener("click", () => player.plant(seedButton1.value) );

        let buyBtn2: HTMLInputElement = document.querySelector("#buyBlueberry");
        let seedButton2: HTMLInputElement = document.querySelector("#s2");
        buyBtn2.addEventListener("click", () => player.buy(buyBtn2.value) );
        seedButton2.addEventListener("click", () => player.plant(seedButton2.value) );

        let buyBtn3: HTMLInputElement = document.querySelector("#buyMelon");
        let seedButton3: HTMLInputElement = document.querySelector("#s3");
        buyBtn3.addEventListener("click", () => player.buy(buyBtn3.value) );
        seedButton3.addEventListener("click", () => player.plant(seedButton3.value) );

        let buyBtn4: HTMLInputElement = document.querySelector("#buyRasberry");
        let seedButton4: HTMLInputElement = document.querySelector("#s4");
        buyBtn4.addEventListener("click", () => player.buy(buyBtn4.value) );
        seedButton4.addEventListener("click", () => player.plant(seedButton4.value) );

        let buyBtn5: HTMLInputElement = document.querySelector("#buyStrawberry");
        let seedButton5: HTMLInputElement = document.querySelector("#s5");
        buyBtn5.addEventListener("click", () => player.buy(buyBtn5.value) );
        seedButton5.addEventListener("click", () => player.plant(seedButton5.value) );

        let buyfertilize: HTMLInputElement = document.querySelector("#buyFertilize");
        let fertilizeButton: HTMLInputElement = document.querySelector("#f");
        buyfertilize.addEventListener("click", stackfertilize);
        fertilizeButton.addEventListener("click", player.fertilize);

        let buypestizide: HTMLInputElement = document.querySelector("#buyPesticide");
        let pesticideButton: HTMLInputElement = document.querySelector("#p");
        buypestizide.addEventListener("click", stackpesticide);
        pesticideButton.addEventListener("click", player.pesticide);


        let harvestButton: HTMLInputElement = document.querySelector("#h");
        harvestButton.addEventListener("click", player.harvest);

        let waterButton: HTMLInputElement = document.querySelector("#w");
        waterButton.addEventListener("click", player.water);
    }

    function getMousePosition(_evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        mX = _evt.clientX - rect.left;
        mY = _evt.clientY - rect.top;
        for (let field of allFields) {
            field.isHit(mX, mY);
        }
    }

    function getFormSettings(): void {
        formValues = new FormData(document.forms[0]);
        money = Number(formValues.get("capital"));
        moneyChange = Number(formValues.get("schwankung"));
    }

    function startTimer(): void {
        setInterval(timer, 1000);
    }

    export function timer(): void {
        time ++;
        // cr2.clearRect(0, 0, canvas.width, canvas.height);
        // createGardenField();
        for (let field of allFields) {
            field.draw();
        }
        cr2.resetTransform();
        for (let plant of allPlants) {  
            plant.grow();
            plant.plantNeedsWater(); 
            plant.plantNeedsDuenger();
            plant.draw();
            //randomNumber(plant);
        }
        // for (let pest of allBugs) {
        //     pest.draw();
        // }
        document.querySelector("#money").innerHTML = "Money: " + money + " €";
    }

    // function randomNumber(_plant: Plant): void {
    //     let randomEvent: number = Math.random() * 60;
    //     if (randomEvent < 2) {
    //         _plant.createBug();
    //     }
    // }

    export function startTimerShop(): void {
        setInterval(update, 3000);
    }

    function stackfertilize (): void {
        fertilizerAmount++;
        updateSeedAmount();
    }

    function stackpesticide (): void {
        pesticideAmount++;
        updateSeedAmount();
    }

    function update (): void {
        Ananas.priceNeu = Ananas.price + (Math.floor(Math.random() * moneyChange));
        Blueberry.priceNeu = Blueberry.price + (Math.floor(Math.random() * moneyChange));
        Raspberry.priceNeu = Raspberry.price + (Math.floor(Math.random() * moneyChange));
        Melon.priceNeu = Melon.price + (Math.floor(Math.random() * moneyChange));
        Strawberry.priceNeu = Strawberry.price + (Math.floor(Math.random() * moneyChange));
        fertilizerPriceNew = fertilizerPrice + (Math.floor(Math.random() * moneyChange));
        pesticidePriceNew = pestizidePrice + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }


    export function getRandomInt(_min: number, _max: number): number {
        let min: number = Math.ceil(_min);
        let max: number = Math.floor(_max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function updatePrice (): void {
        document.querySelector("#ananasPrice").innerHTML = Ananas.priceNeu.toString() + "€";
        document.querySelector("#blueberryPrice").innerHTML = Blueberry.priceNeu.toString() + "€";
        document.querySelector("#melonPrice").innerHTML = Melon.priceNeu.toString() + "€";
        document.querySelector("#raspberryPrice").innerHTML = Raspberry.priceNeu.toString() + "€";
        document.querySelector("#strawberryPrice").innerHTML = Strawberry.priceNeu.toString() + "€";
        document.querySelector("#fertilizePrice").innerHTML = pesticidePriceNew.toString() + "€";
        document.querySelector("#pesticidePrice").innerHTML = fertilizerPriceNew.toString() + "€";
    }

    export function updateSeedAmount(): void {
        document.querySelector("#ananasAmount").innerHTML = Ananas.seedamount.toString();
        document.querySelector("#blueberryAmount").innerHTML = Blueberry.seedamount.toString();
        document.querySelector("#melonAmount").innerHTML = Melon.seedamount.toString();
        document.querySelector("#raspberryAmount").innerHTML = Raspberry.seedamount.toString();
        document.querySelector("#strawberryAmount").innerHTML = Strawberry.seedamount.toString();
        document.querySelector("#fertilizeAmount").innerHTML = fertilizerAmount.toString();
        document.querySelector("#pesticideAmount").innerHTML = pesticideAmount.toString();
    }

}