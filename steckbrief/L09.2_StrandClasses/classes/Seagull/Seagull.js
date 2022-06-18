var strand;
(function (strand) {
    class Seagull {
        position;
        velocity;
        scalenumber;
        constructor() {
            this.position = new strand.Vector(0, 0);
            this.velocity = new strand.Vector(0, 0);
            this.velocity.random(300, 200);
        }
        drawSeagull() {
            let scale = (this.scalenumber);
            strand.crc2.save();
            strand.crc2.translate(this.position.x, this.position.y);
            strand.crc2.scale(scale, scale);
            strand.crc2.beginPath();
            strand.crc2.moveTo(0, 10);
            strand.crc2.bezierCurveTo(0, 10, 10, -10, 20, 10);
            strand.crc2.bezierCurveTo(20, 10, 30, -10, 40, 10);
            strand.crc2.strokeStyle = "#000000";
            strand.crc2.stroke();
            strand.crc2.restore();
        }
        animate(_timeslice) {
            let offset = new strand.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += strand.crc2.canvas.width;
            }
            if (this.position.x > strand.crc2.canvas.width) {
                this.position.x -= strand.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += strand.crc2.canvas.height;
            }
            if (this.position.y > strand.crc2.canvas.height) {
                this.position.y -= strand.crc2.canvas.height;
            }
        }
    }
    strand.Seagull = Seagull;
})(strand || (strand = {}));
//# sourceMappingURL=Seagull.js.map