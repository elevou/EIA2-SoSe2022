var GardenSimulation;
(function (GardenSimulation) {
    class Raspberry extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 5;
            this.images = [GardenSimulation.Load.raspberryS, GardenSimulation.Load.raspberryM, GardenSimulation.Load.raspberryB];
            this.image = this.images[0];
            this.type = "seed3";
            this.row = this.row;
            this.collum = this.collum;
            this.age1 = 15;
            this.age2 = 29;
            this.finalAge = 35;
            this.waterLevel1 = 5;
            this.waterLevel2 = 10;
            this.waterLevel3 = 15;
            this.waterLevelMax = 20;
            this.fertilizerLevel1 = 3;
            this.fertilizerLevel2 = 8;
            this.fertilizerLevel3 = 13;
            this.fertilizerLevelMax = 18;
        }
    }
    Raspberry.seedamount = 0;
    Raspberry.price = 2;
    GardenSimulation.Raspberry = Raspberry;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Raspberry.js.map