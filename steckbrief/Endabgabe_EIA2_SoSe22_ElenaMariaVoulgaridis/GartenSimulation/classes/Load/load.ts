namespace GardenSimulation {
    export class Load {
        static ananasS: HTMLImageElement;
        static ananasM: HTMLImageElement;
        static ananasB: HTMLImageElement;

        static blueberryS: HTMLImageElement;
        static blueberryM: HTMLImageElement;
        static blueberryB: HTMLImageElement;

        static melonS: HTMLImageElement;
        static melonM: HTMLImageElement;
        static melonB: HTMLImageElement;

        static raspberryS: HTMLImageElement;
        static raspberryM: HTMLImageElement;
        static raspberryB: HTMLImageElement;

        static strawberryS: HTMLImageElement;
        static strawberryM: HTMLImageElement;
        static strawberryB: HTMLImageElement;

        static dropS: HTMLImageElement;
        static dropM: HTMLImageElement;
        static dropB: HTMLImageElement;

        static fertilizS: HTMLImageElement;
        static fertilizM: HTMLImageElement;
        static fertilizB: HTMLImageElement;

        static bug: HTMLImageElement;

        static empty: HTMLImageElement;

        static loading(): void {
            Load.ananasS = <HTMLImageElement>document.getElementById("ananasS");
            Load.ananasM = <HTMLImageElement>document.getElementById("ananasM");
            Load.ananasB = <HTMLImageElement>document.getElementById("ananasB");

            Load.blueberryS = <HTMLImageElement>document.getElementById("blueberryS");
            Load.blueberryM = <HTMLImageElement>document.getElementById("blueberryM");
            Load.blueberryB = <HTMLImageElement>document.getElementById("blueberryB");

            Load.melonS = <HTMLImageElement>document.getElementById("melonS");
            Load.melonM = <HTMLImageElement>document.getElementById("melonM");
            Load.melonB = <HTMLImageElement>document.getElementById("melonB");

            Load.raspberryS = <HTMLImageElement>document.getElementById("raspberryS");
            Load.raspberryM = <HTMLImageElement>document.getElementById("raspberryM");
            Load.raspberryB = <HTMLImageElement>document.getElementById("raspberryB");

            Load.strawberryS = <HTMLImageElement>document.getElementById("strawberryS");
            Load.strawberryM = <HTMLImageElement>document.getElementById("strawberryM");
            Load.strawberryB = <HTMLImageElement>document.getElementById("strawberryB");

            Load.dropS = <HTMLImageElement>document.getElementById("water1");
            Load.dropM = <HTMLImageElement>document.getElementById("water2");
            Load.dropB = <HTMLImageElement>document.getElementById("water3");

            Load.fertilizS = <HTMLImageElement>document.getElementById("fertilizer1");
            Load.fertilizM = <HTMLImageElement>document.getElementById("fertilizer2");
            Load.fertilizB = <HTMLImageElement>document.getElementById("fertilizer3");
            
            Load.bug = <HTMLImageElement>document.getElementById("bug");

            Load.empty = <HTMLImageElement>document.getElementById("empty");
        }
    }
}