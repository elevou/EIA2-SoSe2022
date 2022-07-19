var GardenSimulation;
(function (GardenSimulation) {
    class Blueberry extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 7;
            this.images = [GardenSimulation.Load.blueberryS, GardenSimulation.Load.blueberryM, GardenSimulation.Load.blueberryB];
            this.image = this.images[0];
            this.type = "seed2";
            this.row = this.row;
            this.collum = this.collum;
            this.finalAge = 30;
            this.age1 = 10;
            this.age2 = 22;
            this.waterLevel1 = 5;
            this.waterLevel2 = 10;
            this.waterLevel3 = 15;
            this.waterLevelMax = 20;
            this.fertilizerLevel1 = 9;
            this.fertilizerLevel2 = 16;
            this.fertilizerLevel3 = 23;
            this.fertilizerLevelMax = 30;
        }
    }
    Blueberry.seedamount = 0;
    Blueberry.price = 3;
    GardenSimulation.Blueberry = Blueberry;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Blueberry.js.map