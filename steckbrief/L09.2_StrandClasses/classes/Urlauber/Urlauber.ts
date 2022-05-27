namespace strand {
    export class Urlauber {
        x: number;
        y: number;
        hairColor: string;
        skinColor: string;
        skinStrokeColor: string;
        bikiniColor: string;

        constructor(_x: number, _y: number, _hairColor: string, _skinColor: string, _skinStrokeColor: string, _bikiniColor: string) {
            this.x = _x;
            this.y = _y;
            this.hairColor = _hairColor;
            this.skinColor = _skinColor;
            this.skinStrokeColor = _skinStrokeColor;
            this.bikiniColor = _bikiniColor;
        }
        drawUrlauber(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            // Hair
            crc2.beginPath();
            crc2.ellipse(100, 22, 20, 25, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.hairColor;
            crc2.fill();
            // Legs
            crc2.beginPath();
            crc2.moveTo(90, 90);    // left leg
            crc2.lineTo(70, 130);
            crc2.moveTo(110, 90);  // right leg
            crc2.lineTo(130, 130);
            crc2.closePath();
            crc2.strokeStyle = this.skinColor;
            crc2.lineWidth = 9;
            crc2.stroke(); 
            // Arms
            crc2.beginPath();
            crc2.moveTo(87, 40);
            crc2.lineTo(70, 70);
            crc2.moveTo(113, 40);
            crc2.lineTo(130, 70);
            crc2.closePath();
            crc2.strokeStyle = this.skinColor;
            crc2.lineWidth = 7;
            crc2.stroke();
            // Body
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.rect(85, 37, 30, 40);
            crc2.closePath();
            crc2.fillStyle = this.skinColor;
            crc2.strokeStyle = this.skinStrokeColor;
            crc2.fill();
            crc2.stroke();
            // Head
            crc2.beginPath();
            crc2.arc(100, 20, 15, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = this.skinColor; 
            crc2.strokeStyle = this.skinStrokeColor;
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
        // Bikini
            // Top
            crc2.beginPath();
            crc2.arc(93, 55, 7, 0, Math.PI * 2); // left
            crc2.arc(106, 55, 7, 0, Math.PI * 2); // right
            crc2.closePath();
            crc2.fillStyle = this.bikiniColor;
            crc2.fill();
            // Badehose
            crc2.lineWidth = 1;
            crc2.beginPath();
            crc2.rect(85, 77, 30, 15);
            crc2.closePath();
            crc2.fillStyle = this.bikiniColor;
            crc2.fill();
    
            crc2.restore();
        }
    }
}