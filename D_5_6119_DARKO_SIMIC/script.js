// Prvi zadatak
let p = 2000;
    
let m = 1700;
    
let k = 800;
    
let cenaDzempera= (p+m-k)/2
console.log("Pera treba da dobije kusur od " + (p - cenaDzempera) + " dinara");
console.log("Mika treba da dobije kusur od " + (m - cenaDzempera) + " dinara");

// Drugi zadatak

let n = 220;
    ukupnoPoglavlja = n;
let a = 50;
    procitanoPoglavlja = a + (a + 2);

console.log("Preostalo je procitati jos " + (ukupnoPoglavlja-procitanoPoglavlja) + " poglavlja.");

if (ukupnoPoglavlja-procitanoPoglavlja<ukupnoPoglavlja/2) {
    console.log("Ostalo je da se procita manje od polovine knjige.");
}

// Treci zadatak

let u=4000
    kJ = u;
let kcal = kJ * 4.1868;

if (kcal < 2000) {
    console.log("Potrebno je povećati dnevni unos.");
} else {
    console.log("Nije potrebno povećati dnevni unos.");
}