namespace strand {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let cloudArray: Cloud[] = [];
    let seagullArray: Seagull[] = [];
    let boatArray: Boat[] = [];
    let surferArray: Surfer[] = [];

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d")!;
        resizeCanvas();
        draw();
        createSeagull(4);
        createCloud(5);
        createBoat(1);
        createSurfer(1);
        window.setInterval(update, 20);
    }
    function resizeCanvas(): void {
        canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight - 20;
    }
    function draw(): void {
        let water: Sea = new Sea(0, crc2.canvas.height * 0.4, crc2.canvas.width, crc2.canvas.height * 0.6);     // sea
        water.drawSea();
        
        let sky: Sky = new Sky (crc2.canvas.width, crc2.canvas.height * 0.4);   // sky
        sky.drawSky();
        
        let sand: Sand = new Sand (crc2.canvas.height * 0.8, crc2.canvas.width * 0.6, crc2.canvas.width, crc2.canvas.height * 0.6);     // sand
        sand.drawSand();
        
        let sun: Sun = new Sun (100, 75, 50);   // sun
        sun.drawSun();


        let towel: Towel = new Towel (crc2.canvas.width * 0.55, crc2.canvas.height * 0.8);      // towel
        towel.drawTowel();
        let urlauber: Urlauber = new Urlauber (crc2.canvas.width * 0.55, crc2.canvas.height * 0.8, "#883c35", "#ffddbd", "#d7bb93", "#6481be");     // urlauber
        urlauber.drawUrlauber();
    }
    function createSurfer(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let surfer: Surfer = new Surfer ("#454545", "#ffddbd", "#d7bb93", "#256535");   
            surferArray.push(surfer);
        }
    }
    function createCloud(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let random: number = Math.round(Math.random() * 100);
            let cloud: Cloud = new Cloud (random);
            cloudArray.push(cloud);
        }
    }
    function createSeagull(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let seagull: Seagull = new Seagull ();
            seagullArray.push(seagull);
        }
    }
    function createBoat(_n: number): void {
        for (let index: number = 0; index < _n; index++) {
            let boat1: Boat = new Boat ("#c3abf7", "#8251ec", "hsl(" + 31 + "," + "59%,"  + "29%" + ")");
            let boat2: Boat = new Boat ("#ffab5c", "#db6a00", "hsl(" + 31 + "," + "59%,"  + "29%" + ")");
            boatArray.push(boat1, boat2);
        }
    }
    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        draw();
        for (let cloud of cloudArray) {
            cloud.animate(1 / 200);
            cloud.drawCloud();
        }
        for (let seagull of seagullArray) {
            seagull.animate(1 / 100);
            seagull.drawSeagull();
        }
        for (let boat2 of boatArray) {
            boat2.animate(1 / 400);
            boat2.drawBoat();
        }
        for (let boat1 of boatArray) {
            boat1.animate(1 / 100);
            boat1.drawBoat();
        }
        for (let surfer of surferArray) {
            surfer.animate(1 / 500);
            surfer.drawSurfer();
        }
    }
}