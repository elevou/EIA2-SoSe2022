var L10_2;
(function (L10_2) {
    function drawBackground() {
        //sky
        L10_2.crc2.fillStyle = "#93c4eb";
        L10_2.crc2.fillRect(0, 0, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height);
        //water
        L10_2.crc2.fillStyle = "#1476e6";
        L10_2.crc2.fillRect(0, L10_2.crc2.canvas.height * 0.2, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height * 0.8);
        //sand
        L10_2.crc2.fillStyle = "#ebcb7a";
        L10_2.crc2.fillRect(0, L10_2.crc2.canvas.height * 0.5, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height * 0.5);
    }
    L10_2.drawBackground = drawBackground;
    function drawBesucher(_X, _Y) {
        let scale = ((L10_2.crc2.canvas.width * 2) / 1000);
        L10_2.crc2.save();
        L10_2.crc2.translate(_X, _Y);
        L10_2.crc2.scale(scale, scale);
        // towel
        L10_2.crc2.beginPath();
        L10_2.crc2.moveTo(10, 70);
        L10_2.crc2.lineTo(60, 70);
        L10_2.crc2.lineTo(50, 60);
        L10_2.crc2.lineTo(20, 60);
        L10_2.crc2.closePath();
        L10_2.crc2.strokeStyle = "#e61484";
        L10_2.crc2.fillStyle = "#e61484";
        L10_2.crc2.fill();
        L10_2.crc2.stroke();
        // body
        L10_2.crc2.beginPath();
        L10_2.crc2.moveTo(20, 60);
        L10_2.crc2.bezierCurveTo(20, 60, 35, 75, 50, 60);
        L10_2.crc2.lineTo(50, 55);
        L10_2.crc2.lineTo(45, 50);
        L10_2.crc2.lineTo(45, 40);
        L10_2.crc2.lineTo(50, 50);
        L10_2.crc2.lineTo(52.5, 45);
        L10_2.crc2.lineTo(50, 30);
        L10_2.crc2.bezierCurveTo(50, 30, 35, 20, 20, 30);
        L10_2.crc2.lineTo(17.5, 45);
        L10_2.crc2.lineTo(20, 50);
        L10_2.crc2.lineTo(25, 40);
        L10_2.crc2.lineTo(25, 50);
        L10_2.crc2.lineTo(20, 55);
        L10_2.crc2.closePath();
        L10_2.crc2.fillStyle = "#ecbc93";
        L10_2.crc2.fill();
        L10_2.crc2.strokeStyle = "#ecbc93";
        L10_2.crc2.stroke();
        //bottom
        L10_2.crc2.beginPath();
        L10_2.crc2.moveTo(20, 60);
        L10_2.crc2.bezierCurveTo(20, 60, 35, 75, 50, 60);
        L10_2.crc2.lineTo(50, 55);
        L10_2.crc2.lineTo(20, 55);
        L10_2.crc2.closePath();
        L10_2.crc2.fillStyle = "#5bb383";
        L10_2.crc2.fill();
        L10_2.crc2.strokeStyle = "#5bb383";
        L10_2.crc2.stroke();
        // top
        L10_2.crc2.beginPath();
        L10_2.crc2.moveTo(25, 45);
        L10_2.crc2.lineTo(45, 45);
        L10_2.crc2.fillStyle = "#5bb383";
        L10_2.crc2.fill();
        L10_2.crc2.strokeStyle = "#5bb383";
        L10_2.crc2.stroke();
        // hair
        L10_2.crc2.beginPath();
        L10_2.crc2.arc(35, 20, 12, 0, Math.PI * 2);
        L10_2.crc2.fillStyle = "#503007";
        L10_2.crc2.strokeStyle = "#503007";
        L10_2.crc2.fill();
        L10_2.crc2.stroke();
        L10_2.crc2.restore();
    }
    L10_2.drawBesucher = drawBesucher;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=background.js.map