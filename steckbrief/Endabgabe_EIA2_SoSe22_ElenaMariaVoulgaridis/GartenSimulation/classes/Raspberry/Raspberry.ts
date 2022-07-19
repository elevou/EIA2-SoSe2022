namespace GardenSimulation {
    export class Raspberry extends Plant {
        static seedamount: number = 0;
        static price: number = 2;
        verkaufPrice: number = 5;
        priceNeu: number;
        
        images: HTMLImageElement[] = [Load.raspberryS, Load.raspberryM, Load.raspberryB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed3";
        row: number = this.row;
        collum: number = this.collum;

        age1: number = 15;
        age2: number = 29;
        finalAge: number = 35;

        waterLevel1: number = 5;
        waterLevel2: number = 10;
        waterLevel3: number = 15;
        waterLevelMax: number = 20;

        fertilizerLevel1: number = 3;
        fertilizerLevel2: number = 8;
        fertilizerLevel3: number = 13;
        fertilizerLevelMax: number = 18;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}