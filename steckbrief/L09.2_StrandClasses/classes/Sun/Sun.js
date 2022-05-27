var strand;
(function (strand) {
    class Sun {
        x;
        y;
        radius;
        constructor(_x, _y, _radius) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
        }
        drawSun() {
            strand.crc2.beginPath();
            strand.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            strand.crc2.closePath();
            strand.crc2.fillStyle = "#ece03c";
            strand.crc2.fill();
        }
    }
    strand.Sun = Sun;
})(strand || (strand = {}));
//# sourceMappingURL=Sun.js.map