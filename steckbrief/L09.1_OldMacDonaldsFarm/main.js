/**
 * Aufgabe: L09.1_OldMacDonaldsFarm
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 20.05.2022
 * Quellen: https://www.w3schools.com/jsref/jsref_return.asp
 */
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    let startBtn;
    let song;
    let storage;
    let img;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        startBtn = document.createElement("button");
        startBtn.innerHTML = "Start";
        document.body.appendChild(startBtn);
        startBtn.addEventListener("click", farmSettings);
    }
    function farmSettings() {
        startBtn.remove();
        let foodList = ["wheat", "seed", "hay", "grass", "carrots", "grain", "cheese"];
        let soundList = ["moo", "gack", "neigh", "meeh", "oink", "baah", "wuff"];
        let cow = new L09_OldMacDonaldsFarm.Animal("Anna", "cow", foodList[0], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[0]);
        let chicken = new L09_OldMacDonaldsFarm.Animal("Berta", "chicken", foodList[1], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[1]);
        let horse = new L09_OldMacDonaldsFarm.Animal("Clara", "horse", foodList[2], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[2]);
        let sheep = new L09_OldMacDonaldsFarm.Animal("David", "sheep", foodList[3], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[3]);
        let pig = new L09_OldMacDonaldsFarm.Animal("Ella", "pig", foodList[4], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[4]);
        let goat = new L09_OldMacDonaldsFarm.Animal("Flori", "goat", foodList[5], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[5]);
        let dog = new L09_OldMacDonaldsFarm.Animal("Greta", "dog", foodList[6], setRandomNumber(1, 4), setRandomNumber(5, 15), soundList[6]);
        let animals = [cow, chicken, horse, sheep, pig, goat, dog];
        for (let i = 0; i < animals.length; i++) {
            let allImages = document.createElement("span");
            img = document.createElement("div");
            img.classList.add("imageBox");
            document.body.appendChild(img);
            allImages.innerHTML += animals[i].picture();
            img.appendChild(allImages);
            //console.log(img);
            let allSongs = document.createElement("span");
            song = document.createElement("div");
            song.classList.add("songBox");
            document.body.appendChild(song);
            allSongs.innerHTML = animals[i].sing();
            song.appendChild(allSongs);
            //console.log(song);
            let allFood = document.createElement("span");
            storage = document.createElement("div");
            storage.classList.add("storageBox");
            document.body.appendChild(storage);
            animals[i].foodStorage -= animals[i].foodMeal;
            allFood.innerHTML = animals[i].eat();
            storage.appendChild(allFood);
            //console.log(storage);
        }
    }
    function setRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=main.js.map