var strand;
(function (strand) {
    class Cloud {
        position;
        valocity;
        type;
        random;
        constructor(_random) {
            this.position = new strand.Vector(0, 0);
            this.valocity = new strand.Vector(0, 0);
            this.valocity.random(300, 200);
            this.random = _random;
        }
        drawCloud() {
            let scale = ((strand.crc2.canvas.width * 0.3) / 1000);
            strand.crc2.save();
            strand.crc2.translate(this.position.x, this.random);
            strand.crc2.scale(scale, scale);
            strand.crc2.beginPath();
            strand.crc2.moveTo(170, 80);
            strand.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            strand.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            strand.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            strand.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            strand.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            strand.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            strand.crc2.closePath();
            strand.crc2.lineWidth = 2;
            strand.crc2.fillStyle = "#ffffff";
            strand.crc2.fill();
            strand.crc2.strokeStyle = "#ffffff";
            strand.crc2.stroke();
            strand.crc2.restore();
        }
        animate(_timeslice) {
            let offset = new strand.Vector(this.valocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += strand.crc2.canvas.width;
            }
            if (this.position.x > strand.crc2.canvas.width) {
                this.position.x -= strand.crc2.canvas.width;
            }
        }
    }
    strand.Cloud = Cloud;
})(strand || (strand = {}));
//# sourceMappingURL=Cloud.js.map