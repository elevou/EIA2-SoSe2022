namespace L10_2 {
    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
        //sky
        crc2.fillStyle = "#93c4eb";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //water
        crc2.fillStyle = "#1476e6";
        crc2.fillRect(0, crc2.canvas.height * 0.2, crc2.canvas.width, crc2.canvas.height * 0.8);
        //sand
        crc2.fillStyle = "#ebcb7a";
        crc2.fillRect(0, crc2.canvas.height * 0.5, crc2.canvas.width, crc2.canvas.height * 0.5);
    }

    export function drawBesucher(_X: number, _Y: number): void {
        let scale: number = ((crc2.canvas.width * 2) / 1000);
        crc2.save();
        crc2.translate(_X, _Y);
        crc2.scale(scale, scale);
        // towel
        crc2.beginPath();
        crc2.moveTo(10, 70);
        crc2.lineTo(60, 70);
        crc2.lineTo(50, 60);
        crc2.lineTo(20, 60);
        crc2.closePath();
        crc2.strokeStyle = "#e61484";
        crc2.fillStyle = "#e61484";
        crc2.fill();
        crc2.stroke();

        // body
        crc2.beginPath();
        crc2.moveTo(20, 60);
        crc2.bezierCurveTo(20, 60, 35 , 75, 50, 60);
        crc2.lineTo(50, 55);
        crc2.lineTo(45, 50);
        crc2.lineTo(45, 40);
        crc2.lineTo(50, 50);
        crc2.lineTo(52.5, 45);
        crc2.lineTo(50, 30);
        crc2.bezierCurveTo(50, 30, 35 , 20, 20, 30);
        crc2.lineTo(17.5, 45);
        crc2.lineTo(20, 50);
        crc2.lineTo(25, 40);
        crc2.lineTo(25, 50);
        crc2.lineTo(20, 55);
        crc2.closePath();
        crc2.fillStyle = "#ecbc93";
        crc2.fill();
        crc2.strokeStyle = "#ecbc93";
        crc2.stroke();

        //bottom
        crc2.beginPath();
        crc2.moveTo(20, 60);
        crc2.bezierCurveTo(20, 60, 35 , 75, 50, 60);
        crc2.lineTo(50, 55);
        crc2.lineTo(20, 55);
        crc2.closePath();
        crc2.fillStyle = "#5bb383";
        crc2.fill();
        crc2.strokeStyle = "#5bb383";
        crc2.stroke();

        // top
        crc2.beginPath();
        crc2.moveTo(25, 45);
        crc2.lineTo(45, 45);
        crc2.fillStyle = "#5bb383";
        crc2.fill();
        crc2.strokeStyle = "#5bb383";
        crc2.stroke();
            
        // hair
        crc2.beginPath();
        crc2.arc(35, 20, 12, 0, Math.PI * 2);
        crc2.fillStyle = "#503007";
        crc2.strokeStyle = "#503007";
        crc2.fill();
        crc2.stroke();

        crc2.restore();
    }
}