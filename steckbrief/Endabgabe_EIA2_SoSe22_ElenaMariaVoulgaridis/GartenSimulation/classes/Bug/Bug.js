var GardenSimulation;
(function (GardenSimulation) {
    class Bug {
        constructor(_row, _collum) {
            this.position = 400;
            this.row = _row * 100;
            this.collum = _collum * 100;
        }
        draw() {
            GardenSimulation.cr2.resetTransform();
            this.move(this.row, this.collum);
            GardenSimulation.cr2.scale(.15, .15);
            GardenSimulation.cr2.drawImage(GardenSimulation.Load.bug, 0, 0);
        }
        move(_row, _collum) {
            GardenSimulation.cr2.translate(this.row, this.collum);
            if (this.position <= 0) {
                GardenSimulation.cr2.rotate(-GardenSimulation.animationTime);
            }
            else {
                this.position -= 5;
            }
        }
    }
    GardenSimulation.Bug = Bug;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Bug.js.map