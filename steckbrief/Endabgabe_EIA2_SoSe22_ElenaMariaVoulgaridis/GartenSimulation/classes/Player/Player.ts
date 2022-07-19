namespace GardenSimulation {
    export enum TASK {
        PLANTANANAS,
        PLANTBLUEBERRY,
        PLANTRASPBERRY,
        PLANTMELON,
        PLANTSTRAWBERRY,
        HARVEST,
        WATER,
        FERTILIZE,
        PESTICIDE
    }

    export class Player {
        
        static task: TASK;
        static pesticideAmount: number = 20;
        static fertilizerAmount: number = 20;
        static fertilizerPrice: number = 5;
        static pesticidesPrice: number = 5;
        static fertilizerPriceNew: number;
        static pesticidePriceNew: number;

        plant(_value: string): void {
            if (_value == "seed1") {
                Player.task = TASK.PLANTANANAS;
                Ananas.seedamount --;
            }
            if (_value == "seed2") {
                Player.task = TASK.PLANTBLUEBERRY;
                Blueberry.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.PLANTRASPBERRY;
                Raspberry.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.PLANTMELON;
                Melon.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.PLANTSTRAWBERRY;
                Strawberry.seedamount--;
            }
        }
        harvest(): void {
            Player.task = TASK.HARVEST;
        }
        water(): void {
            Player.task = TASK.WATER;
        }
        fertilize(): void {
            Player.task = TASK.FERTILIZE;
        }
        pesticide(): void {
            Player.task = TASK.PESTICIDE;
        }
        buy (_value: string): void {
            if (_value == "buy1" && money >= Ananas.priceNeu) {
                money = money - Ananas.priceNeu;
                Ananas.seedamount++;
            }
            if (_value == "buy2" && money >= Blueberry.priceNeu) {
                money = money - Blueberry.priceNeu;
                Blueberry.seedamount++;
            }
            if (_value == "buy3" && money >= Raspberry.priceNeu) {
                money = money - Raspberry.priceNeu;
                Raspberry.seedamount++;
            }
            if (_value == "buy4" && money >= Melon.priceNeu) {
                money = money - Melon.priceNeu;
                Melon.seedamount++;
            }
            if (_value == "buy5" && money >= Strawberry.priceNeu) {
                money = money - Strawberry.priceNeu;
                Strawberry.seedamount++;
            }
            updateSeedAmount();
        }
    }
}