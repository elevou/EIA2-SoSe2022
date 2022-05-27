var strand;
(function (strand) {
    class Towel {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawTowel() {
            strand.crc2.save();
            strand.crc2.translate(this.x, this.y);
            strand.crc2.beginPath();
            strand.crc2.moveTo(130, 60);
            strand.crc2.lineTo(70, 60);
            strand.crc2.lineTo(40, 140);
            strand.crc2.lineTo(160, 140);
            strand.crc2.closePath();
            strand.crc2.fillStyle = "#c56373";
            strand.crc2.fill();
            strand.crc2.restore();
        }
    }
    strand.Towel = Towel;
})(strand || (strand = {}));
//# sourceMappingURL=Towel.js.map