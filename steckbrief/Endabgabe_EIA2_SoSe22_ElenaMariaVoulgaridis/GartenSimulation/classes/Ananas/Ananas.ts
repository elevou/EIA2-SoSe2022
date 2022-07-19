namespace GardenSimulation {
    export class Ananas extends Plant {
        static seedamount: number = 0;
        static price: number = 7;
        verkaufPrice: number = 15;
        priceNeu: number;
        
        images: HTMLImageElement[] = [Load.ananasS, Load.ananasM, Load.ananasB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed1";
        row: number = this.row;
        collum: number = this.collum;

        age1: number = 10;
        age2: number = 20;
        finalAge: number = 30;

        waterLevel1: number = 5;
        waterLevel2: number = 10;
        waterLevel3: number = 15;
        waterLevelMax: number = 20;

        fertilizerLevel1: number = 5;
        fertilizerLevel2: number = 10;
        fertilizerLevel3: number = 15;
        fertilizerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }

    }

    
}