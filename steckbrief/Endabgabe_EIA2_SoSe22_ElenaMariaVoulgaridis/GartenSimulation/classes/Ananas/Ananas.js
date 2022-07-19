var GardenSimulation;
(function (GardenSimulation) {
    class Ananas extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 15;
            this.images = [GardenSimulation.Load.ananasS, GardenSimulation.Load.ananasM, GardenSimulation.Load.ananasB];
            this.image = this.images[0];
            this.type = "seed1";
            this.row = this.row;
            this.collum = this.collum;
            this.age1 = 10;
            this.age2 = 20;
            this.finalAge = 30;
            this.waterLevel1 = 5;
            this.waterLevel2 = 10;
            this.waterLevel3 = 15;
            this.waterLevelMax = 20;
            this.fertilizerLevel1 = 5;
            this.fertilizerLevel2 = 10;
            this.fertilizerLevel3 = 15;
            this.fertilizerLevelMax = 20;
        }
    }
    Ananas.seedamount = 0;
    Ananas.price = 7;
    GardenSimulation.Ananas = Ananas;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Ananas.js.map