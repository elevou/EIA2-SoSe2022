namespace strand {
    export class Cloud {
        position: Vector;
        valocity: Vector;
        type: number;
        random: number;
        
        constructor(_random: number) {
        this.position = new Vector(0, 0); 
        this.valocity = new Vector(0, 0); 
        this.valocity.random(300, 200); 
        this.random = _random;
        }    

        drawCloud(): void {
            let scale: number = ((crc2.canvas.width * 0.3) / 1000);
            crc2.save();
            crc2.translate(this.position.x, this.random);
            crc2.scale(scale, scale);
            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.closePath();
            crc2.lineWidth = 2;
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.strokeStyle = "#ffffff";
            crc2.stroke();
            crc2.restore();
        
        }
        
        animate(_timeslice: number): void {
            let offset: Vector = new Vector(this.valocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            
            if (this.position.x < 0) {
            this.position.x += crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
            this.position.x -= crc2.canvas.width;
            }
        }
    }
}