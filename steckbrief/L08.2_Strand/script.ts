/**
 * Aufgabe: L08.2_Strand
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 14.05.2022
 * Quellen: keine
 */
namespace strand {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        if (canvas.getContext) {
            crc2 = canvas.getContext("2d")!;
            window.addEventListener("resize", resizeCanvas, false);
            resizeCanvas();
            alert("If you resize the window, you need to refresh the site! :)");
        }
        sky();   
        sun(); 
        water(); 
        sand();
        cloud(0.005, 0.05); // Cloud 1
        cloud(0.5, 0.1); // Cloud 2
        boat();
        seagull(0.25, 0.05); //Seagull 1
        seagull(0.5, 0.2); //Seagull 2
        seagull(0.9, 0.1); //Seagull 3
        swimmer();
        surfer();
        towel();
        urlauber();
    }

    function resizeCanvas(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function sky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, "hsl(" + 211 + "," + "100%,"  + "55%" + ")");
        gradient.addColorStop(.5, "hsl(" + 198 + "," + "89%,"  + "61%" + ")");
        gradient.addColorStop(1, "hsl(" + 198 + "," + "100%,"  + "73%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.4);
    }

    function water(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(.5, "hsl(" + 232 + "," + "86%,"  + "31%" + ")");
        gradient.addColorStop(1, "hsl(" + 210 + "," + "86%,"  + "69%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, crc2.canvas.height * 0.4, crc2.canvas.width, crc2.canvas.height * 0.6);
    }

    function sand(): void {
        crc2.beginPath();
        crc2.bezierCurveTo(0, crc2.canvas.height * 0.8, crc2.canvas.width * 0.6, 800, crc2.canvas.width, crc2.canvas.height * 0.6);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        
        let gradient: CanvasGradient = crc2.createLinearGradient(900, 0, 0, 700);
        gradient.addColorStop(0, "hsl(" + 46 + "," + "87%,"  + "74%" + ")");
        gradient.addColorStop(.5, "hsl(" + 46 + "," + "59%,"  + "74%" + ")");
        gradient.addColorStop(1, "hsl(" + 46 + "," + "85%,"  + "83%" + ")");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function cloud(_x: number, _y: number): void {
        let scale: number = ((crc2.canvas.width * 0.3) / 500);
        console.log(scale);
        crc2.save();
        crc2.translate(crc2.canvas.width * _x, crc2.canvas.height * _y);
        crc2.scale(scale, scale);
        crc2.beginPath();
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.restore();
    }

    function sun(): void {
        crc2.beginPath();
        crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ece03c";
        crc2.fill();
    }

    function boat(): void {
    // First boat 
        crc2.save();
        crc2.translate(crc2.canvas.width * 0.05, crc2.canvas.height * 0.1);
        // Left sail
        crc2.beginPath();
        crc2.moveTo(150, 145);
        crc2.quadraticCurveTo(85, 180, 85, 260);
        crc2.quadraticCurveTo(105, 250, 150, 260);
        crc2.quadraticCurveTo(125, 200, 150, 145);
        crc2.closePath();
        crc2.fillStyle = "#c3abf7";
        crc2.strokeStyle = "#c3abf7";
        crc2.fill();
        crc2.stroke();
        // Right sail
        crc2.moveTo(160, 145);
        crc2.lineTo(160, 260);
        crc2.lineTo(225, 260);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // Little Flag
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.lineTo(150, 140);
        crc2.lineTo(100, 120);
        crc2.closePath();
        crc2.fillStyle = "#8251ec";
        crc2.fill();
        // Bottom
        crc2.beginPath();
        crc2.rect(70, 280, 170, 40);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
        crc2.strokeStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
        crc2.fill();
        crc2.stroke();   
        // Mast
        crc2.beginPath();
        crc2.rect(150, 100, 10, 180);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.fill();
        crc2.stroke();

        crc2.restore();

        //--------------------.--------------------.--------------------//

    // Second boat 
        crc2.save();
        crc2.translate(crc2.canvas.width * 0.6, crc2.canvas.height * 0.1);
        // Left sail
        crc2.beginPath();
        crc2.moveTo(150, 145);
        crc2.quadraticCurveTo(85, 180, 85, 260);
        crc2.quadraticCurveTo(105, 250, 150, 260);
        crc2.quadraticCurveTo(125, 200, 150, 145);
        crc2.closePath();
        crc2.fillStyle = "#ffab5c";
        crc2.strokeStyle = "#ffab5c";
        crc2.fill();
        crc2.stroke();
        // Right sail
        crc2.moveTo(160, 145);
        crc2.lineTo(160, 260);
        crc2.lineTo(225, 260);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        // Little Flag
        crc2.beginPath();
        crc2.moveTo(150, 100);
        crc2.lineTo(150, 140);
        crc2.lineTo(100, 120);
        crc2.closePath();
        crc2.fillStyle = "#db6a00";
        crc2.fill();
        // Bottom
        crc2.beginPath();
        crc2.rect(70, 280, 170, 40);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
        crc2.strokeStyle = "hsl(" + 31 + "," + "59%,"  + "29%" + ")";
        crc2.fill();
        crc2.stroke();   
        // Mast
        crc2.beginPath();
        crc2.rect(150, 100, 10, 180);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.fill();
        crc2.stroke();

        crc2.restore();
    }

    function swimmer(): void {
        crc2.save();
        crc2.translate((crc2.canvas.width * 0.1) / 1000, crc2.canvas.height * 0.6);
        // Arms
        crc2.beginPath();
        crc2.moveTo(87, 40);
        crc2.lineTo(70, 70);
        crc2.moveTo(113, 40);
        crc2.lineTo(130, 70);
        crc2.closePath();
        crc2.strokeStyle = "#ffddbd";
        crc2.lineWidth = 7;
        crc2.stroke();
        // Body
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.rect(85, 37, 30, 40);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd";
        crc2.strokeStyle = "#d7bb93";
        crc2.fill();
        crc2.stroke();
        // Head
        crc2.beginPath();
        crc2.arc(100, 20, 15, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd"; 
        crc2.strokeStyle = "#d7bb93";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.stroke();
        // Mouth
        crc2.beginPath();
        crc2.strokeStyle = "red"; 
        crc2.arc(100, 25, 5, 0, Math.PI);
        crc2.stroke();
        // Eyes
        crc2.beginPath();
        crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
        crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
    }

    function surfer(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width * 0.4, crc2.canvas.height * 0.5);
        // Surfboard
        crc2.beginPath();
        crc2.fillStyle = "#454545";
        crc2.ellipse(110, 130, 70, 17, 0, 0, 2 * Math.PI, false);
        crc2.fill();
        crc2.closePath();
        // Legs
        crc2.beginPath();
        crc2.moveTo(90, 90);    // left leg
        crc2.lineTo(90, 130);
        crc2.moveTo(110, 90);  // right leg
        crc2.lineTo(110, 130);
        crc2.closePath();
        crc2.strokeStyle = "#ffddbd";
        crc2.lineWidth = 9;
        crc2.stroke(); 
        // Arms
        crc2.beginPath();
        crc2.moveTo(87, 40);
        crc2.lineTo(70, 70);
        crc2.moveTo(113, 40);
        crc2.lineTo(130, 70);
        crc2.closePath();
        crc2.strokeStyle = "#ffddbd";
        crc2.lineWidth = 7;
        crc2.stroke();
        // Body
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.rect(85, 37, 30, 40);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd";
        crc2.strokeStyle = "#d7bb93";
        crc2.fill();
        crc2.stroke();
        // Head
        crc2.beginPath();
        crc2.arc(100, 20, 15, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd"; 
        crc2.strokeStyle = "#d7bb93";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.stroke();
        // Mouth
        crc2.beginPath();
        crc2.strokeStyle = "red"; 
        crc2.arc(100, 25, 5, 0, Math.PI);
        crc2.stroke();
        // Eyes
        crc2.beginPath();
        crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
        crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        // Badehose
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.rect(85, 77, 30, 15);
        crc2.closePath();
        crc2.fillStyle = "#256535";
        crc2.fill();

        crc2.restore();
    }

    function urlauber(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width * 0.55, crc2.canvas.height * 0.8);
        // Hair
        crc2.beginPath();
        crc2.ellipse(100, 22, 20, 25, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#883c35";
        crc2.fill();
        // Legs
        crc2.beginPath();
        crc2.moveTo(90, 90);    // left leg
        crc2.lineTo(70, 130);
        crc2.moveTo(110, 90);  // right leg
        crc2.lineTo(130, 130);
        crc2.closePath();
        crc2.strokeStyle = "#ffddbd";
        crc2.lineWidth = 9;
        crc2.stroke(); 
        // Arms
        crc2.beginPath();
        crc2.moveTo(87, 40);
        crc2.lineTo(70, 70);
        crc2.moveTo(113, 40);
        crc2.lineTo(130, 70);
        crc2.closePath();
        crc2.strokeStyle = "#ffddbd";
        crc2.lineWidth = 7;
        crc2.stroke();
        // Body
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.rect(85, 37, 30, 40);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd";
        crc2.strokeStyle = "#d7bb93";
        crc2.fill();
        crc2.stroke();
        // Head
        crc2.beginPath();
        crc2.arc(100, 20, 15, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fillStyle = "#ffddbd"; 
        crc2.strokeStyle = "#d7bb93";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.stroke();
        // Mouth
        crc2.beginPath();
        crc2.strokeStyle = "red"; 
        crc2.arc(100, 25, 5, 0, Math.PI);
        crc2.stroke();
        // Eyes
        crc2.beginPath();
        crc2.arc(95, 15, 2, 0, Math.PI * 2); // left eye
        crc2.arc(105, 15, 2, 0, Math.PI * 2); // right eye
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
    // Bikini
        // Top
        crc2.beginPath();
        crc2.arc(93, 55, 7, 0, Math.PI * 2); // left
        crc2.arc(106, 55, 7, 0, Math.PI * 2); // right
        crc2.closePath();
        crc2.fillStyle = "#6481be";
        crc2.fill();
        // Badehose
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.rect(85, 77, 30, 15);
        crc2.closePath();
        crc2.fillStyle = "#6481be";
        crc2.fill();

        crc2.restore();
    }

    function towel(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width * 0.55, crc2.canvas.height * 0.8);
        crc2.beginPath();
        crc2.moveTo(130, 60);
        crc2.lineTo(70, 60);
        crc2.lineTo(40, 140);
        crc2.lineTo(160, 140);
        crc2.closePath();
        crc2.fillStyle = "#c56373";
        crc2.fill();
        crc2.restore();
    }

    function seagull(_x: number, _y: number): void {
        let scale: number = ((crc2.canvas.width * 0.2) / 100);
        console.log(scale);
        crc2.save();
        crc2.translate(crc2.canvas.width * _x, crc2.canvas.height * _y);
        crc2.scale(scale, scale);        
        crc2.beginPath();
        crc2.moveTo(0, 10);
        crc2.bezierCurveTo(0, 10, 10, -10, 20, 10 );
        crc2.bezierCurveTo(20, 10, 30, -10, 40, 10 );
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.restore();
    }
}
