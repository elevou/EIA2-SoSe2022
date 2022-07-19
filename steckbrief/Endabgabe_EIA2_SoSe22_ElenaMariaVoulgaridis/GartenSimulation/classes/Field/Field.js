var GardenSimulation;
(function (GardenSimulation) {
    class Field {
        constructor(_row, _collum) {
            this.color = "tan";
            this.isFieldClear = true;
            this.row = _row;
            this.collum = _collum;
        }
        isHit(_mX, _mY) {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    case GardenSimulation.TASK.PLANTANANAS:
                        if (this.isFieldClear == true && GardenSimulation.Ananas.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Ananas(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isFieldClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTBLUEBERRY:
                        if (this.isFieldClear == true && GardenSimulation.Blueberry.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Blueberry(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isFieldClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTRASPBERRY:
                        if (this.isFieldClear == true && GardenSimulation.Raspberry.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Raspberry(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isFieldClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTMELON:
                        if (this.isFieldClear == true && GardenSimulation.Melon.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Melon(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isFieldClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSTRAWBERRY:
                        if (this.isFieldClear == true && GardenSimulation.Strawberry.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Strawberry(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isFieldClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.HARVEST:
                        if (this.isFieldClear == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex((e) => e == this.plant), 1);
                                GardenSimulation.money = GardenSimulation.money + this.plant.verkaufPrice;
                                this.isFieldClear = true;
                                GardenSimulation.startTimerShop();
                            }
                        }
                        break;
                    case GardenSimulation.TASK.WATER:
                        if (this.isFieldClear == false) {
                            this.plant.plantWatering();
                        }
                        break;
                    case GardenSimulation.TASK.FERTILIZE:
                        if (GardenSimulation.fertilizerAmount > 0)
                            if (this.isFieldClear == false) {
                                this.plant.plantDuengering();
                                GardenSimulation.fertilizerAmount--;
                                GardenSimulation.updateSeedAmount();
                            }
                        break;
                    // case TASK.PESTICIDE:
                    //     if (this.isFieldClear == false) {
                    //         console.log("pesticide");
                    //         this.plant.killBug();
                    //     }
                    //     break;
                }
                this.draw();
                for (let plant of GardenSimulation.allPlants) {
                    plant.draw();
                }
            }
        }
        draw() {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = this.color;
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
        }
    }
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Field.js.map