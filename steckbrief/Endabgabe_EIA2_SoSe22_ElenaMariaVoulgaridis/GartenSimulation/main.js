var GardenSimulation;
(function (GardenSimulation) {
    window.addEventListener("load", handleLoad);
    GardenSimulation.allFields = [];
    GardenSimulation.allPlants = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    GardenSimulation.animationTime = 0;
    GardenSimulation.allBugs = [];
    let gameField;
    let formValues;
    let moneyChange;
    GardenSimulation.fertilizerAmount = 0;
    let fertilizerPrice = 10;
    let fertilizerPriceNew;
    GardenSimulation.pesticideAmount = 0;
    let pesticidePriceNew;
    let pestizidePrice = 5;
    function handleLoad() {
        GardenSimulation.Load.loading();
        let assets = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");
        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }
    function buildField() {
        getFormSettings();
        update();
        createGameBtn();
        createGardenField();
        startTimer();
        startTimerShop();
        gameField.style.visibility = ("visible");
        let formData = document.querySelector("#settings");
        formData.setAttribute("style", "display:none");
    }
    function createGardenField() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                GardenSimulation.allFields.push(new GardenSimulation.Field(j, i));
            }
        }
        for (let field of GardenSimulation.allFields) {
            field.draw();
        }
    }
    function createGameBtn() {
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.cr2.fillStyle = "red";
        GardenSimulation.cr2.fillRect(0, 0, 100, 100);
        GardenSimulation.canvas.height = 400;
        GardenSimulation.canvas.width = 4000;
        GardenSimulation.canvas.addEventListener("click", (evt) => { getMousePosition(evt); });
        let buyBtn1 = document.querySelector("#buyAnanas");
        let seedButton1 = document.querySelector("#s1");
        buyBtn1.addEventListener("click", () => GardenSimulation.player.buy(buyBtn1.value));
        seedButton1.addEventListener("click", () => GardenSimulation.player.plant(seedButton1.value));
        let buyBtn2 = document.querySelector("#buyBlueberry");
        let seedButton2 = document.querySelector("#s2");
        buyBtn2.addEventListener("click", () => GardenSimulation.player.buy(buyBtn2.value));
        seedButton2.addEventListener("click", () => GardenSimulation.player.plant(seedButton2.value));
        let buyBtn3 = document.querySelector("#buyMelon");
        let seedButton3 = document.querySelector("#s3");
        buyBtn3.addEventListener("click", () => GardenSimulation.player.buy(buyBtn3.value));
        seedButton3.addEventListener("click", () => GardenSimulation.player.plant(seedButton3.value));
        let buyBtn4 = document.querySelector("#buyRasberry");
        let seedButton4 = document.querySelector("#s4");
        buyBtn4.addEventListener("click", () => GardenSimulation.player.buy(buyBtn4.value));
        seedButton4.addEventListener("click", () => GardenSimulation.player.plant(seedButton4.value));
        let buyBtn5 = document.querySelector("#buyStrawberry");
        let seedButton5 = document.querySelector("#s5");
        buyBtn5.addEventListener("click", () => GardenSimulation.player.buy(buyBtn5.value));
        seedButton5.addEventListener("click", () => GardenSimulation.player.plant(seedButton5.value));
        let buyfertilize = document.querySelector("#buyFertilize");
        let fertilizeButton = document.querySelector("#f");
        buyfertilize.addEventListener("click", stackfertilize);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        let buypestizide = document.querySelector("#buyPesticide");
        let pesticideButton = document.querySelector("#p");
        buypestizide.addEventListener("click", stackpesticide);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
        let harvestButton = document.querySelector("#h");
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        let waterButton = document.querySelector("#w");
        waterButton.addEventListener("click", GardenSimulation.player.water);
    }
    function getMousePosition(_evt) {
        let rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (let field of GardenSimulation.allFields) {
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    function getFormSettings() {
        formValues = new FormData(document.forms[0]);
        GardenSimulation.money = Number(formValues.get("capital"));
        moneyChange = Number(formValues.get("schwankung"));
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        // cr2.clearRect(0, 0, canvas.width, canvas.height);
        // createGardenField();
        for (let field of GardenSimulation.allFields) {
            field.draw();
        }
        GardenSimulation.cr2.resetTransform();
        for (let plant of GardenSimulation.allPlants) {
            plant.grow();
            plant.plantNeedsWater();
            plant.plantNeedsDuenger();
            plant.draw();
            //randomNumber(plant);
        }
        // for (let pest of allBugs) {
        //     pest.draw();
        // }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.money + " €";
    }
    GardenSimulation.timer = timer;
    // function randomNumber(_plant: Plant): void {
    //     let randomEvent: number = Math.random() * 60;
    //     if (randomEvent < 2) {
    //         _plant.createBug();
    //     }
    // }
    function startTimerShop() {
        setInterval(update, 3000);
    }
    GardenSimulation.startTimerShop = startTimerShop;
    function stackfertilize() {
        GardenSimulation.fertilizerAmount++;
        updateSeedAmount();
    }
    function stackpesticide() {
        GardenSimulation.pesticideAmount++;
        updateSeedAmount();
    }
    function update() {
        GardenSimulation.Ananas.priceNeu = GardenSimulation.Ananas.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Blueberry.priceNeu = GardenSimulation.Blueberry.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Raspberry.priceNeu = GardenSimulation.Raspberry.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Melon.priceNeu = GardenSimulation.Melon.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Strawberry.priceNeu = GardenSimulation.Strawberry.price + (Math.floor(Math.random() * moneyChange));
        fertilizerPriceNew = fertilizerPrice + (Math.floor(Math.random() * moneyChange));
        pesticidePriceNew = pestizidePrice + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }
    function getRandomInt(_min, _max) {
        let min = Math.ceil(_min);
        let max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    GardenSimulation.getRandomInt = getRandomInt;
    function updatePrice() {
        document.querySelector("#ananasPrice").innerHTML = GardenSimulation.Ananas.priceNeu.toString() + "€";
        document.querySelector("#blueberryPrice").innerHTML = GardenSimulation.Blueberry.priceNeu.toString() + "€";
        document.querySelector("#melonPrice").innerHTML = GardenSimulation.Melon.priceNeu.toString() + "€";
        document.querySelector("#raspberryPrice").innerHTML = GardenSimulation.Raspberry.priceNeu.toString() + "€";
        document.querySelector("#strawberryPrice").innerHTML = GardenSimulation.Strawberry.priceNeu.toString() + "€";
        document.querySelector("#fertilizePrice").innerHTML = pesticidePriceNew.toString() + "€";
        document.querySelector("#pesticidePrice").innerHTML = fertilizerPriceNew.toString() + "€";
    }
    function updateSeedAmount() {
        document.querySelector("#ananasAmount").innerHTML = GardenSimulation.Ananas.seedamount.toString();
        document.querySelector("#blueberryAmount").innerHTML = GardenSimulation.Blueberry.seedamount.toString();
        document.querySelector("#melonAmount").innerHTML = GardenSimulation.Melon.seedamount.toString();
        document.querySelector("#raspberryAmount").innerHTML = GardenSimulation.Raspberry.seedamount.toString();
        document.querySelector("#strawberryAmount").innerHTML = GardenSimulation.Strawberry.seedamount.toString();
        document.querySelector("#fertilizeAmount").innerHTML = GardenSimulation.fertilizerAmount.toString();
        document.querySelector("#pesticideAmount").innerHTML = GardenSimulation.pesticideAmount.toString();
    }
    GardenSimulation.updateSeedAmount = updateSeedAmount;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=main.js.map