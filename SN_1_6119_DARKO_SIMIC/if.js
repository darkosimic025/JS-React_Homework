// 1.Zadatak _________________________________________________________________________________________________

let a = 180;
    b = 170;
    c = 170;

if ((a > b && b >=c) || (a > c && c >=b)) {
    console.log("Broj a je najveci");
} else if ((b > c && c >=a) || (b > a && a >=c)) {
    console.log("Broj b je najveci");
} else if ((c>a && a>=b) || (c>b && b>=a)) {
    console.log("Broj c je najveci");
} else {
    console.log("Greska: Ili dva broja dele vrednost najveceg, ili su sva ti ista.");
}

// 2.Zadatak _________________________________________________________________________________________________

let temp= 51;

if (temp < -15 || temp > 40) {
    document.write("Ekstremna temperatura");
}

// 3.Zadatak _________________________________________________________________________________________________


let g = new Date();
let godina = g.getFullYear();

if (((godina % 4 == 0) && (godina % 100 != 0)) || (godina % 400 == 0)) {
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna");
}

// 4.Zadatak _________________________________________________________________________________________________

const d = new Date();
let dan = d.getDay();
const s = new Date();
let sat = s.getHours();

if ((dan > 0 && dan < 6) && (sat > 8 && sat < 19)) {
    console.log("Butik je otvoren od 9 do 20h");
} else if ((dan==0 && dan==6) && (sat > 9 && sat < 17)) {
    console.log("Butik je otvoren od 10 do 18h");
} else {
    console.log("Butik je zatvoren");
}

// 5.Zadatak _________________________________________________________________________________________________

dan = d.getDate();
let m = new Date();
mesec = m.getMonth();
mesec++;
godina = g.getFullYear();
preostaloDana = 0;
if (mesec == 2) {
    if (((godina % 4 == 0) && (godina % 100 != 0)) || (godina % 400 == 0)) {
        preostaloDana = 29 - dan;
    } else {
        preostaloDana = 28 - dan;
    } 
} else if (mesec % 2 == 0 && mesec != 2) {
    preostaloDana = 30 - dan;
} else {
    preostaloDana = 31 - dan;
}
document.body.innerHTML += `<p>Do kraja meseca je preostalo jos ${preostaloDana} dana.</p>`
console.log(preostaloDana);

// 6.Zadatak _________________________________________________________________________________________________

let
p = 40;
n = 20;
visakLjudi = Math.ceil((n * 3 - p) / 3);
if (n * 3 < p) {
    document.body.innerHTML += `<p style="color:green;">Obejkat se pridrzava propisa.</p>`;
}
else {
    document.body.innerHTML += `<p style="color:red;">Objekat se ne pridrzava propisa. Potrebno je da ga napusti ${visakLjudi} ljudi.</p>`
}

// 7.Zadatak 

let
pocSatLek1 = 14;
pocSatLek2 = 16;
pocMinLek1 = 0;
pocMinLek2 = 0;
krajSatLek1 = 21;
krajSatLek2 = 23;
krajMinLek1 = 38;
krajMinLek2 = 20;
preklapanjeSat = 0;
preklapanjeMinut = 0;
preklapanjeSat_minut = 0;

pocSatLek1_minut = pocSatLek1 * 60 +pocMinLek1;
pocSatLek2_minut = pocSatLek2 * 60 +pocMinLek2;
krajSatLek1_minut = krajSatLek1 * 60 +krajMinLek1;
krajSatLek2_minut = krajSatLek2 * 60 +krajMinLek2;

// Ukoliko lekar 2 pocne da radi pre lekara 1, a zavrsi pre lekara 1 ili u isto vreme

if (krajSatLek2_minut > pocSatLek1_minut && krajSatLek1_minut >= krajSatLek2_minut && pocSatLek1_minut >= pocSatLek2_minut) {
    preklapanjeSat_minut += krajSatLek2_minut - pocSatLek1_minut;
    preklapanjeSat = Math.floor(preklapanjeSat_minut / 60);
    preklapanjeMinut = preklapanjeSat_minut % 60;
} 

// Ukoliko lekar 1 pocne da radi pre lekara 2,a zavrsi pre lekara 2 ili u isto vreme

else if (krajSatLek1_minut > pocSatLek2_minut && pocSatLek2_minut>=pocSatLek1_minut && krajSatLek2_minut>=krajSatLek1_minut) {
    preklapanjeSat_minut += krajSatLek1_minut - pocSatLek2_minut;
    preklapanjeSat = Math.floor(preklapanjeSat_minut / 60);
    preklapanjeMinut = preklapanjeSat_minut % 60;
}

// Ukoliko smena lekara 1 u potpunosti obuhvata smenu lekara 2
    
else if (pocSatLek2_minut > pocSatLek1_minut && krajSatLek1_minut > krajSatLek2_minut) {
    preklapanjeSat_minut += krajSatLek2_minut - pocSatLek2_minut;
    preklapanjeSat = Math.floor(preklapanjeSat_minut / 60);
    preklapanjeMinut = preklapanjeSat_minut % 60;
}

// Ukoliko smena lekara 2 u potpunosti obuhvata smenu lekara 1
    
else if (pocSatLek1_minut > pocSatLek2_minut && krajSatLek2_minut > krajSatLek1_minut) {
    preklapanjeSat_minut += krajSatLek1_minut - pocSatLek1_minut;
    preklapanjeSat = Math.floor(preklapanjeSat_minut / 60);
    preklapanjeMinut = preklapanjeSat_minut % 60;
}
    
// Ukoliko se smene ne preklapaju
    
else {
    console.log(`Smene se ne preklapaju`);
}

// Da bi se minuti od 0 do 9 prikazivali u formatu 00 i 09

if (pocMinLek1 < 10) {
    pocMinLek1 = '0' + pocMinLek1;
}
if (pocMinLek2 < 10) {
    pocMinLek2 = '0' + pocMinLek2;
}
if (krajMinLek1 < 10) {
    krajMinLek1 = '0' + krajMinLek1;
} 
if (krajMinLek2 < 10) {
    krajMinLek2 = '0' + krajMinLek2;
}

document.body.innerHTML += `<p>Pocetak radnog vremena lekara 1 je u ${pocSatLek1}:${pocMinLek1}</p>`;
document.body.innerHTML += `<p>Kraj radnog vremena lekara 1 je u ${krajSatLek1}:${krajMinLek1}</p>`;
document.body.innerHTML += `<p>Pocetak radnog vremena lekara 2 je u ${pocSatLek2}:${pocMinLek2}</p>`;
document.body.innerHTML += `<p>Kraj radnog vremena lekara 2 je u ${krajSatLek2}:${krajMinLek2}</p>`;
document.body.innerHTML += `<p>Lekar 1 i lekar 2 su ukupno vremena zajedno na poslu proveli ${preklapanjeSat} sat i ${preklapanjeMinut} minuta</p>`;

// 8.Zadatak _________________________________________________________________________________________________


let operacija = 's';
a = 5;
b = 2;
rezultat = ``;
if (operacija == 'm') {
    rezultat = a * b;
} else if (operacija == 'd') {
    rezultat = a / b;
} else if (operacija == 'o') {
    rezultat = a - b;
} else if (operacija == 's') {
    rezultat = a + b;
} else {
    console.log(`Uneta operacija nije ispravna.`);
}
console.log(rezultat);
