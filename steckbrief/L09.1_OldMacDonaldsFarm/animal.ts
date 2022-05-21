/**
 * Aufgabe: L09.1_OldMacDonaldsFarm
 * Name: Elena Maria Voulgaridis
 * Matrikelnummer: 269367
 * Datum: 20.05.2022
 * Quellen: https://www.w3schools.com/jsref/jsref_return.asp
 */
namespace L09_OldMacDonaldsFarm {
    
    export class Animal {
        name: string;
        image: string;
        species: string;
        food: string;
        foodMeal: number;
        foodStorage: number;
        sound: string;

        constructor(_name: string, _species: string, _food: string, _foodMeal: number, _foodStorage: number, _sound: string) {
            this.name = _name;
            this.image = "<img src=image/" + _species + ".png heigth=100px width=100px>";
            this.species = _species;
            this.food = _food;
            this.foodMeal = _foodMeal;
            this.foodStorage = _foodStorage;
            this.sound = _sound;
        }
        picture(): string {
            return this.image;
        }

        eat(): string {
            return this.name + " " + "eats" + " " + this.foodMeal + " " + this.food + "<br>" +
            this.foodStorage + " " + this.food + " " + "left in old MacDonalds storage!";
        }

        sing(): string {
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
}