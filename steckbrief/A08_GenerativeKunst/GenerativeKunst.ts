/**
 * Aufgabe: L08.1_GenerativeKunst
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 05.Mai.2022
 */

namespace L08_GenerativeKUnst {

    window.addEventListener("load", handleLoad);
    
    let crc2: CanvasRenderingContext2D;
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        
        drawBackground();
        drawRectangle();
        drawCircle();
        drawTriangle();
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 1200, 600);

        let randomColor: number = Math.round(Math.random() * (300 - 150 + 1)) + 200;
        let randomColor2: number = Math.round(Math.random() * (300 - 150 + 1)) + 200;
        let randomColor3: number = Math.round(Math.random() * (300 - 150 + 1)) + 200;

        gradient.addColorStop(0, "hsl(" + randomColor + "," + "60%,"  + "80%" + ")");
        gradient.addColorStop(.5, "hsl(" + randomColor2 + "," + "60%, " + "40%" + ")");
        gradient.addColorStop(1, "hsl(" + randomColor3 + "," + "60%, " + "15%" + ")");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1200, 600); 
    }

    function drawRectangle(): void {
        for (let currentIndex: number = 0; currentIndex < 25; currentIndex++) {
           
            let r: number = Math.floor(Math.random() * 137);
            let g: number = Math.floor(Math.random() * 10);
            let b: number = Math.floor(Math.random() * 100); 
            
            crc2.beginPath();
            crc2.stroke();
            crc2.rect(Math.floor(Math.random() * (1200) + 10), Math.floor(Math.random() * (600) + 10), Math.floor(Math.random() * (200) + 10), Math.floor(Math.random() * (200) + 10));
            crc2.closePath();

            crc2.fillStyle = "rgb(" + r + ", " + g + "," + b + ")";
            crc2.fill();
        }
    }
 
    function drawCircle(): void {
        for (let currentIndex: number = 0; currentIndex < 50; currentIndex++) {
            
            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255); 
            
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1200) + 10), Math.floor(Math.random() * (600) + 10), Math.floor(Math.random() * (70) + 5), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.strokeStyle = "rgb(" + r + ", " + g + "," + b + ")";
            crc2.lineWidth =  (Math.random() * 15) + 4;
        }
    }

    function drawTriangle(): void {
        for (let currentIndex: number = 0; currentIndex < 30; currentIndex++) {
            let locationX: number = Math.floor(Math.random() * 1000);
            let locationY: number = Math.floor(Math.random() * 600);
            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255); 

            crc2.beginPath();
            crc2.moveTo(locationX, locationY);
            crc2.lineTo(locationX, locationY + (Math.random() * 200) + 10);
            crc2.lineTo(locationX + (Math.random() * 200) + 10, locationY + (Math.random() * 50));
            crc2.closePath();
            
            crc2.stroke();
            crc2.strokeStyle = "rgb(" + r + ", " + g + "," + b + ")";
            crc2.lineWidth = 3;
        }
    }
}