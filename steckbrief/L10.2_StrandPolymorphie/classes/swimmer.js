var L10_2;
(function (L10_2) {
    class Swimmer extends L10_2.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            let scale = ((L10_2.crc2.canvas.width * .15) / 250);
            L10_2.crc2.save();
            L10_2.crc2.translate(this.posX, this.posY);
            L10_2.crc2.scale(scale, scale);
            // Surfboard
            L10_2.crc2.beginPath();
            L10_2.crc2.fillStyle = "#0f332d";
            L10_2.crc2.ellipse(110, 130, 70, 17, 0, 0, 2 * Math.PI, false);
            L10_2.crc2.fill();
            L10_2.crc2.closePath();
            // Legs
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(90, 90); // left leg
            L10_2.crc2.lineTo(90, 130);
            L10_2.crc2.moveTo(110, 90); // right leg
            L10_2.crc2.lineTo(110, 130);
            L10_2.crc2.closePath();
            L10_2.crc2.strokeStyle = "#ecbc93";
            L10_2.crc2.lineWidth = 9;
            L10_2.crc2.stroke();
            // Arms
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(87, 40);
            L10_2.crc2.lineTo(70, 70);
            L10_2.crc2.moveTo(113, 40);
            L10_2.crc2.lineTo(130, 70);
            L10_2.crc2.closePath();
            L10_2.crc2.strokeStyle = "#ecbc93";
            L10_2.crc2.lineWidth = 7;
            L10_2.crc2.stroke();
            // Body
            L10_2.crc2.lineWidth = 1;
            L10_2.crc2.beginPath();
            L10_2.crc2.rect(85, 37, 30, 40);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "#ecbc93";
            L10_2.crc2.strokeStyle = "#ecbc93";
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            // Head
            L10_2.crc2.beginPath();
            L10_2.crc2.arc(100, 20, 15, 0, Math.PI * 2);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "#ecbc93";
            L10_2.crc2.strokeStyle = "#ecbc93";
            L10_2.crc2.lineWidth = 1;
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            // Mouth
            L10_2.crc2.beginPath();
            L10_2.crc2.strokeStyle = "red";
            L10_2.crc2.arc(100, 25, 5, 0, Math.PI);
            L10_2.crc2.stroke();
            // Eyes
            L10_2.crc2.beginPath();
            L10_2.crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
            L10_2.crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "black";
            L10_2.crc2.fill();
            // Badehose
            L10_2.crc2.lineWidth = 1;
            L10_2.crc2.beginPath();
            L10_2.crc2.rect(85, 77, 30, 15);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "#58217d";
            L10_2.crc2.fill();
            L10_2.crc2.restore();
        }
        update() {
            if (this.posX > L10_2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L10_2.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    L10_2.Swimmer = Swimmer;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=swimmer.js.map