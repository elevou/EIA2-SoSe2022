namespace GardenSimulation {
    export class Melon extends Plant {
        static seedamount: number = 0;
        static price: number = 10;
        verkaufPrice: number = 18;
        priceNeu: number;
        
        images: HTMLImageElement[] = [Load.melonS, Load.melonM, Load.melonB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed4";
        row: number = this.row;
        collum: number = this.collum;

        age1: number = 18;
        age2: number = 30;
        finalAge: number = 40;

        waterLevel1: number = 14;
        waterLevel2: number = 20;
        waterLevel3: number = 26;
        waterLevelMax: number = 32;

        fertilizerLevel1: number = 8;
        fertilizerLevel2: number = 12;
        fertilizerLevel3: number = 16;
        fertilizerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }
}