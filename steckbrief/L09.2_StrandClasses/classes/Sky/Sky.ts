namespace strand {
    export class Sky {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        drawSky(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, "hsl(" + 211 + "," + "100%,"  + "55%" + ")");
            gradient.addColorStop(.5, "hsl(" + 198 + "," + "89%,"  + "61%" + ")");
            gradient.addColorStop(1, "hsl(" + 198 + "," + "100%,"  + "73%" + ")");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, this.x, this.y);
        }
    }
}