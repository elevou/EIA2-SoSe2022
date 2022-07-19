namespace GardenSimulation {
    export class Field {
        row: number;
        collum: number;
        color: string = "tan";
        isFieldClear: boolean = true;
        plant: Plant;

        constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        isHit(_mX: number, _mY: number): void {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (Player.task) {
                    case TASK.PLANTANANAS:
                        if (this.isFieldClear == true && Ananas.seedamount >= 0) {
                            allPlants.push(new Ananas(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isFieldClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTBLUEBERRY:
                        if (this.isFieldClear == true && Blueberry.seedamount >= 0) {
                            allPlants.push(new Blueberry(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isFieldClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTRASPBERRY:
                        if (this.isFieldClear == true && Raspberry.seedamount >= 0) {
                            allPlants.push(new Raspberry(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isFieldClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTMELON:
                        if (this.isFieldClear == true && Melon.seedamount >= 0) {
                            allPlants.push(new Melon(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isFieldClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTSTRAWBERRY:
                        if (this.isFieldClear == true && Strawberry.seedamount >= 0) {
                            allPlants.push(new Strawberry(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isFieldClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.HARVEST:               
                        if (this.isFieldClear == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {   
                                allPlants.splice(allPlants.findIndex((e) => e == this.plant), 1);
                                money = money + this.plant.verkaufPrice;
                                this.isFieldClear = true;
                                startTimerShop();
                            }
                        }
                        break;
                    case TASK.WATER:
                        if (this.isFieldClear == false) {
                            this.plant.plantWatering();
                        }
                        break;
                    case TASK.FERTILIZE:
                        if (fertilizerAmount > 0)
                        if (this.isFieldClear == false) {
                            this.plant.plantDuengering();
                            fertilizerAmount--;
                            updateSeedAmount();
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
                for (let plant of allPlants) {
                    plant.draw();
                }
            }
        }
        draw(): void {
            cr2.resetTransform();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.fillStyle = this.color;
            cr2.fillRect(5, 5, 95, 95);
        }
    }
}