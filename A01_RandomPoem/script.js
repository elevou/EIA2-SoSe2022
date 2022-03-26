var randomPoem;
(function (randomPoem) {
    let noun = ["Der Osterhase", "Das Küken", "Der Hase", "Mia", "Tom", "Die Tante"];
    let verb = [" sucht", " liebt", " studiert", " hasst", " umarmt", " zerstört"];
    let object = [" Ostereier", " die Geschenke", " Schokolade", " Furtwangen", " das Osternest", " den Garten"];
    //console.log(noun);
    //console.log(verb);
    //console.log(object);
    for (let index = 6; index >= 1; index--) {
        let hallo = getVerse(noun, verb, object);
        console.log(hallo);
    }
    function getVerse(_noun, _verb, _object) {
        let randomNoun = Math.floor(Math.random() * _noun.length);
        let randomVerb = Math.floor(Math.random() * _verb.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        let sentece = _noun[randomNoun] + _verb[randomVerb] + _object[randomObject];
        _noun.splice(randomNoun, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);
        return sentece;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map