var GardenSimulation;
(function (GardenSimulation) {
    class Strawberry extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 9;
            this.images = [GardenSimulation.Load.strawberryS, GardenSimulation.Load.strawberryM, GardenSimulation.Load.strawberryB];
            this.image = this.images[0];
            this.type = "seed5";
            this.row = this.row;
            this.collum = this.collum;
            this.age1 = 10;
            this.age2 = 20;
            this.finalAge = 30;
            this.waterLevel1 = 10;
            this.waterLevel2 = 14;
            this.waterLevel3 = 18;
            this.waterLevelMax = 22;
            this.fertilizerLevel1 = 5;
            this.fertilizerLevel2 = 12;
            this.fertilizerLevel3 = 19;
            this.fertilizerLevelMax = 26;
        }
    }
    Strawberry.seedamount = 0;
    Strawberry.price = 5;
    GardenSimulation.Strawberry = Strawberry;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Strawberry.js.map