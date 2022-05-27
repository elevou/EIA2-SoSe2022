var strand;
(function (strand) {
    class Urlauber {
        x;
        y;
        hairColor;
        skinColor;
        skinStrokeColor;
        bikiniColor;
        constructor(_x, _y, _hairColor, _skinColor, _skinStrokeColor, _bikiniColor) {
            this.x = _x;
            this.y = _y;
            this.hairColor = _hairColor;
            this.skinColor = _skinColor;
            this.skinStrokeColor = _skinStrokeColor;
            this.bikiniColor = _bikiniColor;
        }
        drawUrlauber() {
            strand.crc2.save();
            strand.crc2.translate(this.x, this.y);
            // Hair
            strand.crc2.beginPath();
            strand.crc2.ellipse(100, 22, 20, 25, 0, 0, 2 * Math.PI);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.hairColor;
            strand.crc2.fill();
            // Legs
            strand.crc2.beginPath();
            strand.crc2.moveTo(90, 90); // left leg
            strand.crc2.lineTo(70, 130);
            strand.crc2.moveTo(110, 90); // right leg
            strand.crc2.lineTo(130, 130);
            strand.crc2.closePath();
            strand.crc2.strokeStyle = this.skinColor;
            strand.crc2.lineWidth = 9;
            strand.crc2.stroke();
            // Arms
            strand.crc2.beginPath();
            strand.crc2.moveTo(87, 40);
            strand.crc2.lineTo(70, 70);
            strand.crc2.moveTo(113, 40);
            strand.crc2.lineTo(130, 70);
            strand.crc2.closePath();
            strand.crc2.strokeStyle = this.skinColor;
            strand.crc2.lineWidth = 7;
            strand.crc2.stroke();
            // Body
            strand.crc2.lineWidth = 1;
            strand.crc2.beginPath();
            strand.crc2.rect(85, 37, 30, 40);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.skinColor;
            strand.crc2.strokeStyle = this.skinStrokeColor;
            strand.crc2.fill();
            strand.crc2.stroke();
            // Head
            strand.crc2.beginPath();
            strand.crc2.arc(100, 20, 15, 0, Math.PI * 2);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.skinColor;
            strand.crc2.strokeStyle = this.skinStrokeColor;
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
            // Bikini
            // Top
            strand.crc2.beginPath();
            strand.crc2.arc(93, 55, 7, 0, Math.PI * 2); // left
            strand.crc2.arc(106, 55, 7, 0, Math.PI * 2); // right
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.bikiniColor;
            strand.crc2.fill();
            // Badehose
            strand.crc2.lineWidth = 1;
            strand.crc2.beginPath();
            strand.crc2.rect(85, 77, 30, 15);
            strand.crc2.closePath();
            strand.crc2.fillStyle = this.bikiniColor;
            strand.crc2.fill();
            strand.crc2.restore();
        }
    }
    strand.Urlauber = Urlauber;
})(strand || (strand = {}));
//# sourceMappingURL=Urlauber.js.map