namespace L10_2 {

    export class Boot extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }

        draw(): void {
            let scale: number = ((crc2.canvas.width * 0.5) / 1000);
            crc2.save();
            crc2.translate(this.posX, this.posY);
            crc2.scale(scale, scale);
            // Left sail
            crc2.beginPath();
            crc2.moveTo(150, 145);
            crc2.quadraticCurveTo(85, 180, 85, 260);
            crc2.quadraticCurveTo(105, 250, 150, 260);
            crc2.quadraticCurveTo(125, 200, 150, 145);
            crc2.closePath();
            crc2.fillStyle = "#ffab5c";
            crc2.strokeStyle = "#ffab5c";
            crc2.fill();
            crc2.stroke();
            // Right sail
            crc2.moveTo(160, 145);
            crc2.lineTo(160, 260);
            crc2.lineTo(225, 260);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            // Little Flag
            crc2.beginPath();
            crc2.moveTo(150, 100);
            crc2.lineTo(150, 140);
            crc2.lineTo(100, 120);
            crc2.closePath();
            crc2.fillStyle = "#db6a00";
            crc2.fill();
            // Bottom
            crc2.beginPath();
            crc2.rect(70, 280, 170, 40);
            crc2.closePath();
            crc2.fillStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
            crc2.strokeStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
            crc2.fill();
            crc2.stroke();   
            // Mast
            crc2.beginPath();
            crc2.rect(150, 100, 10, 180);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }

        update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
}