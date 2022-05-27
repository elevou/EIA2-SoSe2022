namespace strand {
    export class Sand {
        positionX1: number;
        positionY1: number;
        positionX2: number;
        positionY2: number;

        constructor(_positionX1: number, _positionY1: number, _positionX2: number, _positionY2: number) {
            this.positionX1 = _positionX1;
            this.positionY1 = _positionY1;
            this.positionX2 = _positionX2;
            this.positionY2 = _positionY2;
        }

        drawSand(): void {
            crc2.beginPath();
            crc2.bezierCurveTo(0, this.positionX1, this.positionY1, 800, this.positionX2, this.positionY2);
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