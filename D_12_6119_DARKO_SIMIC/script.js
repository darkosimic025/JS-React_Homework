import { Knjiga } from "./knjiga.js";

// Napraviti niz od barem tri knjige

let knjiga1 = new Knjiga("Na putu", "Dzek Keruak", 1987, 601, 8001);
let knjiga2 = new Knjiga("Vrli novi svet", "Oldus Haksli", 1977, 340, 900);
let knjiga3 = new Knjiga("Zivotinjska farma", "Dzordz Orvel", 1986, 220, 780);

let knjige = [knjiga1, knjiga2, knjiga3];


//Ispisati sve autore kojima je ime dugačko.

knjige.forEach(knjiga => {
    if (knjiga.dugackoIme() == true) {
        console.log(`Autor ${knjiga.autor} ima vise od 18 karaktera u svom imenu.`)
    }
});

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.

knjige.forEach(knjiga => {
    if (knjiga.obimna() == true && knjiga.skupa() == true) {
        console.log(`Knjiga ${knjiga.naslov} je u isto vreme i skupa i obimna.`)
    }
});

//Funkcija UKUPNA CENA

let ukupnaCena = niz => {
    let ukupnaCena = 0;
    niz.forEach(knjiga => {
        let cenaKnjige = knjiga.cena;
        ukupnaCena += cenaKnjige;
    });
    return ukupnaCena;
}
console.log(`Ukupna cena svih knjiga iz niza je ${ukupnaCena(knjige)} dinara.`);

//Funkcija PROSECNA CENA

let prosecnaCena = niz => {
    let cenaSvihKnjiga = ukupnaCena(niz);
    let brKnjiga = niz.length;
    return cenaSvihKnjiga / brKnjiga;
}

console.log(`Prosecna cena svih knjiga je ${ prosecnaCena(knjige)} dinara.`)



//Funkcija PROSECNA STRANICA

let prosecnaStranica = niz => {
    let ukupnaCenaKnjiga = ukupnaCena(niz);
    let brojStranica = 0;
    niz.forEach(knjiga => {
        brojStranica += knjiga.brojStrana;
    });
    return ukupnaCenaKnjiga / brojStranica;
}

console.log(`Prosecna cena jedne stranice iznosi ${prosecnaStranica(knjige)} dinara.`)



knjiga1.stampaj();
console.log(knjiga1.obimna());
console.log(knjiga1.skupa());
console.log(knjiga1.dugackoIme());