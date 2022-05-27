var strand;
(function (strand) {
    class Boat {
        position;
        valocity;
        color1;
        color2;
        color3;
        constructor(_color1, _color2, _color3) {
            this.position = new strand.Vector(0, strand.crc2.canvas.height * 0.1);
            this.valocity = new strand.Vector(0, 0);
            this.valocity.random(300, 200);
            this.color1 = _color1;
            this.color2 = _color2;
            this.color3 = _color3;
        }
        drawBoat() {
            strand.crc2.save();
            strand.crc2.translate(this.position.x, this.position.y);
            // Left sail
            strand.crc2.beginPath();
            strand.crc2.moveTo(150, 145);
            strand.crc2.quadraticCurveTo(85, 180, 85, 260);
            strand.crc2.quadraticCurveTo(105, 250, 150, 260);
            strand.crc2.quadraticCurveTo(125, 200, 150, 145);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color1;
            strand.crc2.strokeStyle = this.color1;
            strand.crc2.fill();
            strand.crc2.stroke();
            // Right sail
            strand.crc2.moveTo(160, 145);
            strand.crc2.lineTo(160, 260);
            strand.crc2.lineTo(225, 260);
            strand.crc2.closePath();
            strand.crc2.fill();
            strand.crc2.stroke();
            // Little Flag
            strand.crc2.beginPath();
            strand.crc2.moveTo(150, 100);
            strand.crc2.lineTo(150, 140);
            strand.crc2.lineTo(100, 120);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color2;
            strand.crc2.fill();
            // Bottom
            strand.crc2.beginPath();
            strand.crc2.rect(70, 280, 170, 40);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color3;
            strand.crc2.strokeStyle = this.color3;
            strand.crc2.fill();
            strand.crc2.stroke();
            // Mast
            strand.crc2.beginPath();
            strand.crc2.rect(150, 100, 10, 180);
            strand.crc2.closePath();
            strand.crc2.fillStyle = "black";
            strand.crc2.strokeStyle = "black";
            strand.crc2.fill();
            strand.crc2.stroke();
            strand.crc2.restore();
        }
        animate(_timeslice) {
            let offset = new strand.Vector(this.valocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -250) {
                this.position.x += strand.crc2.canvas.width;
            }
            if (this.position.x > strand.crc2.canvas.width) {
                this.position.x -= strand.crc2.canvas.width;
            }
        }
    }
    strand.Boat = Boat;
})(strand || (strand = {}));
//# sourceMappingURL=Boat.js.map