var strand;
(function (strand) {
    class Sea {
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
        drawSea() {
            let gradient = strand.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(.5, "hsl(" + 232 + "," + "86%," + "31%" + ")");
            gradient.addColorStop(1, "hsl(" + 210 + "," + "86%," + "69%" + ")");
            strand.crc2.fillStyle = gradient;
            strand.crc2.fillRect(this.x, this.y, this.x2, this.y2);
        }
    }
    strand.Sea = Sea;
})(strand || (strand = {}));
//# sourceMappingURL=Sea.js.map