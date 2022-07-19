var GardenSimulation;
(function (GardenSimulation) {
    let TASK;
    (function (TASK) {
        TASK[TASK["PLANTANANAS"] = 0] = "PLANTANANAS";
        TASK[TASK["PLANTBLUEBERRY"] = 1] = "PLANTBLUEBERRY";
        TASK[TASK["PLANTRASPBERRY"] = 2] = "PLANTRASPBERRY";
        TASK[TASK["PLANTMELON"] = 3] = "PLANTMELON";
        TASK[TASK["PLANTSTRAWBERRY"] = 4] = "PLANTSTRAWBERRY";
        TASK[TASK["HARVEST"] = 5] = "HARVEST";
        TASK[TASK["WATER"] = 6] = "WATER";
        TASK[TASK["FERTILIZE"] = 7] = "FERTILIZE";
        TASK[TASK["PESTICIDE"] = 8] = "PESTICIDE";
    })(TASK = GardenSimulation.TASK || (GardenSimulation.TASK = {}));
    class Player {
        plant(_value) {
            if (_value == "seed1") {
                Player.task = TASK.PLANTANANAS;
                GardenSimulation.Ananas.seedamount--;
            }
            if (_value == "seed2") {
                Player.task = TASK.PLANTBLUEBERRY;
                GardenSimulation.Blueberry.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.PLANTRASPBERRY;
                GardenSimulation.Raspberry.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.PLANTMELON;
                GardenSimulation.Melon.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.PLANTSTRAWBERRY;
                GardenSimulation.Strawberry.seedamount--;
            }
        }
        harvest() {
            Player.task = TASK.HARVEST;
        }
        water() {
            Player.task = TASK.WATER;
        }
        fertilize() {
            Player.task = TASK.FERTILIZE;
        }
        pesticide() {
            Player.task = TASK.PESTICIDE;
        }
        buy(_value) {
            if (_value == "buy1" && GardenSimulation.money >= GardenSimulation.Ananas.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Ananas.priceNeu;
                GardenSimulation.Ananas.seedamount++;
            }
            if (_value == "buy2" && GardenSimulation.money >= GardenSimulation.Blueberry.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Blueberry.priceNeu;
                GardenSimulation.Blueberry.seedamount++;
            }
            if (_value == "buy3" && GardenSimulation.money >= GardenSimulation.Raspberry.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Raspberry.priceNeu;
                GardenSimulation.Raspberry.seedamount++;
            }
            if (_value == "buy4" && GardenSimulation.money >= GardenSimulation.Melon.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Melon.priceNeu;
                GardenSimulation.Melon.seedamount++;
            }
            if (_value == "buy5" && GardenSimulation.money >= GardenSimulation.Strawberry.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Strawberry.priceNeu;
                GardenSimulation.Strawberry.seedamount++;
            }
            GardenSimulation.updateSeedAmount();
        }
    }
    Player.pesticideAmount = 20;
    Player.fertilizerAmount = 20;
    Player.fertilizerPrice = 5;
    Player.pesticidesPrice = 5;
    GardenSimulation.Player = Player;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Player.js.map