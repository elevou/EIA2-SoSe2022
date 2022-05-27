var strand;
(function (strand) {
    class Sand {
        positionX1;
        positionY1;
        positionX2;
        positionY2;
        constructor(_positionX1, _positionY1, _positionX2, _positionY2) {
            this.positionX1 = _positionX1;
            this.positionY1 = _positionY1;
            this.positionX2 = _positionX2;
            this.positionY2 = _positionY2;
        }
        drawSand() {
            strand.crc2.beginPath();
            strand.crc2.bezierCurveTo(0, this.positionX1, this.positionY1, 800, this.positionX2, this.positionY2);
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