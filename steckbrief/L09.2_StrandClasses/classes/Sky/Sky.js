var strand;
(function (strand) {
    class Sky {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawSky() {
            let gradient = strand.crc2.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, "hsl(" + 211 + "," + "100%," + "55%" + ")");
            gradient.addColorStop(.5, "hsl(" + 198 + "," + "89%," + "61%" + ")");
            gradient.addColorStop(1, "hsl(" + 198 + "," + "100%," + "73%" + ")");
            strand.crc2.fillStyle = gradient;
            strand.crc2.fillRect(0, 0, this.x, this.y);
        }
    }
    strand.Sky = Sky;
})(strand || (strand = {}));
//# sourceMappingURL=Sky.js.map