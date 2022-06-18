namespace strand {
    export class Boat {
        position: Vector;
        velocity: Vector;
        color1: string;
        color2: string;
        color3: string;

        constructor( _color1: string, _color2: string, _color3: string) {
            this.position = new Vector(0, crc2.canvas.height * 0.1); 
            this.velocity = new Vector(0, 0); 
            this.velocity.random(300, 200); 
            this.color1 = _color1;
            this.color2 = _color2;
            this.color3 = _color3;
        }

        drawBoat(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // Left sail
            crc2.beginPath();
            crc2.moveTo(150, 145);
            crc2.quadraticCurveTo(85, 180, 85, 260);
            crc2.quadraticCurveTo(105, 250, 150, 260);
            crc2.quadraticCurveTo(125, 200, 150, 145);
            crc2.closePath();
            crc2.fillStyle = this.color1;
            crc2.strokeStyle = this.color1;
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
            crc2.fillStyle = this.color2;
            crc2.fill();
            // Bottom
            crc2.beginPath();
            crc2.rect(70, 280, 170, 40);
            crc2.closePath();
            crc2.fillStyle = this.color3;
            crc2.strokeStyle = this.color3;
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
        animate (_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            
            if (this.position.x < -250) {
            this.position.x += crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
            this.position.x -= crc2.canvas.width;
            }
        }
    }
}