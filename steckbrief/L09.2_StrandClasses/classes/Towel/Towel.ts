namespace strand {
    export class Towel {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        drawTowel(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.moveTo(130, 60);
            crc2.lineTo(70, 60);
            crc2.lineTo(40, 140);
            crc2.lineTo(160, 140);
            crc2.closePath();
            crc2.fillStyle = "#c56373";
            crc2.fill();
            crc2.restore();
        }
    }
}