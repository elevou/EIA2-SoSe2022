var GardenSimulation;
(function (GardenSimulation) {
    class Plant {
        constructor(_row, _collum) {
            this.waterImages = [GardenSimulation.Load.empty, GardenSimulation.Load.dropS, GardenSimulation.Load.dropM, GardenSimulation.Load.dropB];
            this.fertiImages = [GardenSimulation.Load.empty, GardenSimulation.Load.fertilizS, GardenSimulation.Load.fertilizM, GardenSimulation.Load.fertilizB];
            this.age = 1;
            this.needsWater = false;
            this.bugs = [];
            this.water = 0;
            this.fertilizer = 0;
            this.row = _row;
            this.collum = _collum;
        }
        grow() {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0) {
                this.age++;
                if (this.age == this.age1) {
                    this.image = this.images[1];
                }
                if (this.age == this.age2) {
                    this.image = this.images[2];
                }
                if (this.age == this.finalAge) {
                    //
                }
            }
        }
        plantNeedsWater() {
            this.water++;
            if (this.water < this.waterLevel1) {
                this.waterImage = this.waterImages[0];
            }
            if (this.waterLevel1 <= this.water && this.water < this.waterLevel2) {
                this.waterImage = this.waterImages[1];
            }
            if (this.waterLevel2 <= this.water && this.water < this.waterLevel3) {
                this.waterImage = this.waterImages[2];
            }
            if (this.waterLevel3 <= this.water && this.water < this.waterLevelMax) {
                this.waterImage = this.waterImages[3];
            }
            if (this.waterLevelMax == this.water) {
                this.waterImage = this.waterImages[0];
                this.clear(this.plant);
                this.water = 0;
            }
        }
        plantNeedsDuenger() {
            this.fertilizer++;
            if (this.fertilizer < this.fertilizerLevel1) {
                this.ferti = this.fertiImages[0];
            }
            if (this.fertilizerLevel1 <= this.fertilizer && this.fertilizer < this.fertilizerLevel2) {
                this.ferti = this.fertiImages[1];
            }
            if (this.fertilizerLevel2 <= this.fertilizer && this.fertilizer < this.fertilizerLevel3) {
                this.ferti = this.fertiImages[2];
            }
            if (this.fertilizerLevel3 <= this.fertilizer && this.fertilizer < this.fertilizerLevelMax) {
                this.ferti = this.fertiImages[3];
            }
            if (this.fertilizerLevelMax == this.fertilizer) {
                this.ferti = this.fertiImages[0];
                this.clear(this.plant);
                this.fertilizer = 0;
            }
        }
        plantWatering() {
            if (this.water > this.waterLevel1) {
                this.water = this.water - this.waterLevel1;
                this.plantNeedsWater();
            }
        }
        plantDuengering() {
            if (this.fertilizer > this.fertilizerLevel1) {
                this.fertilizer = this.fertilizer - this.fertilizerLevel1;
                this.plantNeedsDuenger();
            }
        }
        // getsBug(): void {
        //     if (this.bugs.length > 0) {
        //         if (this.bug.position <= 0 && Player.pesticidesMenge > 0) {
        //             Player.pesticidesMenge--;
        //             this.bugs = [];
        //         }
        //     }
        //}
        // killBug(): void {
        //     
        // }
        draw() {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.drawImage(this.image, 10, 0);
            if (this.waterImage !== undefined) {
                GardenSimulation.cr2.drawImage(this.waterImage, 10, 0);
            }
            if (this.ferti !== undefined) {
                GardenSimulation.cr2.drawImage(this.ferti, 10, 0);
            }
        }
        // createBug(): void {
        //     allBugs.push(new Bug(this.row, this.collum));
        // }
        clear(_plant) {
            GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex((_plant) => _plant == this.plant), 1);
            //this.bugs = [];
            GardenSimulation.timer();
        }
    }
    GardenSimulation.Plant = Plant;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Plant.js.map