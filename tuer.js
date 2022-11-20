class tueur {
    constructor(nom, life) {
        this.life = life
        this.nom = nom
    }
};

class Rescape {
    constructor(nom, statistiques) {
        this.nom = nom
        this.statistiques = statistiques
    }
}

class statistiques {
    constructor(nom, mort, damage, fin) {
        this.nom = nom
        this.mort = mort
        this.damage = damage
        this.fin = fin
    }
}

let Rockie = new tueur("Rockie", 100)
let mort = []
let rescape = []
let prénom = ["Antoine", "Bernard", "Jack", "Lucia", "Manon"]
let cliché = ["nerd", "sportif", "blonde", "alcolique", "fou furieux"]
let jeux = 1


function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


for (let i = 0; i < 5; i++) {

    let degat = randBetween(0, 100)
    let mort = randBetween(0,100 - degat)
    let degat_mort = 100 - degat - mort

    rescape.push(new Rescape(prénom[getRandomInt(prénom.length)],
    new statistiques(cliché[getRandomInt(cliché.length)],
    degat / 100,
    mort / 100,
    degat_mort / 100)))
}

while ( jeux === 1 ) {
    
    let probabilitée = Math.random()
    let choix = rescape[0]
    

    console.log(Rockie.nom + " à " + Rockie.life + " PV")

    if (probabilitée <= choix.statistiques.mort) {

        console.log(Rockie.nom + " à tué " + choix.nom + " !");
        mort.push(rescape[0].nom)
        rescape.shift()
    } else if (probabilitée > choix.statistiques.mort && probabilitée <= choix.statistiques.damage) {

        console.log(choix.nom + " à veski et a crée  10 de dégâts !")
        Rockie.life -= 10
    } else {

        console.log(Rockie.nom + " à trucidé " + choix.nom + " mais il l'a tapé avant de perdre la vie")
        Rockie.life -= 15
        mort.push(rescape[0].nom)
        rescape.shift()
    }

    if (Rockie.life <= 0) {
        if (mort.length == 0) {
            mort.push("personne")
        }

        if (rescape.length == 0) {
            console.log("Tout le monde est mort !")
            jeux = 0
        } else {
            console.log("Les rescapés ont gagné mais R.I.P à " + graveyard)
            jeux = 0
        }
    } else if (rescape.length == 0) {
        console.log("Les rescapés ont tous perdu la vie !")
        jeux = 0
    }
}