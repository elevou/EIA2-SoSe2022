var strand;
(function (strand) {
    class Sand {
        x;
        y;
        x2;
        y2;
        constructor(_x, _y, _x2, _y2) {
            this.x = _x;
            this.y = _y;
            this.x2 = _x2;
            this.y2 = _y2;
        }
        drawSand() {
            strand.crc2.beginPath();
            strand.crc2.bezierCurveTo(0, this.x, this.y, 800, this.x2, this.y2);
            strand.crc2.lineTo(strand.crc2.canvas.width, strand.crc2.canvas.height);
            strand.crc2.lineTo(0, strand.crc2.canvas.height);
            strand.crc2.closePath();
            let gradient = strand.crc2.createLinearGradient(900, 0, 0, 700);
            gradient.addColorStop(0, "hsl(" + 46 + "," + "87%," + "74%" + ")");
            gradient.addColorStop(.5, "hsl(" + 46 + "," + "59%," + "74%" + ")");
            gradient.addColorStop(1, "hsl(" + 46 + "," + "85%," + "83%" + ")");
            strand.crc2.fillStyle = gradient;
            strand.crc2.fill();
        }
    }
    strand.Sand = Sand;
})(strand || (strand = {}));
//# sourceMappingURL=Sand.js.map