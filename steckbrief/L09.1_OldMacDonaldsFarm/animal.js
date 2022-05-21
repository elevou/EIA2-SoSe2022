/**
 * Aufgabe: L09.1_OldMacDonaldsFarm
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 20.05.2022
 * Quellen: https://www.w3schools.com/jsref/jsref_return.asp
 */
var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    class Animal {
        name;
        image;
        species;
        food;
        foodMeal;
        foodStorage;
        sound;
        constructor(_name, _species, _food, _foodMeal, _foodStorage, _sound) {
            this.name = _name;
            this.image = "<img src=image/" + _species + ".png heigth=100px width=100px>";
            this.species = _species;
            this.food = _food;
            this.foodMeal = _foodMeal;
            this.foodStorage = _foodStorage;
            this.sound = _sound;
        }
        picture() {
            return this.image;
        }
        eat() {
            return this.name + " " + "eats" + " " + this.foodMeal + " " + this.food + "<br>" +
                this.foodStorage + " " + this.food + " " + "left in old MacDonalds storage!";
        }
        sing() {
            return this.name + " " + "the" + " " + this.species + " " + "eats" + " " + this.food + "<br><br>" +
                "Old McDonald had a farm, E-I-E-I-O. <br>" +
                "And on his farm he had a" + " " + this.species + " " + "E-I-E-I-O. <br>" +
                "With a" + " " + this.sound + " " + this.sound + " " + "here. <br>" +
                "And a" + " " + this.sound + " " + this.sound + " " + "there. <br>" +
                "Here a" + " " + this.sound + ", there a" + " " + this.sound + ". <br>" +
                "Everywhere a" + " " + this.sound + " " + this.sound + ". <br>" +
                "Old McDonald had a farm E-I-E-I-O.";
        }
    }
    L09_OldMacDonaldsFarm.Animal = Animal;
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map