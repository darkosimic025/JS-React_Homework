// 9.Zadatak_________________________________________________________________________

let
n = 5;
i = n;
m = 15;
dvostruka = 0;
for (i; i <= m; i++) {
    dvostruka = i * 2;
    console.log(`Dvostruka vrednost broja ${i} je ${dvostruka}.`);
}

// 10.Zadatak____________________________________________________________________________

n = 1;
i = n;
m = 100;
let suma = 0;
for (i; i <= m; i++) {
    suma = suma + i;
} console.log(`Suma brojeva od ${n} do ${m} je ${suma}.`)



// 11.Zadatak__________________________________________________________________________

n = 1;
i = n;
m = 3;
suma = 0;
let kvadrat = 0;
for (i; i <= m; i++) {
    kvadrat = i * i;
    suma = kvadrat + suma;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}.`);

// 12.Zadatak__________________________________________________________________________

n = 20;
i = n;
m = 100;
let proizvod = 1;
for (i; i <= m; i++) {
    if (i%11==0) {
        proizvod = proizvod * i;
    }
}
console.log(`Proizvod svih brojeva od ${n} do ${m} je ${proizvod}.`);

// 13.Zadatak__________________________________________________________________________

n = -8;
i = n;
m = 20;
let
pozitivni = 0;
negativni = 0;

for (i; i <= m; i++) {
    if (i < 0) {
        negativni++;
    } else {
        pozitivni++;
    }
}
console.log(`U intervalu od ${n} do ${m} ima pozitivnih ${pozitivni} brojeva, a negativnih ${negativni} brojeva.`);

// 14.Zadatak__________________________________________________________________________

n = 5;
i = n;
m = 50;
let kolicina = 0;
for (i; i <= m; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        kolicina++;
    }
}
console.log(`Brojeva deljivih sa 3 ili 5 od ${n} do ${m} ima ${kolicina}.`);

// 15.Zadatak__________________________________________________________________________

n = 5;
i = n;
m = 20;
proizvod = 1;
let a = 5;
for (i; i <= m; i++) {
    if (i % a == 0) {
        proizvod = proizvod * i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa ${a} je ${proizvod}.`);

// 16.Zadatak__________________________________________________________________________
let k = 6;
n = k;
i = 1;
let delioc = 0;
for (i; i <= n; i++) {
    if (k % i == 0) {
        if (i % 3 == 0 && i % 2 == 1) {
            delioc++;
        }
    }
} 
console.log(`${delioc}`);


// 17.Zadatak________________________________________________________________________________

k = 132,
zbir = 0;

while (k) {
    zbir += k % 10;
    k = Math.floor(k / 10);
}

console.log(zbir);

// 18.Zadatak________________________________________________________________________


let list = `<ul>`;
for (let item = 1; item <= 10; item++) {
    if (item % 3 == 0) {
        list += `
            <ul>
                <li style="color: purple;">Element ${item} </li>
            </ul>
            `;
    } else {
        list += `
            <li> Element ${item} </li>
            `;
    }
}
document.body.innerHTML += list;



// 19.Zadatak_________________________________________________________________________

let broj = 1;
let sekcija = `<div>`;
for (let red = 1; red <= 8; red++) {
    sekcija += `<div>`
    for (let kocka = 1; kocka <= 8; kocka++) {
        if (red % 2 == kocka % 2) {
            sekcija += `<span class="bela">${broj}</span>`;
            broj++;
        } else {
            sekcija += `<span class="crna">${broj}</span>`;
            broj++;
        }
    }
    sekcija += `</div>`;
}
sekcija += `</div>`;

document.body.innerHTML += sekcija;