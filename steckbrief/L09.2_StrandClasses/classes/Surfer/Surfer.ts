namespace strand {
    export class Surfer {
        position: Vector;
        valocity: Vector;
        color1: string;
        color2: string;
        color3: string;
        color4: string;

        constructor(_color1: string, _color2: string, _color3: string, _color4: string) {
            this.position = new Vector(0, crc2.canvas.height * 0.5); 
            this.valocity = new Vector(0, 0); 
            this.valocity.random(300, 200); 
            this.color1 = _color1;
            this.color2 = _color2;
            this.color3 = _color3;
            this.color4 = _color4;
        }

        drawSurfer(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            // Surfboard
            crc2.beginPath();
            crc2.fillStyle = this.color1;
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
            crc2.strokeStyle = this.color2;
            crc2.lineWidth = 9;
            crc2.stroke(); 
            // Arms
            crc2.beginPath();
            crc2.moveTo(87, 40);
            crc2.lineTo(70, 70);
            crc2.moveTo(113, 40);
            crc2.lineTo(130, 70);
            crc2.closePath();
            crc2.strokeStyle = this.color2;
            crc2.lineWidth = 7;
            crc2.stroke();
            // Body
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.rect(85, 37, 30, 40);
            crc2.closePath();
            crc2.fillStyle = this.color2;
            crc2.strokeStyle = this.color3;
            crc2.fill();
            crc2.stroke();
            // Head
            crc2.beginPath();
            crc2.arc(100, 20, 15, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = this.color2; 
            crc2.strokeStyle = this.color3;
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
            crc2.fillStyle = this.color4;
            crc2.fill();
    
            crc2.restore();
        }
        animate (_timeslice: number): void {
            let offset: Vector = new Vector(this.valocity.x, 0);
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