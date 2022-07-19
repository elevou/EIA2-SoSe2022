var GardenSimulation;
(function (GardenSimulation) {
    class Melon extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 18;
            this.images = [GardenSimulation.Load.melonS, GardenSimulation.Load.melonM, GardenSimulation.Load.melonB];
            this.image = this.images[0];
            this.type = "seed4";
            this.row = this.row;
            this.collum = this.collum;
            this.age1 = 18;
            this.age2 = 30;
            this.finalAge = 40;
            this.waterLevel1 = 14;
            this.waterLevel2 = 20;
            this.waterLevel3 = 26;
            this.waterLevelMax = 32;
            this.fertilizerLevel1 = 8;
            this.fertilizerLevel2 = 12;
            this.fertilizerLevel3 = 16;
            this.fertilizerLevelMax = 20;
        }
    }
    Melon.seedamount = 0;
    Melon.price = 10;
    GardenSimulation.Melon = Melon;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Melon.js.map