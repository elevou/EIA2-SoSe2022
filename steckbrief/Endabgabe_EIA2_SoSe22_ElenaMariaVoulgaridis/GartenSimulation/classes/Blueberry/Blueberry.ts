namespace GardenSimulation {
    export class Blueberry extends Plant {
        static seedamount: number = 0;
        static price: number = 3;
        verkaufPrice: number = 7;
        priceNeu: number;

        images: HTMLImageElement[] = [Load.blueberryS, Load.blueberryM, Load.blueberryB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed2";
        row: number = this.row;
        collum: number = this.collum;

        finalAge: number = 30;
        age1: number = 10;
        age2: number = 22;

        waterLevel1: number = 5;
        waterLevel2: number = 10;
        waterLevel3: number = 15;
        waterLevelMax: number = 20;

        fertilizerLevel1: number = 9;
        fertilizerLevel2: number = 16;
        fertilizerLevel3: number = 23;
        fertilizerLevelMax: number = 30;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }
}