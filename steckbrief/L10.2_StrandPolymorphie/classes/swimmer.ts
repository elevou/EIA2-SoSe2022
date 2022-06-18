namespace L10_2 {
    export class Swimmer extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }
        draw(): void {
            let scale: number = ((crc2.canvas.width * .15) / 250);
            crc2.save();
            crc2.translate(this.posX, this.posY);
            crc2.scale(scale, scale);
            // Surfboard
            crc2.beginPath();
            crc2.fillStyle = "#0f332d";
            crc2.ellipse(110, 130, 70, 17, 0, 0, 2 * Math.PI, false);
            crc2.fill();
            crc2.closePath();
            // Legs
            crc2.beginPath();
            crc2.moveTo(90, 90);    // left leg
            crc2.lineTo(90, 130);
            crc2.moveTo(110, 90);  // right leg
            crc2.lineTo(110, 130);
            crc2.closePath();
            crc2.strokeStyle = "#ecbc93";
            crc2.lineWidth = 9;
            crc2.stroke(); 
            // Arms
            crc2.beginPath();
            crc2.moveTo(87, 40);
            crc2.lineTo(70, 70);
            crc2.moveTo(113, 40);
            crc2.lineTo(130, 70);
            crc2.closePath();
            crc2.strokeStyle = "#ecbc93";
            crc2.lineWidth = 7;
            crc2.stroke();
            // Body
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.rect(85, 37, 30, 40);
            crc2.closePath();
            crc2.fillStyle = "#ecbc93";
            crc2.strokeStyle = "#ecbc93";
            crc2.fill();
            crc2.stroke();
            // Head
            crc2.beginPath();
            crc2.arc(100, 20, 15, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#ecbc93"; 
            crc2.strokeStyle = "#ecbc93";
            crc2.lineWidth = 1;
            crc2.fill();
            crc2.stroke();
            // Mouth
            crc2.beginPath();
            crc2.strokeStyle = "red"; 
            crc2.arc(100, 25, 5, 0, Math.PI);
            crc2.stroke();
            // Eyes
            crc2.beginPath();
            crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
            crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            // Badehose
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.rect(85, 77, 30, 15);
            crc2.closePath();
            crc2.fillStyle = "#58217d";
            crc2.fill();
    
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