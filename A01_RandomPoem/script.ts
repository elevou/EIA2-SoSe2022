namespace randomPoem {

    let noun: string [] = ["Der Osterhase", "Das Küken", "Der Hase", "Mia", "Tom", "Die Tante"];
    let verb: string [] = [" sucht", " liebt", " studiert", " hasst", " umarmt", " zerstört"];
    let object: string [] = [" Ostereier", " die Geschenke", " Schokolade", " Furtwangen", " das Osternest", " den Garten"];

    //console.log(noun);
    //console.log(verb);
    //console.log(object);

    for (let index: number = 6; index >= 1; index--) {
        let hallo: string = getVerse(noun, verb, object);
        console.log(hallo);
    }

    function getVerse (_noun: string[], _verb: string[], _object: string[]): string {
        let randomNoun: number = Math.floor(Math.random() * _noun.length);
        let randomVerb: number = Math.floor(Math.random() * _verb.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);

        let sentece: string = _noun[randomNoun] + _verb[randomVerb] + _object[randomObject];
        
        
        _noun.splice(randomNoun, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);

        return sentece;
    }
}