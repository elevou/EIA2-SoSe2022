namespace strand {
    export class Sand {
        x: number;
        y: number;
        x2: number;
        y2: number;

        constructor(_x: number, _y: number, _x2: number, _y2: number) {
            this.x = _x;
            this.y = _y;
            this.x2 = _x2;
            this.y2 = _y2;
        }

        drawSand(): void {
            crc2.beginPath();
            crc2.bezierCurveTo(0, this.x, this.y, 800, this.x2, this.y2);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.closePath();
            
            let gradient: CanvasGradient = crc2.createLinearGradient(900, 0, 0, 700);
            gradient.addColorStop(0, "hsl(" + 46 + "," + "87%,"  + "74%" + ")");
            gradient.addColorStop(.5, "hsl(" + 46 + "," + "59%,"  + "74%" + ")");
            gradient.addColorStop(1, "hsl(" + 46 + "," + "85%,"  + "83%" + ")");
    
            crc2.fillStyle = gradient;
            crc2.fill();
        }
    }
}