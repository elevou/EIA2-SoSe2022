var strand;
(function (strand) {
    class Surfer {
        position;
        velocity;
        color1;
        color2;
        color3;
        color4;
        constructor(_color1, _color2, _color3, _color4) {
            this.position = new strand.Vector(0, strand.crc2.canvas.height * 0.5);
            this.velocity = new strand.Vector(0, 0);
            this.velocity.random(300, 200);
            this.color1 = _color1;
            this.color2 = _color2;
            this.color3 = _color3;
            this.color4 = _color4;
        }
        drawSurfer() {
            strand.crc2.save();
            strand.crc2.translate(this.position.x, this.position.y);
            // Surfboard
            strand.crc2.beginPath();
            strand.crc2.fillStyle = this.color1;
            strand.crc2.ellipse(110, 130, 70, 17, 0, 0, 2 * Math.PI, false);
            strand.crc2.fill();
            strand.crc2.closePath();
            // Legs
            strand.crc2.beginPath();
            strand.crc2.moveTo(90, 90); // left leg
            strand.crc2.lineTo(90, 130);
            strand.crc2.moveTo(110, 90); // right leg
            strand.crc2.lineTo(110, 130);
            strand.crc2.closePath();
            strand.crc2.strokeStyle = this.color2;
            strand.crc2.lineWidth = 9;
            strand.crc2.stroke();
            // Arms
            strand.crc2.beginPath();
            strand.crc2.moveTo(87, 40);
            strand.crc2.lineTo(70, 70);
            strand.crc2.moveTo(113, 40);
            strand.crc2.lineTo(130, 70);
            strand.crc2.closePath();
            strand.crc2.strokeStyle = this.color2;
            strand.crc2.lineWidth = 7;
            strand.crc2.stroke();
            // Body
            strand.crc2.lineWidth = 1;
            strand.crc2.beginPath();
            strand.crc2.rect(85, 37, 30, 40);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color2;
            strand.crc2.strokeStyle = this.color3;
            strand.crc2.fill();
            strand.crc2.stroke();
            // Head
            strand.crc2.beginPath();
            strand.crc2.arc(100, 20, 15, 0, Math.PI * 2);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color2;
            strand.crc2.strokeStyle = this.color3;
            strand.crc2.lineWidth = 1;
            strand.crc2.fill();
            strand.crc2.stroke();
            // Mouth
            strand.crc2.beginPath();
            strand.crc2.strokeStyle = "red";
            strand.crc2.arc(100, 25, 5, 0, Math.PI);
            strand.crc2.stroke();
            // Eyes
            strand.crc2.beginPath();
            strand.crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
            strand.crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
            strand.crc2.closePath();
            strand.crc2.fillStyle = "black";
            strand.crc2.fill();
            // Badehose
            strand.crc2.lineWidth = 1;
            strand.crc2.beginPath();
            strand.crc2.rect(85, 77, 30, 15);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.color4;
            strand.crc2.fill();
            strand.crc2.restore();
        }
        animate(_timeslice) {
            let offset = new strand.Vector(this.velocity.x, 0);
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
    strand.Surfer = Surfer;
})(strand || (strand = {}));
//# sourceMappingURL=Surfer.js.map