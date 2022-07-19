namespace GardenSimulation {
    export class Strawberry extends Plant {
        static seedamount: number = 0;
        static price: number = 5;
        verkaufPrice: number = 9;
        priceNeu: number; 
        
        images: HTMLImageElement[] = [Load.strawberryS, Load.strawberryM, Load.strawberryB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed5";
        row: number = this.row;
        collum: number = this.collum;

        age1: number = 10;
        age2: number = 20;
        finalAge: number = 30;

        waterLevel1: number = 10;
        waterLevel2: number = 14;
        waterLevel3: number = 18;
        waterLevelMax: number = 22;

        fertilizerLevel1: number = 5;
        fertilizerLevel2: number = 12;
        fertilizerLevel3: number = 19;
        fertilizerLevelMax: number = 26;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }
}