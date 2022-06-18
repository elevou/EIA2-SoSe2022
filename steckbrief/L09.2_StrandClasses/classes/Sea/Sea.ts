namespace strand {
    export class Sea {
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
        drawSea(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(.5, "hsl(" + 232 + "," + "86%,"  + "31%" + ")");
            gradient.addColorStop(1, "hsl(" + 210 + "," + "86%,"  + "69%" + ")");
            crc2.fillStyle = gradient;
            crc2.fillRect(this.x, this.y, this.x2, this.y2);
        }
    }
}