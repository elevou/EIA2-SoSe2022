namespace GardenSimulation {
    export abstract class Plant {
        static image: HTMLImageElement;
        static price: number;
        static priceNeu: number;

        static seedamount: number;
        verkaufPrice: number;
        type: string; 

        images: HTMLImageElement [];
        image: HTMLImageElement;
        waterImages: HTMLImageElement [] = [Load.empty, Load.dropS, Load.dropM, Load.dropB];
        waterImage: HTMLImageElement;
        fertiImages: HTMLImageElement [] = [Load.empty, Load.fertilizS, Load.fertilizM, Load.fertilizB];
        ferti: HTMLImageElement;

        currentcolor: string;
        row: number;
        collum: number;
        age: number = 1;
        finalAge: number;
        age1: number;
        age2: number;
        price: number;
        needsWater: boolean = false;

        bugs: Bug[] = [];
        bug: Bug;

        plant: Plant;

        water: number = 0;
        waterLevel1: number;
        waterLevel2: number;
        waterLevel3: number;
        waterLevelMax: number;

        fertilizer: number = 0;
        fertilizerLevel1: number;
        fertilizerLevel2: number;
        fertilizerLevel3: number;
        fertilizerLevelMax: number;

        public constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        grow(): void {
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
        plantNeedsWater(): void {
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
        plantNeedsDuenger(): void {
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
        plantWatering(): void {
            if (this.water > this.waterLevel1) {
                this.water = this.water - this.waterLevel1;
                this.plantNeedsWater();
            }
        }
        plantDuengering(): void {
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

        draw(): void {
            cr2.resetTransform();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.drawImage(this.image, 10, 0);
            if (this.waterImage !== undefined) {
                cr2.drawImage(this.waterImage, 10, 0);
            }
            if (this.ferti !== undefined) {
                cr2.drawImage(this.ferti, 10, 0);
            }
        }
        // createBug(): void {
        //     allBugs.push(new Bug(this.row, this.collum));
        // }

        clear(_plant: Plant): void {
            allPlants.splice(allPlants.findIndex((_plant) => _plant == this.plant), 1); 
            //this.bugs = [];
            timer();
        }
    }
}