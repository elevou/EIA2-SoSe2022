var L10_2;
(function (L10_2) {
    class Boot extends L10_2.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            let scale = ((L10_2.crc2.canvas.width * 0.5) / 1000);
            L10_2.crc2.save();
            L10_2.crc2.translate(this.posX, this.posY);
            L10_2.crc2.scale(scale, scale);
            // Left sail
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(150, 145);
            L10_2.crc2.quadraticCurveTo(85, 180, 85, 260);
            L10_2.crc2.quadraticCurveTo(105, 250, 150, 260);
            L10_2.crc2.quadraticCurveTo(125, 200, 150, 145);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "#ffab5c";
            L10_2.crc2.strokeStyle = "#ffab5c";
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            // Right sail
            L10_2.crc2.moveTo(160, 145);
            L10_2.crc2.lineTo(160, 260);
            L10_2.crc2.lineTo(225, 260);
            L10_2.crc2.closePath();
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            // Little Flag
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(150, 100);
            L10_2.crc2.lineTo(150, 140);
            L10_2.crc2.lineTo(100, 120);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "#db6a00";
            L10_2.crc2.fill();
            // Bottom
            L10_2.crc2.beginPath();
            L10_2.crc2.rect(70, 280, 170, 40);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "hsl(" + 31 + "," + "59%," + "29%" + ")";
            L10_2.crc2.strokeStyle = "hsl(" + 31 + "," + "59%," + "29%" + ")";
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            // Mast
            L10_2.crc2.beginPath();
            L10_2.crc2.rect(150, 100, 10, 180);
            L10_2.crc2.closePath();
            L10_2.crc2.fillStyle = "black";
            L10_2.crc2.strokeStyle = "black";
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
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
    L10_2.Boot = Boot;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=boot.js.map