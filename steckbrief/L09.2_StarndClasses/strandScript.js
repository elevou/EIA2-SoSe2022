var strand;
(function (strand) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let cloudArray = [];
    let seagullArray = [];
    let boatArray = [];
    let surferArray = [];
    function handleLoad(_event) {
        canvas = document.querySelector("canvas");
        strand.crc2 = canvas.getContext("2d");
        resizeCanvas();
        draw();
        createSeagull(4);
        createCloud(5);
        createBoat(1);
        createSurfer(1);
        window.setInterval(update, 20);
    }
    function resizeCanvas() {
        canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight - 20;
    }
    function draw() {
        let water = new strand.Sea(0, strand.crc2.canvas.height * 0.4, strand.crc2.canvas.width, strand.crc2.canvas.height * 0.6); // sea
        water.drawSea();
        let sky = new strand.Sky(strand.crc2.canvas.width, strand.crc2.canvas.height * 0.4); // sky
        sky.drawSky();
        let sand = new strand.Sand(strand.crc2.canvas.height * 0.8, strand.crc2.canvas.width * 0.6, strand.crc2.canvas.width, strand.crc2.canvas.height * 0.6); // sand
        sand.drawSand();
        let sun = new strand.Sun(100, 75, 50); // sun
        sun.drawSun();
        let towel = new strand.Towel(strand.crc2.canvas.width * 0.55, strand.crc2.canvas.height * 0.8); // towel
        towel.drawTowel();
        let urlauber = new strand.Urlauber(strand.crc2.canvas.width * 0.55, strand.crc2.canvas.height * 0.8, "#883c35", "#ffddbd", "#d7bb93", "#6481be"); // urlauber
        urlauber.drawUrlauber();
    }
    function createSurfer(_n) {
        for (let index = 0; index < _n; index++) {
            let surfer = new strand.Surfer("#454545", "#ffddbd", "#d7bb93", "#256535");
            surferArray.push(surfer);
        }
    }
    function createCloud(_n) {
        for (let index = 0; index < _n; index++) {
            let random = Math.round(Math.random() * 100);
            let cloud = new strand.Cloud(random);
            cloudArray.push(cloud);
        }
    }
    function createSeagull(_n) {
        for (let index = 0; index < _n; index++) {
            let seagull = new strand.Seagull();
            seagullArray.push(seagull);
        }
    }
    function createBoat(_n) {
        for (let index = 0; index < _n; index++) {
            let boat1 = new strand.Boat("#c3abf7", "#8251ec", "hsl(" + 31 + "," + "59%," + "29%" + ")");
            let boat2 = new strand.Boat("#ffab5c", "#db6a00", "hsl(" + 31 + "," + "59%," + "29%" + ")");
            boatArray.push(boat1, boat2);
        }
    }
    function update() {
        strand.crc2.fillRect(0, 0, strand.crc2.canvas.width, strand.crc2.canvas.height);
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
})(strand || (strand = {}));
//# sourceMappingURL=strandScript.js.map