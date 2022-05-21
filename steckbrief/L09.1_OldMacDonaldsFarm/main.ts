/**
 * Aufgabe: L09.1_OldMacDonaldsFarm
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 20.05.2022
 * Quellen: https://www.w3schools.com/jsref/jsref_return.asp
 */
namespace L09_OldMacDonaldsFarm {
    let startBtn: HTMLButtonElement;
    let song: HTMLDivElement;
    let storage: HTMLDivElement;
    let img: HTMLDivElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        startBtn = document.createElement("button");
        startBtn.innerHTML = "Start";
        document.body.appendChild(startBtn);
        startBtn.addEventListener("click", farmSettings);
    }
    
    function farmSettings(_event: Event): void {
        startBtn.remove();
     
        let foodList: string[] = ["wheat", "seed", "hay", "grass", "carrots", "grain", "cheese"];
        let soundList: string[] = ["moo", "gack", "neigh", "meeh", "oink", "baah", "wuff"];
        let cow: Animal = new Animal("Anna", "cow", foodList[0], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[0]);
        let chicken: Animal = new Animal("Berta", "chicken", foodList[1], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[1]);
        let horse: Animal = new Animal("Clara", "horse", foodList[2], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[2]);
        let sheep: Animal = new Animal("David", "sheep", foodList[3], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[3]);
        let pig: Animal = new Animal("Ella", "pig", foodList[4], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[4]);
        let goat: Animal = new Animal("Flori", "goat", foodList[5], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[5]);
        let dog: Animal = new Animal("Greta", "dog", foodList[6], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[6]);
        
        let animals: Animal[] = [cow, chicken, horse, sheep, pig, goat, dog];

        for (let i: number = 0; i < animals.length; i++) {
            let allImages: HTMLSpanElement = document.createElement("span");
            img = document.createElement("div");
            img.classList.add("imageBox");
            document.body.appendChild(img);
            allImages.innerHTML += animals[i].picture();
            img.appendChild(allImages);
            //console.log(img);

            let allSongs: HTMLSpanElement = document.createElement("span");
            song = document.createElement("div");
            song.classList.add("songBox");
            document.body.appendChild(song);
            allSongs.innerHTML = animals[i].sing();
            song.appendChild(allSongs);
            //console.log(song);

            let allFood: HTMLSpanElement = document.createElement("span");
            storage = document.createElement("div");
            storage.classList.add("storageBox");
            document.body.appendChild(storage);
            animals[i].foodStorage -= animals[i].foodMeal;
            allFood.innerHTML = animals[i].eat();
            storage.appendChild(allFood);
            //console.log(storage);
        }
    }

    function setRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}