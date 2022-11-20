class Personnage {
    constructor(prénom, hp) {
        this.prénom = prénom;
        this.hp = hp;
    }
}

class Musique{
    constructor(musique, musique1, musique2, musique3, musique4) {
        this.musique = musique;
        this.musique1 = musique1;
        this.musique2 = musique2;
        this.musique3 = musique3;
        this.musique4 = musique4;
    }
}

class trajet{
    constructor(radio, redlight, changement, trajets) {
        this.radio = radio;
        this.fredlight = redlight;
        this.changement = changement;
        this.trajets = trajets;

    }
}

const John = new Personnage ("John", 10);
var radio = ["Anissa - Wejdene", "musique1", "musique2", "musique3", "musique4"];
const chemin = new trajet (0, 30 , 0 , 0);
const tour = 0;
let i = 0


function boucle() {
    if (John.hp > 0) {
        console.log(music);
        if (music === "Anissa - Wejdene"){
            chemin.changement = chemin.changement + 1;
            chemin.trajets = chemin.trajets + 1;
            John.hp = John.hp - 1;
            console.log("Votre life est maintenant à : " , John.hp ," Le nombres de changments est de ", chemin.changement , "Nombre de tour:", chemin.trajets);
        } else {
            chemin.trajets = chemin.trajets + 1;
            console.log("Vous avez passé un tour", " Le nombres de tours est de  ", chemin.trajets);
        }
      } else {
        console.log("GAME OVER !");
      }
}

while (John.hp > 0 && i<30) {
    var random = Math.floor(Math.random()*radio.length);
    var music = radio[random];
    boucle();
    i ++
    if (i === 30) {
       if (John.hp > 0) {
         console.log( John.prénom , "est bien arrivé chez lui , il a fallut ",  chemin.changement , "changements pour arriver chez lui")
       }
    }
}