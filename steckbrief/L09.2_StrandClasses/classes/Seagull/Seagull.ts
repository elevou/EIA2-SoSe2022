namespace strand {
    export class Seagull {
        position: Vector;
        valocity: Vector;
        scalenumber: number;
        
        constructor() {
        this.position = new Vector(0, 0); 
        this.valocity = new Vector(0, 0); 
        this.valocity.random(300, 200); 
        }
        
        drawSeagull(): void {
            let scale: number = (this.scalenumber);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(scale, scale);        
            crc2.beginPath();
            crc2.moveTo(0, 10);
            crc2.bezierCurveTo(0, 10, 10, -10, 20, 10 );
            crc2.bezierCurveTo(20, 10, 30, -10, 40, 10 );
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.restore();
        }

        animate(_timeslice: number): void {
            let offset: Vector = new Vector(this.valocity.x, this.valocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            
            if (this.position.x < 0) {
            this.position.x += crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
            this.position.x -= crc2.canvas.width;
            }
            if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
            if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
        }
    }
}