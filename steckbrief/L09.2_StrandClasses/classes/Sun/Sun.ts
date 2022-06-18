namespace strand {
    export class Sun {
        x: number;
        y: number;
        radius: number;

        constructor (_x: number, _y: number, _radius: number) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
        }

        drawSun(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ece03c";
            crc2.fill();
        }
    }
}